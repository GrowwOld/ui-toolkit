import React from 'react';
import cn from 'classnames';

import { IconStore } from '../IconStore';

import './chip.css';

enum IconPosition {
  LEFT = 'left',
  RIGHT = 'right',
}


const Chip = (props: Props) => {

  const handleClick = (e: React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    const { onClick } = props;

    onClick(e);
  };

  const { text, iconName, iconClass, iconPosition,
    textClass, parentClass, getImage } = props;

  return (
    <div
      className={
        cn({
          'chip12Chip': true,
          'chip12Tag': (iconName),
          'chip12IconLeft': (iconPosition === IconPosition.LEFT),
          [`${parentClass}`]: true
        })
      }
      onClick={handleClick}
    >
      <span className={textClass}>{text}</span>
      {
        iconName
          ? <div>
            <IconStore
              getImage={getImage}
              iconName={iconName}
              width={14}
              height={14}
              fontSize={14}
              iconClass={`chip12Icon ${iconClass}`}
            />
          </div>
          : null
      }
    </div >
  );
};


type RequiredProps = {
  text: string;
}


type DefaultProps = {
  /**
   * Event handler called when the user clicks on the chip
   */
  onClick: (e: React.MouseEvent<HTMLImageElement>) => void;
  /**
   * Position of icon with respect to Chip text, if iconName is provided.
   */
  iconPosition: IconPosition;
  /**
   * Custom iconClass for icon, if iconName is provided.
   */
  iconClass: string;
  /**
   * This class will be applied on both, text and icon
   */
  parentClass: string;
  /**
   * If getImage is true, iconName should be one from IMG_ICON_LIST
   */
  getImage: boolean;
  /**
   * Custom class for text decoration
   */
  textClass: string;
  /**
   * Custom icon, value must be either from MI-ICON-LIST or IMG-ICON-LIST
   */
  iconName: string;
}

export type Props = RequiredProps & DefaultProps;

Chip.defaultProps = {
  onClick: () => { },
  iconPosition: IconPosition.RIGHT,
  iconClass: '',
  textClass: '',
  iconName: '',
  parentClass: '',
  getImage: false
};

export default React.memo(Chip);
