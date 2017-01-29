import React from 'react'
import Sllider from 'rc-slider'
import Slider from 'react-md/lib/Sliders';

export const ForceSlider = (props) => {
  return (<Sllider className="force-slider" min={-10} defaultValue={0} max={10} {...props}></Sllider>)
}

export const ForceControl = (props) => {
  return (<Slider
    {...props}
    />)
}
