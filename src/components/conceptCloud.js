import React from 'react';
import { getHsvGolden as getColor, toRgbString } from 'golden-colors'
import d3Gravity from 'd3-force-gravity'

window.getColor = getColor
let height = 1200;
let width = 1200;
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

var nod = nodes(50)
window.nod = nod
export class ForceLayout extends React.Component {
  constructor(props) {
    super(props);
    this.sim;
    window.f = this
  }
  componentDidMount() {
    this.sim = doForce(this);

  }
  trigger = () => {
    let size = ~~this.refs.sizer.value || null
    restart(this.sim).nodes(this.sim.nodes().concat(nodes(1, size)))
    let cs = d3
      .select('svg')
      .selectAll('circle');
    f
      .sim
      .drag()(addCircles(cs, this.sim.nodes()))

  }
  render() {
    return (
      <div id="holder">
                <div className="buttons">
                    <div onClick={this.trigger} className="button">trigger</div>
                    <input ref="sizer" maxLength={5} size={5} className=" input"></input>

                    <div className="button" onClick={() => this.sim.restart()}>restart</div>

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
  return addCircles(svg.selectAll('circle'), nod)
  // .attr('r', d => d.r)
  // .attr('cy', d => d.y)
  // .attr('cx', d => d.x)
  // .style('fill', d => getColor(.5, .6).toRgbString())

}

function addCircles(selection, data) {
  return selection
    .data(data)
    .enter()
    .append('circle')
    .attr('r', d => d.r)
    .attr('cy', d => d.y)
    .attr('cx', d => d.x)
    .style('fill', d => getColor(.5, .6).toRgbString())

}

function doForce(comp) {
  let sim = d3.forceSimulation(nod);

  let circs = translateNodes(nod);
  circs.call(drag(sim))
  sim.drag = () => drag(sim);

  sim.velocityDecay(.1)
    .force("center", d3.forceCenter(height / 2, width / 2))
    .force("charge", d3.forceManyBody().strength(d => {
      console.log(d)
      let out = ~~d.r > 40 ? ~~d.r * 10 : ~~-500
      console.log(out)
      return out
    }))
    .force("collide", d3.forceCollide(function(d) {
      return d.r + 5
    }).iterations(40))
    .force('center', d3.forceCenter(width / 2, height / 2))
    .force("y", d3.forceY(height / 2).strength(.1))
    .force("x", d3.forceX(width / 2).strength(.1))
    // .force('gravity', d3Gravity(width / 2, height).strength(1000).minRadius(5))

  sim.on('end', (d) => console.log("ended", d));

  // let ticked = ticker(circs, comp);
  sim.on('tick', ticker)
  return sim;
}

function addNode() {
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
  // sim.stop();
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
      // console.log(d.index)
      // if (d.index === 11) {
      //   console.log(d.vx)
      // }
      // if (d.x > width) {
      // d.vx = -d.vx * 2
      // return width
      // }
      return d.x
    })

}

function nodes(count, specSize) {

  return d3
    .range(0, count)
    .map(e => {
      let r = specSize || ~~d3.randomUniform(20, 30)()
      return {
        r,
        x: ~~d3.randomUniform(100, width - r)(),
        y: ~~d3.randomUniform(100, height - r)()

      }
    })
}
