// import d3 for visualization
import * as d3 from "d3";

// import required hooks from React
import { useRef, useEffect } from "react";

// define the PieChart component
export default function PieChart({ data }) {
    
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
        const radius = Math.min(width, height) / 2;

        // set svg dimensions
        svg.attr("width", width).attr("height", height);

        // remove any existing content in the svg
        svg.selectAll("*").remove();

        // roll up data to get intensity by sector
        const sectorData = d3.rollup(
            data,
            v => d3.sum(v, d => d.intensity), 
            d => d.sector
        );

        // convert rolled-up data to an array of objects
        const pieData = Array.from(sectorData, ([sector, intensity]) => ({ sector, intensity }));

        // create a pie generator
        const pie = d3.pie().value(d => d.intensity);
        const arcData = pie(pieData);

        // create an arc generator
        const arc = d3.arc()
            .innerRadius(0)
            .outerRadius(radius);

        // append a group to svg for pie chart
        const g = svg.append("g")
            .attr("transform", `translate(${(width + margin.left + margin.right) / 2}, ${(height + margin.top) / 2})`);

        // append pie slices
        g.selectAll("path")
            .data(arcData)
            .enter()
            .append("path")
            .attr("d", arc)
            .attr("fill", (d, i) => d3.schemeCategory10[i % 10])
            .attr("stroke", "white")
            .attr("stroke-width", 1);

        // append labels to the slices
        g.selectAll("text")
            .data(arcData)
            .enter()
            .append("text")
            .attr("transform", d => `translate(${arc.centroid(d)})`)
            .attr("dy", "0.35em")
            .attr("text-anchor", "middle")
            .text(d => d.data.sector);

        // add a title to the pie chart
        svg.append("text")
            .attr("x", (width + margin.left) / 2)
            .attr("y", height + margin.top + 20)
            .attr("text-anchor", "middle")
            .style("font-size", "18px")
            .style("font-weight", "bold")
            .text("Sectors");

    }, [data]);

    // return the svg element to render the pie chart
    return (
        <svg ref={svgRef} style={{ width: "100%", height: "400px" }} />
    );
}
