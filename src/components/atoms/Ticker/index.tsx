import React from "react";

import Tick from './Tick';

import { measureHeight } from './tickerHelper';

const numberRange = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

import './ticker.css';

const Ticker = (props: Props) => {
  const {
    children,
    text,
    textClassName,
    currentClassName,
    hiddenClassName
  } = props;
  const height = measureHeight(textClassName, "0");

  if (typeof document === 'undefined') {
    return <span className={textClassName}>{text}</span>
  }

  return (
    <span style={{ height: height }}>
      {(children || text).split("").map((v, i) => {
        if (isNaN(parseFloat(v)))
          return (
            <span
              key={i}
              className={`ticker42Tick ${textClassName}`}
            >
              {v}
            </span>
          );
        return (
          <Tick
            range={numberRange}
            className={textClassName}
            currentClassName={currentClassName}
            hiddenClassName={hiddenClassName}
            key={i}
            value={v}
            height={height}
          />
        );
      })}
    </span>
  );
}

const defaultProps: DefaultProps = {
  currentClassName: 'currentTicker',
  hiddenClassName: 'hiddenTicker',
  children: '',
  text: '',
  textClassName: ''
}

type DefaultProps = {
  children: string;
  text: string;
  currentClassName: string;
  hiddenClassName: string;
  textClassName: string;
}

Ticker.defaultProps = defaultProps;

export type Props = DefaultProps;

export default Ticker;
