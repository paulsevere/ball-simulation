import React from 'react';
import { ForceSlider, ForceControl } from './slider';
import { charge, center, fX, fY, collide } from '../forces/forces'

let height = 2000;
let width = 2000;

export default function(props) {
  // console.log(props);
  // let simulation = props.getSimulation();
  // simulation = simulation
  // let gravity = (val) => {
  //   console.log(simulation)
  //   simulation.force('x', fX(width / 2, val / 100))
  //   simulation.force('y', fY(width / 2, val / 100))
  //   simulation.restart();
  // }


  return (<div className="force-controller-ui">
    {props.children}

  </div>)
}
