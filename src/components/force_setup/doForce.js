import { genNodes } from './genNodes';
import { drag } from './drag';
import { charge, center, fX, fY, collide, cluster } from './forces/forces';
import { ticker } from './ticker';
export function doForce(count, size) {
  let nodes = genNodes(count, size);
  let sim = d3.forceSimulation(nodes);
  let circs = translateNodes(nodes);
  circs.call(drag(sim));
  sim.drag = () => drag(sim);

  sim.velocityDecay(0.01);
  sim.alphaDecay(0.01);
  sim
    .force('charge', this.state.charge.on && charge(() => this.state.charge.strength))
    .force('collide', collide())
    .force('center', center(this.state.center.strength))
    .force('y', fY(height / 2, this.state.center.strength / 100))
    .force('x', fX(width / 2, this.state.center.strength / 100));

  sim.on('tick', ticker);
  window.sim = sim;
  return sim;
}

function translateNodes(nodes) {
  // document
  //   .querySelector('#holder')
  //   .innerHTML = ''
  let svg = d3.select('#svg-holder');
  // .append('svg')
  // .attr('viewBox', `0 0 ${width} ${height}`)
  window.svg = svg;
  return d3.addCircles(svg.selectAll('circle'), nodes);
}
