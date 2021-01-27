import React from "react"
import * as d3 from "d3"

export default (props) => {
    const data = props.data
    let svg = document.getElementById('toolmap-work__SVG')

    const createToolMap = mapData =>{
        const nodes = mapData.nodes
        const links = mapData.links
        let width = 500
        let height = 100
        // let width = svg.clientWidth
        // let height = svg.clientHeight

        let link = d3.select(svg)
        .selectAll("line")
        .data(links)
        .enter()
        .append("line")
        .attr("stroke", "#BDB26F")

        let node = d3.select(svg)
        .selectAll("circle")
        .data(nodes)
        .enter()
        .append("circle")
        .attr("r", 15)
        .attr("fill", "#3F4A88")
        .attr("stroke", "#BDB26F")
        // .call(d3.drag()
        //     .on("start", dragstarted)
        //     .on("drag", dragged)
        //     .on("end", dragended));

        let label = d3.select(svg)
        .selectAll("text")
        .data(nodes)
        .enter()
        .append("text")
        .text( d =>{ return d.label }  )
        .attr( "fill", "#BDB26F" )

        // 3. forceSimulation設定
        let simulation = d3.forceSimulation()
        .force("link", d3.forceLink()
        .distance(40)
        )
        .force("charge", d3.forceManyBody())
        .force("center", d3.forceCenter((width / 2), (height / 2)));

        simulation
        .nodes(nodes)
        .on("tick", ticked);

        simulation.force("link")
        .links(links);

        // 4. forceSimulation 描画更新用関数
        function ticked() {
        link
            .attr("x1", function(d) { return d.source.x; })
            .attr("y1", function(d) { return d.source.y; })
            .attr("x2", function(d) { return d.target.x; })
            .attr("y2", function(d) { return d.target.y; });
        node
            .attr("cx", function(d) { return d.x; })
            .attr("cy", function(d) { return d.y; });
        label
            .attr("x", function(d) { return d.x; })
            .attr("y", function(d) { return d.y; });
        }

        // 5. ドラッグ時のイベント関数
        function dragstarted(d) {
        // if(!d3.event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
        }

        function dragged(d) {
        d.fx = d3.event.x;
        d.fy = d3.event.y;
        }

        function dragended(d) {
        // if(!d3.event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
        }
    }

createToolMap(data)

return (
    <svg id="toolmap-work__SVG"></svg>
    )
}