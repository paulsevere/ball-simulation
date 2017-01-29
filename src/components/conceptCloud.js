import React from 'react';
import { getHsvGolden as getColor, toRgbString } from 'golden-colors'
import forceGravity from 'd3-force-gravity'
import { charge, center, fX, fY, collide } from './forces/forces'
import { ForceSlider, ForceControl } from './controls/slider'
import ForceControls from './controls/sliderDeck'
require('rc-slider/assets/index.css');

// import { Button } from 'react-toolbox'

let height = 2000;
let width = 2000;
let circleStyle = {
  fill: "rgb(64, 95, 128)",
  cy: 100,
  cx: 100,
  r: 50
}

const d = function(sel) {
  return d3.selectAll(sel)
}
window.d = d

var nod = window.nod = nod
export class ForceLayout extends React.Component {
  constructor(props) {
    super(props);
    this.simulation = {};
    window.fl = this
  }
  componentDidMount() {
    this.simulation = doForce(this);
  }




  trigger = () => {
    let {simulation} = this;
    let {nodes} = simulation;
    let size = ~~this.refs.sizer.value || null;
    restart(simulation).nodes(simulation.nodes().concat(genNodes(1, size)))
    let cs = d3
      .select('svg')
      .selectAll('circle');
    simulation
      .drag()(addCircles(cs, simulation.nodes()))
  }

  chargeForce = (val, e) => {
    if (e.type !== 'mouseup') {
      return
    }
    val = val - 10;
    let {simulation} = this;

    simulation.force('charge', charge(function() {
      return d => {
        let out = ~~d.r > 30 ? ~~d.r * val / 20 : ~~-val * 10
        return out
      }
    }
    ))
    simulation.restart();
  }

  gravityForce = (val, e) => {
    if (e.type !== 'mouseup') {
      return
    }
    val = val - 10;
    let {simulation} = this;

    simulation.force('x', fX(width / 2, val / 100))
    simulation.force('y', fY(width / 2, val / 100))
    simulation.restart();
  }



  render() {
    return (
      <div id="holder">
                <div className="buttons">
                  <div className="button" onClick={this.trigger}>add one</div>
                  <input ref="sizer"></input>
                  <ForceControl min={0} value={20} max={50}  onChange={this.gravityForce}/>
                    <ForceControl min={0} value={50} max={100}  onChange={this.chargeForce}/>

                  <ForceControls>
                  </ForceControls>

                </div>
            </div>
      );
  }
}

function translateNodes(nodes) {
  let svg = d3
    .select('#holder')
    .append('svg').attr('viewBox', `0 0 ${height} ${width}`)
  window.svg = svg;
  return addCircles(svg.selectAll('circle'), nodes)
}

function addCircles(selection, nodes) {
  return selection
    .data(nodes)
    .enter()
    .append('circle')
    .attr('r', d => d.r)
    .attr('cy', d => d.y)
    .attr('cx', d => d.x)
    .style('fill', d => getColor(.5, .6).toRgbString())

}

function doForce(conf) {

  let nodes = genNodes(5)
  let sim = d3.forceSimulation(nodes);
  let circs = translateNodes(nodes);
  circs.call(drag(sim))
  sim.drag = () => drag(sim);


  sim.velocityDecay(.01)
  sim.alphaDecay(.01)
  sim
    .force("center", center(null, width / 2, height / 2))
    .force("charge", charge())
    .force("collide", collide())

    // .force('gravity', forceGravity(width / 2, height / 5 * 4).minRadius(50))
    .force("y", fY(height / 2, .1))
    .force("x", fX(width / 2, .1))

  sim.on('tick', ticker)
  window.sim = sim;
  return sim;
}


function restart(sim) {
  sim.alpha(.8);
  sim.restart();
  return sim
}
function drag(sim) {
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

function ticker() {
  if (d.x > width || d.y > height) {
    return
  }
  d3
    .selectAll('circle')
    .attr('cy', d => {
      if (d.y > height) {
        d.y = height;

        return height
      }
      return d.y
    })
    .attr('cx', d => {

      return d.x
    })

}

function genNodes(count, specSize) {
  return d3
    .range(0, count)
    .map(e => {
      let r = specSize || ~~d3.randomUniform(80, 120)()
      return {
        r,
        x: ~~d3.randomUniform(100, width - r)(),
        y: ~~d3.randomUniform(100, height - r)()

      }
    })
}
