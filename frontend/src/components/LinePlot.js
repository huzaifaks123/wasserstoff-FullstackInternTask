// import d3 component inside react
import * as d3 from "d3";

// import required hook
import { useRef, useEffect } from "react";

// define the LinePlot component
export default function LinePlot({ data }) {
    
    // define ref for svg
    const svgRef = useRef();
    
    // update data on the chart on component mount and update
    useEffect(() => {

        // select svg component using ref
        const svg = d3.select(svgRef.current);

        // define margin for our window
        const margin = { top: 20, right: 20, bottom: 60, left: 60 };

        // specify width and height for the chart
        const width = svg.node().getBoundingClientRect().width - margin.left - margin.right;
        const height = svg.node().getBoundingClientRect().height - margin.top - margin.bottom;

        // remove existing data
        svg.selectAll("*").remove();

        // create a band scale for the x-axis using end year
        const x = d3.scaleBand().domain(data.map(d => d.end_year)).range([0, width]).padding(0.1);

        // create a linear scale for the y-axis using intensity
        const y = d3.scaleLinear().domain([0, d3.max(data, d => d.intensity)]).nice().range([height, 0]);

        // create a line generator
        const line = d3.line().x(d => x(d.end_year) + x.bandwidth() / 2).y(d => y(d.intensity));

        // defining a group element within svg to which we apply attr or styles
        const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

        // append the line path to the chart
        g.append("path").datum(data).attr("fill", "none").attr("stroke", "steelblue").attr("stroke-width", 1.5).attr("d", line);

        // add x-axis at the bottom
        g.append("g").attr("class", "axis axis--x").attr("transform", `translate(0,${height})`).call(d3.axisBottom(x));

        // add y-axis on the left side
        g.append("g").attr("class", "axis axis--y").call(d3.axisLeft(y));

        // add label to the x-axis
        g.append("text").attr("x", width / 2).attr("y", height + margin.bottom - 10).attr("text-anchor", "middle").attr("fill", "black").style("font-size", "16px").style("font-weight", "600").text("End Year");
            
        // add label to the y-axis with rotation
        g.append("text").attr("transform", "rotate(-90)").attr("x", -height / 2).attr("y", -margin.left + 20).attr("text-anchor", "middle").attr("fill", "black").style("font-size", "16px").style("font-weight", "600").text("Intensity");

    }, [data]);

    // return svg to render chart in dashboard
    return (
        <svg ref={svgRef} style={{ width: "100%", height: "100%" }} />
    );
}
