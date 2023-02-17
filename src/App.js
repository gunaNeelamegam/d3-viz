import { select, selection, range } from 'd3';

const App = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const svg = select('body')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

  const rect = svg
    .append("g")
    .selectAll("rect")
    .data(range(100))
    .join('rect')
    .attr("width", 10)
    .attr("height", height)
    .attr("fill", "black")
    .attr("x", (d) => d * 20)
    .attr("mask", "url(#mask-1)")


  //createing the horizontal line for createing the soul lette peace

  const anthor_rect = svg
    .append("g")
    .selectAll("rect")
    .data(range(100))
    .join('rect')
    .attr("width", width)
    .attr("height", 10)
    .attr("fill", "black")
    .attr("y", (d) => d * 20)
    .attr("mask","url(#mask-2)")

  //studing about the masking concept 

  const mask = svg.append("mask").attr("id", "mask-1")
  mask.append("circle").attr("cx", `${width / 2}`)
    .attr("cy", `${height / 2}`)
    .attr("r", 200)
    .attr("fill", "white");

  const mask2 = svg.append("mask").attr("id", "mask-2")
  mask2.append("rect").attr("width", width).attr("height", height).attr("fill", "white")
  mask2.append("circle").attr("cx", width / 2).attr("cy", height / 2).attr("r", 200).attr("fill","black")
}

export default App