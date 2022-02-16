import React from 'react';
import cn from 'classnames';
import { ReactIconProps } from '@groww-tech/icon-store';

import './chip.css';

export enum IconPosition {
  LEFT = 'left',
  RIGHT = 'right',
}


const Chip = (props: Props) => {
  const {
    text, textClass, parentClass,
    iconComponent, iconPosition
  } = props;


  const handleClick = (e: React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    const { onClick } = props;

    onClick(e);
  };

  const chipIconProps = {
    className: 'chip12Icon',
    size: 14
  };

  return (
    <div
      className={
        cn({
          'chip12Chip': true,
          'chip12Tag': iconComponent,
          'chip12IconLeft': (iconPosition === IconPosition.LEFT),
          [`${parentClass}`]: true
        })
      }
      onClick={handleClick}
    >
      <span className={textClass}>{text}</span>

      {iconComponent?.(chipIconProps)}
    </div >
  );
};


type RequiredProps = {
  text: React.ReactNode;
}


type DefaultProps = {
  /**
   * Event handler called when the user clicks on the chip
   */
  onClick: (e: React.MouseEvent<HTMLImageElement>) => void;
  /**
   * Position of icon with respect to Chip text, if IconComponent is provided
   */
  iconPosition: IconPosition;
  /**
   * iconComponent function returns svg icon component, we pass some extra props from Chip component
   */
  iconComponent: ((props: ReactIconProps) => JSX.Element) | null;
  /**
   * This class will be applied on both, text and icon
   */
  parentClass: string;
  /**
   * Custom class for text decoration
   */
  textClass: string;
}

export type Props = RequiredProps & DefaultProps;

Chip.defaultProps = {
  onClick: () => { },
  iconPosition: IconPosition.RIGHT,
  iconComponent: null,
  textClass: '',
  parentClass: ''
};

export default React.memo(Chip);
