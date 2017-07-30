import React from "react";
import Slider from "material-ui/Slider";
import Toggle from "material-ui/Toggle";
import SubHeader from "material-ui/Subheader";

let toggleStyle = {
  display: "inline-block",
  paddingBottom: 10
};
let labelStyle = {
  color: "rgb(212, 229, 231)",
  fontWeight: 200
};

let innerSliderStyle = {
  marginTop: 0,
  marginBottom: 10
};

export default function(props) {
  let { update, min, max, label, value } = props;
  let sliderStyle = {
    marginBottom: 10,
    width: 200
  };
  let onToggle =
    props.onToggle ||
    function(e, f) {
      update({ on: f });
    };
  let onSlide =
    props.onSlide ||
    function(e, f) {
      update({ strength: f });
    };

  return (
    <div className="slider-holder">
      {/* <div className='slider-label'>
        <Toggle labelStyle={labelStyle} onToggle={onToggle} label={label} defaultToggled={true}/>
      </div> */}
      <div className="slider-value">
        {label} - {value}
      </div>
      <Slider
        defaultValue={value}
        min={min}
        max={max}
        onChange={onSlide}
        sliderStyle={innerSliderStyle}
        style={sliderStyle}
        axis={props.axis || "x"}
      />
    </div>
  );
}
