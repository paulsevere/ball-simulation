import {restart} from './restart'

export function drag(sim) {
  let drg = d3.drag();
  drg.on('start', n => {
    restart(sim)
  })
  drg.on('drag', d => {
    let {x, y} = d3.event;
    d.x = x;
    d.y = y;
  })
  return drg
}
