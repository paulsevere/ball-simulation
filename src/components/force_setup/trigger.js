import {restart} from './restart'
import {genNodes} from './genNodes'

export function trigger() {
  let {simulation} = this;
  let {nodes} = simulation;
  let size = ~~this.state.startSize;
  restart(simulation).nodes(simulation.nodes().concat(genNodes(1, size)))
  let cs = d3.select('svg').selectAll('circle');
  simulation.drag()(d3.addCircles(cs, simulation.nodes()))
}
