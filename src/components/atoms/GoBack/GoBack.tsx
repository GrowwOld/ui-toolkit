import React from 'react';

import { IconStore, MI_ICON_LIST } from '../IconStore';

import './goBack.css';


const GoBack = (props: Props) => {

  const {
    text,
    handleOnClick,
    iconWidth,
    iconHeight,
    iconClass
  } = props;

  const iconStyleWrapper = {
    maxWidth: iconWidth,
    maxHeight: iconHeight
  };

  return (
    <div className="gb6Box">
      <div className="web-align">
        <div className="valign-wrapper cur-po gb6Fit"
          onClick={handleOnClick}
        >
          <div className="valign-wrapper"
            style={iconStyleWrapper}
          >
            <IconStore
              iconName={MI_ICON_LIST.keyboard_arrow_left}
              width={iconWidth}
              height={iconHeight}
              fontSize={20}
              iconClass={`gb6Icon ${iconClass}`}
            />
          </div>
          <div className="gb6Text">
            {text}
          </div>
        </div>
      </div>
    </div>
  );
};

const defaultProps: DefaultProps = {
  text: 'Go Back',
  iconWidth: 20,
  iconHeight: 20,
  iconClass: '',
  handleOnClick: () => { }
};


type DefaultProps = {
  text: React.ReactNode;
  iconWidth: number;
  iconHeight: number;
  iconClass: string;
  handleOnClick: (e?: React.MouseEvent) => void;
}

GoBack.defaultProps = defaultProps;

export type Props = DefaultProps;

export default GoBack;
