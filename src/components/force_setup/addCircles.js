import {getHsvGolden as getColor, toRgbString} from 'golden-colors'

export function addCircles(selection, nodes) {
  return selection.data(nodes).enter().append('circle').attr('r', d => d.r).attr('cy', d => d.y).attr('cx', d => d.x).style('fill', d => getColor(.5, .6).toRgbString())
}

d3.addCircles = addCircles;
