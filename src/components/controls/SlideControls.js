import React from "react";
import Slider from "./ForceSlider";
import FlatButton from "material-ui/FlatButton";

export function Button(props) {
  return <FlatButton label={props.label} />;
}

export default function SliderDeck(props) {
  return (
    <div className="slider-deck">
      {props.children}
    </div>
  );
}
