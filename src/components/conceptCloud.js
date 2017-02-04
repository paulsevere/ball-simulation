import React from 'react';
import SliderDeck, {Button} from './controls/SliderDeck'
import Slider from './controls/Slider'
import forceSetup from './force_setup/index'
import * as forces from './force_setup/forces/forces';
import ContentAddBox from 'material-ui/svg-icons/content/add-box';
import * as c from 'material-ui/styles/colors';

export class ForceLayout extends React.Component {
  constructor(props) {
    super(props);
    this.simulation = {};
    this.state = {
      startCount: 100,
      startSize: parseInt(window.localStorage.getItem('startSize')) || 30,
      center: {
        on: true,
        strength: 1
      },
      charge: {
        on: true,
        strength: 10
      }
    }
    forceSetup(this);
    window.d = this;
  }
  componentDidMount() {
    this.simulation = this.doForce(this.state.startCount, this.state.startSize);
  }
  componentWillUpdate() {
    this.restart();
  }

  // componentDidMount() {
  //   this.simulation = this.doForce(this.state.startCount, this.state.startSize);
  // }

  updateForce = (force) => (newState) => {
    let obj = {};
    obj[force] = Object.assign({}, this.state[force], newState);

    this.setState(obj);
    this
      .simulation
      .force(force, forces[force](this.state[force].strength))
  }

  updateSize = (e, startSize) => {
    this.setState({startSize});
    window
      .localStorage
      .setItem('startSize', startSize);
  }

  render() {
    let {center, startSize, charge} = this.state
    return (
      <div id="holder">
        <SliderDeck>
          <Slider onSlide={this.updateSize} value={startSize} min={10} max={200} label="size"/>
          <Slider value={center.strength} min={-50} max={50} defaultValue={1} update={this.updateForce('center')} label="center"/>
          <Slider min={-50} max={50} value={charge.strength} defaultValue={0} update={this.updateForce('charge')} label="charge"/>
        </SliderDeck>
      </div>
    );
  }
}
