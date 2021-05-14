import React from 'react';
import Waypoint from 'react-waypoint';

import { getIntegerRandomNoBetweenTwoNo } from '../../../utils/helper';

import './progressBar.css';

class ProgressBar extends React.PureComponent<Props> {

  progressbarId = '';

  constructor(props: Props) {
    super(props);

    this.progressbarId = 'prgBar65Id' + props.name + getIntegerRandomNoBetweenTwoNo(1, 100);
  }

  render() {
    const { isCircular } = this.props;

    return (
      <Waypoint onEnter={this.animateProgressBar}>
        <div>
          {
            isCircular ? this.getCircularProgressBar() : this.getLinearProgressBar()
          }
        </div>

      </Waypoint>
    );
  }

  getLinearProgressBar = () => {
    const {
      color,
      backgroundColor,
      containerThickness,
      completedValue,
      size,
      fillerThickness,
      borderRadius
    } = this.props;

    const containerStyle = {
      width: size,
      height: containerThickness,
      backgroundColor: backgroundColor
    }

    const fillerStyle = {
      width: `${completedValue}%`,
      height: fillerThickness,
      backgroundColor: color,
      borderRadius: borderRadius

    }

    return (
      <div
        className="pb65LinearMain valign-wrapper fullWidth"
        style={containerStyle}
      >
        <div
          id={this.progressbarId}
          className="pb65LinearFiller"
          style={fillerStyle}
        >
        </div>
      </div>
    );
  }

  getCircularProgressBar = () => {
    const {
      color,
      backgroundColor,
      containerThickness,
      completedValue,
      size,
      fillerThickness,
      text,
      addTextClass
    } = this.props;

    const textClass = addTextClass ? addTextClass : '';

    const sqSize = Number(size);

    const radius = (sqSize - fillerThickness) / 2;

    const viewBox = `0 0 ${sqSize} ${sqSize}`;

    const dashArray = radius * Math.PI * 2;

    const dashOffset = dashArray - (dashArray * completedValue / 100);

    const fillerStyle = {
      strokeDasharray: dashArray,
      strokeDashoffset: dashOffset,
      strokeWidth: `${fillerThickness}px`,
      stroke: color
    }

    return (
      <svg
        width={sqSize}
        height={sqSize}
        viewBox={viewBox}
      >
        <circle
          className="pb65CircleMain"
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={radius}
          strokeWidth={`${containerThickness}px`}
          stroke={backgroundColor}
        />

        <circle
          id={this.progressbarId}
          className="pb65CicleFiller"
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={radius}
          transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
          style={fillerStyle}
        />

        {
          text &&
          <text
            x="50%"
            y="50%"
            className={`${textClass} pb65MainTxt`}
          >
            {text}
          </text>
        }
      </svg>

    );

  }

  animateProgressBar = () => {
    let elem = document.getElementById(this.progressbarId);

    if (elem) {
      elem.style.display = 'block';
    }
  }


  public static defaultProps: DefaultProps = {
    containerThickness: 1,
    color: 'var(--primaryClr)',
    backgroundColor: 'var(--border)',
    isCircular: false,
    borderRadius: 5
  }
}


type DefaultProps = {
  containerThickness?: number; //thickness of the container of the progress bar
  color?: string; //Color of the filled Progress
  backgroundColor?: string; //background Color of the progress bar
  isCircular?: boolean; //circular / Linear Progress Bar
  borderRadius?: string | number; // Adds border radius to outer filler in linear bar
}

type RequiredProps = {
  color: string; //Color of the filled Progress
  backgroundColor: string; //background Color of the progress bar
  fillerThickness: number; //thickness of the filler
  completedValue: number; // percentage of the filled amount
  name: string;
  progressbarId: string;
}

type Props = DefaultProps & RequiredProps & {
  text?: string, //Adds text to the centre of the circular Progress Bar only
  addTextClass?: string;
  size?: string | number; //width of the progress bar or square size of the circlular progress bar
  //text styling allowed - Note: The text is added using and <svg> <text> element and doesn't support the normal class styling
  //please use fill instead of color and equivalent styling for <text> element
}

export default ProgressBar;
