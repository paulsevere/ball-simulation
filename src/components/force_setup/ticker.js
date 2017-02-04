const d = function(sel) {
  return d3.selectAll(sel)
}
export function ticker() {
  // if (d.x > width || d.y > height) {
  //   return
  // }
  d3
    .selectAll('circle')
    .attr('cy', d => {
      // if (d.y > height) {
      //   d.y = height;
      //
      //   return height
      // }
      return d.y
    })
    .attr('cx', d => {

      return d.x
    })

}
