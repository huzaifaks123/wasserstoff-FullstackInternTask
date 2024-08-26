// import d3 for visualization
import * as d3 from "d3";

// import required hooks from React
import { useRef, useEffect } from "react";

// define the SWOT data structure
const data = {
    strengths: ["High intensity in oil production", "Strong GDP growth forecast"],
    weaknesses: ["Economic dependence on oil", "Environmental concerns"],
    opportunities: ["Growing global demand for oil", "Advancements in biofuels"],
    threats: ["Volatility in oil prices", "Political instability in oil-dependent regions"]
};

// define the SWOTChart component
export default function SWOTChart() {
    // define ref for svg
    const svgRef = useRef();

    // useEffect hook to handle the chart rendering
    useEffect(() => {
        // select the svg using ref
        const svg = d3.select(svgRef.current);
        const width = svg.node().getBoundingClientRect().width;
        const height = svg.node().getBoundingClientRect().height;

        // set svg dimensions
        svg.attr("width", width).attr("height", height);
        svg.selectAll("*").remove(); // remove any existing content in the svg

        // Define positions and sizes for each SWOT category
        const positions = [
            { x: 0, y: 0, label: "Strengths", color: "rgb(70, 31, 117)" },  // Dark purple
            { x: width / 2, y: 0, label: "Weaknesses", color: "rgb(79, 80, 178)" }, // Blue
            { x: 0, y: height / 2, label: "Opportunities", color: "rgb(33, 73, 116)" }, // Dark blue
            { x: width / 2, y: height / 2, label: "Threats", color: "rgb(43, 124, 178)" } // Light blue
        ];

        const rectWidth = width / 2; // Rectangle width
        const rectHeight = height / 2; // Rectangle height

        // Draw rectangles and add labels
        positions.forEach((pos) => {
            // Draw rectangle
            svg.append('rect')
                .attr('x', pos.x)
                .attr('y', pos.y)
                .attr('width', rectWidth)
                .attr('height', rectHeight)
                .attr('fill', pos.color) // Use the specified color
                .attr('stroke', '#333')
                .attr('stroke-width', 2);

            // Add category label centered
            svg.append('text')
                .attr('x', pos.x + rectWidth / 2) // Center horizontally
                .attr('y', pos.y + 50) // Position it inside the rectangle
                .text(pos.label)
                .attr('font-size', '22px')
                .attr('font-weight', 'bold')
                .attr('fill', '#fff')
                .attr('text-anchor', 'middle'); // Center text

            // Add items for each category
            data[pos.label.toLowerCase()].forEach((item, j) => {
                svg.append('text')
                    .attr('x', pos.x + 20) // Padding inside the rectangle
                    .attr('y', pos.y + 90 + j * 20) // Position it below the label
                    .text(`- ${item}`)
                    .attr('font-size', '18px')
                    .attr('fill', '#fff')
                    .attr('text-anchor', 'start'); // Align text to start
            });
        });
    }, []); // empty dependency array to run once on mount

    // return the svg element to render the SWOT chart
    return (
        <svg ref={svgRef} style={{ width: "100%", height: "100%" }} />
    );
}
