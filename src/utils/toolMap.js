import React, { useEffect } from "react"
import * as d3 from "d3"

export default (props) => {
    const data = props.data
    const id = props.id
    
    useEffect(()=>{
        let svg = document.getElementById(`toolmap-${id}`)
        const nodes = data.nodes
        const links = data.links
        if(!nodes || !links){
            return
        }
        let width = svg.clientWidth
        let height = svg.clientHeight
        console.log(width,height)

        let link = d3.select(svg)
        .selectAll("line")
        .data(links)
        .enter()
        .append("line")

        let node = d3.select(svg)
        .selectAll("circle")
        .data(nodes)
        .enter()
        .append("circle")
        .attr("r", 15)
        .call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended));

        let label = d3.select(svg)
        .selectAll("text")
        .data(nodes)
        .enter()
        .append("text")
        .text( d =>{ return d.label }  )
        .call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));

        let nodeCenter = svg.querySelector('circle');
        nodeCenter = d3.select(nodeCenter);
        nodeCenter
          .attr("className","center")
          .attr("r",25)
          .attr("stroke-width", 3)

        // 3. forceSimulation設定
        let simulation = d3.forceSimulation()
        .force("link", d3.forceLink()
        .distance(70)
        )
        .force("charge", d3.forceManyBody())
        .force("center", d3.forceCenter((width / 2), (height / 2)))

      simulation.velocityDecay(0.2);

        simulation
        .nodes(nodes)
        .on("tick", ticked);

        simulation.force("link")
        .links(links);

        // 4. forceSimulation 描画更新用関数
        function ticked() {
        link
            .attr("x1", function(event) { return event.source.x; })
            .attr("y1", function(event) { return event.source.y; })
            .attr("x2", function(event) { return event.target.x; })
            .attr("y2", function(event) { return event.target.y; });
        node
            .attr("cx", function(event) { return event.x; })
            .attr("cy", function(event) { return event.y; });
        label
            .attr("x", function(event) { return event.x; })
            .attr("y", function(event) { return event.y; });
        }

        // 5. ドラッグ時のイベント関数
        function dragstarted(event) {
        if(!event.active) simulation.alphaTarget(0.3).restart();
        event.fx = event.x;
        event.fy = event.y;
        }
    
        function dragged(event, d) {
        d.x = event.x;
        d.y = event.y;
        }
    
        function dragended(event) {
        if(!event.active) simulation.alphaTarget(0);
        event.fx = null;
        event.fy = null;
        }

        d3.select('#center')
        .append("cx", width/2)
        .append("cy", height/2)
    })
        
        return (
            <svg id={`toolmap-${id}`}></svg>
            )
        }
    