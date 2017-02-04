window.clusters = new Array(4);
let clusters = window.clusters;
export function genNodes(count, specSize, width, height, m = 4) {
  window.d3 = d3;
  return d3
    .range(0, count)
    .map(e => {
      let r = specSize || ~~ Math.round(d3.randomUniform(80, 120)())
      return {
        r,
        x: ~~ d3.randomUniform(100, (width || window.innerWidth) - r)(),
        y: ~~ d3.randomUniform(100, (height || window.innerHeight) - r)()

      }
    })

}
