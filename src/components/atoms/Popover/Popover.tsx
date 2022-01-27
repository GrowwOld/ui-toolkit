import React, { useState } from 'react';

import './popover.css';

export const POPOVER_POSITIONS = {
  TOP: 'top',
  TOP_START: 'top-start',
  TOP_END: 'top-end',
  BOTTOM: 'bottom',
  BOTTOM_START: 'bottom-start',
  BOTTOM_END: 'bottom-end',
  LEFT: 'left',
  LEFT_START: 'left-start',
  LEFT_END: 'left-end',
  RIGHT: 'right',
  RIGHT_START: 'right-start',
  RIGHT_END: 'right-end'
};


const Popover = (props: Props) => {
  const [ isPopoverVisible, setPopoverVisible ] = useState(false);
  const { direction, content, children, popoverWrapperClass } = props;


  const showTip = () => {
    setPopoverVisible(true);
  };


  const hideTip = () => {
    setPopoverVisible(false);
  };

  return (
    <div
      className="pop12Wrapper"
      onClick={showTip}
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
      onTouchStart={hideTip}
    >
      {children}
      {
        isPopoverVisible && (
          <div className={`pop12Popover ${popoverWrapperClass} ${direction || POPOVER_POSITIONS.TOP}`}>
            {content}
          </div>
        )
      }
    </div>
  );
};


Popover.defaultProps = {
  direction: POPOVER_POSITIONS.TOP,
  popoverWrapperClass: ''
} as DefaultProps;


type RequiredProps = {
  content: React.ReactNode;
  children: React.ReactNode;
}


type DefaultProps = {
  popoverWrapperClass: string;
  direction: ValueOf<typeof POPOVER_POSITIONS>;
}

export type Props = RequiredProps & DefaultProps;

export default Popover;
