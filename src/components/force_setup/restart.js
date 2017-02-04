export function restart(sim) {
  let simulation;
  if (sim) {
    simulation = sim
  } else {
    simulation = this.simulation;
  }
  console.log(simulation);
  simulation.alpha(.8);
  simulation.restart();
  // return sim
}
