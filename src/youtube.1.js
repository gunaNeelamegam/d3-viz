import React, { } from "react"

import { select, range } from "d3"
const Youtube1 = () => {

    const width = window.innerWidth
    const height = window.innerHeight

    //creating the animating circles using the d3 

    /**
     * 
     * creating the d3 circle  as the animating
     * 
     * 
     */

    let t = 0

    const svg = select("body").append("svg").attr("width", width).attr("height", height)

    let intervalId = setInterval(() => {
        const data = range(20).map((value) => ({
            x: value * 60 + 50,
            y: Math.sin(value * 0.5 + t) * 220 + 250
        }))

        const circles = svg.selectAll("circle").data(data)
        circles.enter().append("circle").attr("cx", d => d.x).attr("cy", d => d.y).attr("r", 20)
        t = t + 1
    }, 1000)

    /**
     *  AT the initial time all the circle dom elements are not present inside the dom so at the you whats to create the dom elements fo you needs  the data t the one point  so using the svg.selectAll("type of ").data(data)
     * 
     * using the above api you can create the initial data and privode to the dom elements 
     * 
     *  const circles = svg.selectAll("circle").data(data)
     * 
     * //next
     * 
     * In the below snippet code if there is no elements are not  present at the initail render you are createing the new set of fom elements using the circles.enter().append("type of fom element inside the svg")
     * 
     * const circlesEntry = circles.enter().append("circle")
     * 
     * //next 
     * 
     * After that there is three different ways the dom element may changes the behaviour ar the render time  
     * 
     * enter and update and exit 
     * 
     * enter is used when you are create the dom element 
     * 
     * if you whats to update the valye of the dom element at the runtime using the merge is api to update the value 
     * 
     * snippet :
     *  circles.merge(selection to change the value at the runtime example circle entry)
     * 
     * at last when the dom element is removed at the runtime you must needs to clear all the remove the dom elements using the circles.exit().remove()
     * 
     */

    // svg.selectAll("circle")
    //     .data(data).join()
    //     .attr("cx", (d) => d.x)
    //     .attr("cy", (d) => (d.y))
    //     .attr("r", 20)

    return (
        <div>
            <h1>Youtube1 tutorial 1 using d3    </h1>
        </div>
    )
}

export default Youtube1