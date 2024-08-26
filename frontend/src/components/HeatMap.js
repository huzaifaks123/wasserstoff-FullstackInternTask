// import d3 component inside react
import * as d3 from "d3";

// import required hook
import { useRef, useEffect } from "react";

// define the Heatmap component
export default function Heatmap({ data }) {

    // define ref for svg
    const svgRef = useRef();

    // update data on the chart on component mount and update
    useEffect(() => {

        // select svg component using refhook
        const svg = d3.select(svgRef.current);

        //  define margin for our window
        const margin = { top: 20, right: 20, bottom: 60, left: 60 };

        // specify width and height for the chart
        const width = svg.node().getBoundingClientRect().width - margin.left - margin.right;
        const height = svg.node().getBoundingClientRect().height - margin.top - margin.bottom;

        // remove existing data
        svg.selectAll("*").remove();

        // create a band scale for the x-axis using region
        const x = d3.scaleBand().domain(data.map(d => d.region)).range([0, width]).padding(0.1);

        // create a band scale for the y-axis using year
        const y = d3.scaleBand().domain(data.map(d => d.year)).range([height, 0]).padding(0.1);

        // create a sequential color scale based on intensity
        const color = d3.scaleSequential(d3.interpolateBlues).domain([0, d3.max(data, d => d.intensity)]);

        // defining a group element within svg to which we apply attr or styles
        const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

        // select all existing rectangles and set attributes and styles based on data
        g.selectAll("rect").data(data).enter().append("rect").attr("x", d => x(d.region)).attr("y", d => y(d.year)).attr("width", x.bandwidth()).attr("height", y.bandwidth()).attr("fill", d => color(d.intensity));

        // add x-axis at the bottom
        g.append("g").attr("transform", `translate(0,${height})`).call(d3.axisBottom(x));

        // add y-axis on the left side
        g.append("g").call(d3.axisLeft(y));

        // add label to the x-axis
        g.append("text").attr("x", width / 2).attr("y", height + margin.bottom - 10).attr("text-anchor", "middle").text("Region");

        // add label to the y-axis with rotation
        g.append("text").attr("transform", "rotate(-90)").attr("x", -height / 2).attr("y", -margin.left + 20).attr("text-anchor", "middle").text("Year");

    }, [data]);

    // return svg to render chart in dashboard
    return (
        <svg ref={svgRef} style={{ width: "100%", height: "400px" }} />
    );
}
