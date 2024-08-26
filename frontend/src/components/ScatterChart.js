// import d3 for visualization
import * as d3 from "d3";

// import required hooks from React
import { useRef, useEffect } from "react";

// define the ScatterPlot component
export default function ScatterPlot({ data }) {
    
    // define ref for svg
    const svgRef = useRef();

    // useEffect hook to handle the chart rendering on data change
    useEffect(() => {
        // select the svg using ref
        const svg = d3.select(svgRef.current);

        // define margins for the chart
        const margin = { top: 20, right: 20, bottom: 60, left: 60 };

        // specify width and height for the chart
        const width = svg.node().getBoundingClientRect().width - margin.left - margin.right;
        const height = svg.node().getBoundingClientRect().height - margin.top - margin.bottom;

        // remove any existing content in the svg
        svg.selectAll("*").remove();

        // create x scale
        const x = d3.scaleLinear().domain([0, d3.max(data, d => d.intensity)]).range([0, width]);

        // create y scale
        const y = d3.scaleLinear().domain([0, d3.max(data, d => d.relevance)]).range([height, 0]);

        // create color scale for different regions
        const color = d3.scaleOrdinal(d3.schemeCategory10);

        // append a group to svg for scatter plot
        const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

        // append circles for each data point
        g.selectAll("circle").data(data).enter().append("circle").attr("cx", d => x(d.intensity)).attr("cy", d => y(d.relevance)).attr("r", 5).attr("fill", d => color(d.region)).attr("stroke", "black");

        // append x-axis
        g.append("g").attr("transform", `translate(0,${height})`).call(d3.axisBottom(x));

        // append y-axis
        g.append("g").call(d3.axisLeft(y));

        // add x-axis label
        g.append("text").attr("x", width / 2).attr("y", height + margin.bottom - 10).attr("text-anchor", "middle").text("Intensity");
            
        // add y-axis label
        g.append("text").style("font-size", "16px").style("font-weight", "600").attr("transform", "rotate(-90)").attr("x", -height / 2).attr("y", -margin.left + 20).attr("text-anchor", "middle").text("Relevance");

    }, [data]);

    // return the svg element to render the scatter plot
    return (
        <svg ref={svgRef} style={{ width: "100%", height: "400px" }} />
    );
}
