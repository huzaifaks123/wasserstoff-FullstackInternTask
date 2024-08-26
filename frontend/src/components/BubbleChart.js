// import d3 component inside react
import * as d3 from "d3";

// import required hook
import { useRef, useEffect } from "react";

// define the BubbleChart component
export default function BubbleChart({ data }) {

    // define ref for svg
    const svgRef = useRef();

    // update data on the chart on component mount and update
    useEffect(() => {

        // filter and map data, ensuring end_year is within the desired range
        const filteredData = data.filter(d => d.end_year !== null && d.end_year >= 1000).map(d => ({...d,
                end_year: Math.min(d.end_year, 2200)
            }));

        // select svg component using refhook
        const svg = d3.select(svgRef.current);

        //  define margin for our window
        const margin = { top: 20, right: 20, bottom: 60, left: 60 };

        // specify width and height for the chart
        const width = svg.node().getBoundingClientRect().width - margin.left - margin.right;
        const height = svg.node().getBoundingClientRect().height - margin.top - margin.bottom;

        // remove existing data
        svg.selectAll("*").remove();

        // create a band scale for the x-axis using region or country
        const x = d3.scaleBand().domain(filteredData.map(d => d.region || d.country)).range([0, width]).padding(0.1);

        // create a linear scale for the y-axis based on end_year
        const y = d3.scaleLinear().domain([2000, d3.max(filteredData, d => d.end_year)]).range([height, 0]);

        // create a square root scale for the radius of bubbles based on intensity
        const r = d3.scaleSqrt().domain([0, d3.max(filteredData, d => d.intensity)]).range([0, 20]);

        // create a sequential color scale for the bubbles based on relevance
        const color = d3.scaleSequential(d3.interpolateCool).domain([0, d3.max(filteredData, d => d.relevance)]);

        // defining a group element within svg to which we apply attr or styles
        const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

        // select all existing circles and set attributes and styles based on data
        g.selectAll("circle").data(filteredData).enter().append("circle").attr("cx", d => x(d.region || d.country) + x.bandwidth() / 2).attr("cy", d => y(d.end_year)).attr("r", d => r(d.intensity)).attr("fill", d => color(d.relevance)).attr("stroke", "black");

        // add x-axis at the bottom with rotated labels
        g.append("g").attr("class", "axis axis--x").attr("transform", `translate(0,${height})`).call(d3.axisBottom(x)).selectAll("text").attr("transform", "rotate(-45)").style("text-anchor", "end");

        // add y-axis on the left side with integer format for years
        g.append("g").attr("class", "axis axis--y").call(d3.axisLeft(y).tickFormat(d3.format("d"))); // Ensures year values are shown as integers

        // add label to the x-axis
        g.append("text").attr("x", width / 2).attr("y", height + margin.bottom - 10).attr("text-anchor", "middle").attr("fill", "black").style("font-size", "16px").style("font-weight", "600").text("Region or Country");

        // add label to the y-axis with rotation
        g.append("text").attr("transform", "rotate(-90)").attr("x", -height / 2).attr("y", -margin.left + 20).attr("text-anchor", "middle").attr("fill", "black").style("font-size", "16px").style("font-weight", "600").text("Year");

    }, [data]);

    // return svg to render chart in dashboard
    return (
        <svg ref={svgRef} style={{width: "100%", height: "100%" }} />
    );
}
