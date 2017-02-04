import randomColor from 'randomcolor'

export function Morph(group) {
  d3.selectAll('circle').transition(300).ease(d3.easeQuadInOut).delay((d, i) => i * 60).attr('r', rand(40, 80)).transition(rand(50, 100)).attr('r', rand(20, 40)).on('end', Morph);
  d3.selectAll('circle').transition().style('fill', function(d, i) {
    return getRandomColor('blue')
  }).style('z-index', function(d, i) {
    return rand(5, 10)
  })

  // .attr('transform', function(d, i) {
  //     return `rotate(${rand(5, 10)})`
  // })

}

function getRandomColor(hue) {
  return randomColor({hue, luminosity: "dark"})
}

function rand(arg) {
  let {random, floor} = Math;
  if (arguments.length === 2) {
    return floor(random() * arguments[0]) + arguments[1]
  } else if (typeof arg === "number") {
    return random() < arg
  } else if (Array.isArray(arg)) {
    return arg[floor(random() * arg.length)]
  }
}
