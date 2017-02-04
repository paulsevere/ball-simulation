export function chargeForce(val, e) {
  if (e.type !== 'mouseup') {
    return
  }
  val = val - 10;
  let {simulation} = this;

  simulation.force('charge', charge(function() {
    return d => {
      let out = ~~d.r > 30
        ? ~~ d.r * val / 20
        : ~~ -val * 10
      return out
    }
  }))
  simulation.restart();
}

export function gravityForce(val, e) {
  if (e.type !== 'mouseup') {
    return
  }
  val = val - 10;
  let {simulation} = this;

  simulation.force('x', fX(width / 2, val / 100))
  simulation.force('y', fY(width / 2, val / 100))
  simulation.restart();
}
