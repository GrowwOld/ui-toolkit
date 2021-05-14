import React from 'react';

import {
  tickStyle,
  hiddenPieceStyle,
  pieceStyle,
  rotatorStyle
} from '../styles';

const Tick = (props: Props) => {
  const {
    value,
    height,
    range,
    className,
    currentClassName,
    hiddenClassName
  } = props;

  const index = range.indexOf(value);

  return (
    <span
      className={className}
      style={tickStyle}
    >
      <span
        className={className}
        style={hiddenPieceStyle}
      >
        {value}
      </span>
      <span
        style={{ ...rotatorStyle, transform: `translateY(${height * index * -1}px)` }} >
        {
          range.map((v, i) => {
            return (
              <span
                key={v + i}
                className={[className, v === value ? currentClassName : hiddenClassName].join(' ')}
                style={{ ...pieceStyle, top: i * height }}
              >
                {v}
              </span>
            );
          })
        }
      </span>
    </span>
  );
}

type Props = {
  currentClassName: string;
  hiddenClassName: string;
  className: string;
  range: string[];
  height: number;
  value: string;
}

export default Tick;
