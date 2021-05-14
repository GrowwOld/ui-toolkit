import React from 'react';
import ReactSlider from './ReactSlider';

import './slider.css';

const Slider = (props: Props) => {

  const {
    sliderWrapperClass,
    thumbClassName,
    trackClassName,
    min,
    max,
    step,
    onSliderChange,
    markClassName,
    marks,
    value,
    defaultValue
  } = props;

  return (
    <ReactSlider
      className={`slider24Wrapper ${sliderWrapperClass}`}
      thumbClassName={thumbClassName}
      trackClassName={trackClassName}
      markClassName={markClassName}
      defaultValue={defaultValue}
      marks={marks}
      min={min}
      max={max}
      step={step}
      onChange={onSliderChange}
      value={value}
      minDistance={step}
    />

  );
}

type SliderProps = {
  onSliderChange: Function,
  marks: number[] | number //  Shows passed marks on the track
  value: number[] | number // Like defaultValue but for controlled components.
}

type DefaultProps = {
  sliderWrapperClass: string, // The css class set on the slider node.
  thumbClassName: string,
  trackClassName: string,
  markClassName: string,
  min: number,
  max: number,
  step: number, // Value to be added or subtracted on each step the slider makes. Must be greater than zero. max - min should be evenly divisible by the step value.
  defaultValue: number[] | number // Determines the initial positions of the thumbs and the number of thumbs.
}

type Props = SliderProps & DefaultProps;

Slider.defaultProps = {
  sliderWrapperClass: '',
  thumbClassName: '',
  trackClassName: '',
  markClassName: '',
  min: 0,
  max: 100,
  step: 1,
  defaultValue: 0
} as DefaultProps;

export default Slider;
