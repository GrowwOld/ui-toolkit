import React from 'react';

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
    <span className={`ticker42Tick ${className}`}>
      <span
        className={`ticker42hiddenPiece ${className}`}
      >
        {value}
      </span>
      <span
        className="ticker42Rotator"
        style={{ transform: `translateY(${height * index * -1}px)` }} >
        {range.map((v, i) => {
          return (
            <span
              key={v + i}
              className={`ticker42Piece ${[className, v === value ? currentClassName : hiddenClassName].join(' ')}`}
              style={{ top: i * height }}
            >
              {v}
            </span>
          );
        })}
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
