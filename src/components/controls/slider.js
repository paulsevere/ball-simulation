import React from 'react';
import Slider from 'material-ui/Slider';
import Toggle from 'material-ui/Toggle';
import SubHeader from 'material-ui/Subheader'

let toggleStyle = {
  display: "inline-block",
  paddingBottom: 10
}
let labelStyle = {
  color: 'rgb(212, 229, 231)',
  fontWeight: 200
}

let innerSliderStyle = {
  marginTop: 0
}

export default function(props) {
  let {update, min, max, label, value} = props;
  let sliderStyle = {
    height: props.height || 200,
    flex: "1 1 auto",
    display: "flex"
  }
  let onToggle = props.onToggle || function(e, f) {
    update({on: f});
  }
  let onSlide = props.onSlide || function(e, f) {
    update({strength: f})
  }

  return (
    <div className="slider-holder">
      <div className='slider-label'>
        <Toggle labelStyle={labelStyle} onToggle={onToggle} label={label} defaultToggled={true}/>
      </div>
      <Slider defaultValue={value} min={min} max={max} onChange={onSlide} sliderStyle={innerSliderStyle} style={sliderStyle} axis={props.axis || 'y'}/>
      <div className="slider-value">{value}</div>
    </div>
  );
}
