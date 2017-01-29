

export function collide(radius, iter) {
  return d3.forceCollide(radius || collideDefault).iterations(iter = 100)
}

export function charge(fn) {
  return d3.forceManyBody().strength(fn = chargeDefault())
}

export function center(fn, x, y) {
  return d3.forceCenter(fn || x, y)
}


export function fX(pos, stren) {
  return d3.forceX(pos).strength(stren)
}

export function fY(pos, stren) {
  return d3.forceY(pos).strength(stren)
}



export default function(sim) {
  sim.force()
}




function collideDefault(d) {
  return d.r + Math.sqrt(d.r)
}


function chargeDefault() {
  return d => {
    let out = ~~d.r > 30 ? ~~d.r * 10 : ~~-500
    return out
  }
}
