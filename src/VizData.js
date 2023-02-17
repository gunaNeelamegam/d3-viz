import React from 'react'
import { select, csv, scaleLinear, extent, axisLeft, axisBottom, axisTop, max } from "d3"
/**
 *  tweekable data when you want any just changable 
 */


const VizData = () => {

    const width = window.innerWidth
    const height = window.innerHeight

    const body = select("body").attr("margin", 0).attr("overflow", "hidden")

    const svg = body.append("svg")
        .attr("height", height)
        .attr("width", width)

    const parser_data = (d) => {
        d.sepal_length = +d.sepal_length;
        d.petal_length = +d.petal_length;
        d.sepal_width = +d.sepal_width;
        d.petal_width = +d.petal_width;
        return d
    }

    //finding the min and max value inside the data 

    //using the d3 method's like exter

    /**
     *  inside the scaleLinear class we can pass the domain and range
     * domain  is used for  find the min and max for the data which are you going to plot  the data inside the dom
     * range is used to find the min and max for the windows pixel
     * 
     */

    const load_data = async () => {
        const data_url = "https://gist.githubusercontent.com/curran/a08a1080b88344b0c8a7/raw/0e7a9b0a5d22642a06d3d5b9bcbad9890c8ee534/iris.csv"
        let data = await csv(data_url, parser_data)

        // console.log(data);
        const xValue = (row) => row.petal_length
        const yValue = (row) => row.sepal_length

        //controlling the margins around the scatter plots are present inside the               
        const margins = {
            top: 20,
            right: 50,
            bottom: 20,
            left: 50
        }

        const x = scaleLinear().domain(extent(data, xValue)).range([margins.left, width - margins.right])
        const y = scaleLinear().domain(extent(data, yValue)).range([height - margins.bottom, margins.top])

        console.log(` X height : ${x.domain()} : ${x.range()}`);
        console.log(` Y height : ${y.domain()} : ${y.range()}`);


        //creating the title for the each circle inside the scatter plot points 


        let marks = data.map((d) => ({
            x: x(xValue(d)),
            y: y(yValue(d)),
            title: `X : ${xValue(d)} , Y : ${yValue(d)}`
        }))

        svg.append("g").attr("transform", `translate(${margins.left},0)`).call(axisLeft(y))
        svg.append("g").attr("transform", `translate(0,${height - margins.bottom})`).call(axisBottom(x))
        console.log(marks);
        svg.selectAll("circle").data(marks)
            .join("circle")
            .attr("cx", (d) => d.x)
            .attr("cy", (d) => d.y)
            .attr("r", 5)
            .append("title")
            .text((d) => d.title)``
        //appending the title for each scatter plot

    }
    (async () => await load_data())()
    return (
        <div>
            <h1>
                creating the animating scatter plot using d3
            </h1>
        </div>
    )
}

export default VizData