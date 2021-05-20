/// <reference types="react" />
import './slider.css';
declare type NumbersType = number[] | number;
declare const Slider: {
    (props: Props): JSX.Element;
    defaultProps: DefaultProps;
};
declare type SliderProps = {
    onSliderChange?: (value: NumbersType) => void;
    marks: NumbersType;
    value: NumbersType;
};
declare type DefaultProps = {
    sliderWrapperClass: string;
    thumbClassName: string;
    trackClassName: string;
    markClassName: string;
    min: number;
    max: number;
    step: number;
    defaultValue: NumbersType;
};
declare type Props = SliderProps & DefaultProps;
export default Slider;
