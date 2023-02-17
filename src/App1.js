import React, { } from "react"
import { range, select } from "d3"
const App1 = () => {

    const width = window.innerWidth
    const height = window.innerHeight

    const svg = select("body").append("svg").attr("width", width).attr("height", height)
    svg.append("circle").attr("cx", width / 2).attr("cy", height / 2).attr("r", "200").attr("mask","url(#mask-1)")
    svg.selectAll("rect").data(range(100)).join("rect").attr("x", (d) => d * 20).attr("height", height).attr("width", 10).attr("fill", "black")

    const mask1 = svg.append("mask").attr("id", "mask-1")
    //all the white care not visible thing and black fill are only visiable at the front it may be any things
    mask1.append("rect").attr("height",height).attr("width",width).attr("fill","white")
    mask1.append("circle").attr("cx", `${width / 2}`).attr("cy", `${height / 2}`).attr("r", "100").attr("fill", "black")
    return (

        <svg >
        <mask id="myMask">
          {/* <!-- Everything under a white pixel will be visible --> */}
          <rect x="0" y="0" width="100" height="100" fill="white" />
      
          {/* <!-- Everything under a black pixel will be invisible --> */}
          <path
            d="M10,35 A20,20,0,0,1,50,35 A20,20,0,0,1,90,35 Q90,65,50,95 Q10,65,10,35 Z"
            fill="black" />
        </mask>
      
        <polygon points="-10,110 110,110 110,-10" fill="orange" />
      
        {/* <!-- with this mask applied, we "punch" a heart shape hole into the circle --> */}
        <circle cx="50" cy="50" r="50" mask="url(#myMask)" />
      </svg>

    )
}

export default App1


// import { select, selection, range } from 'd3';

// const App = () => {
//   const width = window.innerWidth;
//   const height = window.innerHeight;
//   const svg = select('body')
//     .append('svg')
//     .attr('width', width)
//     .attr('height', height);

//   const rect = svg
//     .append("g")
//     .selectAll("rect")
//     .data(range(100))
//     .join('rect')
//     .attr("width", 10)
//     .attr("height", height)
//     .attr("fill", "black")
//     .attr("x", (d) => d * 20)
//     .attr("mask", "url(#mask-1)")


//   //createing the horizontal line for createing the soul lette peace

//   const anthor_rect = svg
//     .append("g")
//     .selectAll("rect")
//     .data(range(100))
//     .join('rect')
//     .attr("width", width)
//     .attr("height", 10)
//     .attr("fill", "black")
//     .attr("y", (d) => d * 20)
//     .attr("mask","url(#mask-2)")

//   //studing about the masking concept 

//   const mask = svg.append("mask").attr("id", "mask-1")
//   mask.append("circle").attr("cx", `${width / 2}`)
//     .attr("cy", `${height / 2}`)
//     .attr("r", 200)
//     .attr("fill", "white");

//   const mask2 = svg.append("mask").attr("id", "mask-2")
//   mask2.append("rect").attr("width", width).attr("height", height).attr("fill", "white")
//   mask2.append("circle").attr("cx", width / 2).attr("cy", height / 2).attr("r", 200).attr("fill","black")



// }



// export default App