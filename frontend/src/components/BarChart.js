// import d3 component inside react
import * as d3 from "d3";

// import required hook
import { useRef, useEffect } from "react";

export default function BarChart({ data }) {

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

        // its creates a band scale for bar in the x-axis and map the the data for the end year also applies padding between bars
        const x = d3.scaleBand().domain(data.map(d => d.end_year)).range([0, width]).padding(0.1);

        // it creates straign scale for the y axis for the input domain based on intensity
        const y = d3.scaleLinear().domain([0, d3.max(data, d => d.intensity)]).nice().range([height, 0]);

        // defining a group element within svg to which we apply attr or styles
        const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

        // select all existing rectangle and set height and position tham according to data
        g.selectAll("rect").data(data).enter().append("rect").attr("x", d => x(d.end_year)).attr("y", d => y(d.intensity)).attr("width", x.bandwidth()).attr("height", d => height - y(d.intensity)).attr("fill", "steelblue").attr("stroke", "black").attr("stroke-width", 1);

        // applies tranfoemation to the g and position thm at the bottom of the axis
        g.append("g").attr("transform", `translate(0,${height})`).call(d3.axisBottom(x));

        // append g create y axis at left
        g.append("g").call(d3.axisLeft(y));

        // add label to the axis
        g.append("text").attr("x", width / 2).attr("y", height + margin.bottom - 10).attr("text-anchor", "middle").attr("fill", "black").style("font-size", "16px").style("font-weight", "600").text("End Year");
        g.append("text").attr("transform", "rotate(-90)").attr("x", -height / 2).attr("y", -margin.left + 20).attr("text-anchor", "middle").attr("fill", "black").style("font-size", "16px").style("font-weight", "600").text("Intensity");

    }, [data]);

    // return svg to render chart in dashboard
    return (
        <svg ref={svgRef} style={{ width: "100%", height: "400px" }} />
    );
}
