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
  }

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
        })}
      onClick={handleClick}
    >
      <span className={textClass}>{text}</span>
      {
        iconName ?
          <div>
            <IconStore
              getImage={getImage}
              iconName={iconName}
              width={14}
              height={14}
              iconClass={`chip12Icon ${iconClass}`}
            />
          </div>
          :
          null
      }
    </div >
  )
}

type RequiredProps = {
  text: string,
}

type DefaultProps = {
  onClick: (e: React.MouseEvent<HTMLImageElement>) => void,
  iconPosition: IconPosition,
  iconClass: string,
  parentClass: string,
  getImage: boolean,
  textClass: string,
  iconName: string,
}

type Props = RequiredProps & DefaultProps;

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
