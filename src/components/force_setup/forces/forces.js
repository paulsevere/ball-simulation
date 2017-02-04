import {forceAttract} from 'd3-force-attract';
import {forceCluster} from 'd3-force-cluster'

export function collide(radius, iter) {
  return d3
    .forceCollide(radius || collideDefault)
    .iterations(iter = 100)
}

export function charge(fn) {
  return d3
    .forceManyBody()
    .strength((d) => d.r * fn || chargeDefault())
  // .distanceMax(600)
}

export function center(strength = .01, x = (width / 2), y = (height / 2)) {
  let a = d3.forceCenter(x, y)
  // .target()
  // .strength(strength / 100)
  return a
}
export function cluster(strength = 1, x = (width / 2), y = (height / 2)) {
  let a = forceCluster().centers(function(d) {
    return clusters[d.cluster];
  }).strength(strength)
  return a
}
window.center = center;

export function fX(pos, stren) {
  return d3
    .forceX(pos)
    .strength(stren)
}

export function fY(pos, stren) {
  return d3
    .forceY(pos)
    .strength(stren)
}

export default function(sim) {
  sim.force()
}

function collideDefault(d) {
  return d.r + Math.sqrt(d.r)
}

function chargeDefault() {
  return d => {
    let out = ~~d.r > 30
      ? ~~ d.r * 10
      : ~~ -500
    return out
  }
}
