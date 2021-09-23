import React from 'react';
import cn from 'classnames';

import {
  ReactIconComponentType,
  ReactIconProps
} from '@groww-tech/icon-store/types';

import {
  Loader,
  LOADER_TYPE
} from '../Loader';

import './button.css';
class Button extends React.PureComponent<Props> {

  render() {
    const {
      buttonText,
      buttonType,
      fixToBottom,
      isDisabled,
      iconPosition,
      showLoader,
      loadingText
    } = this.props;

    const classname = cn({
      'btn51Btn': true,
      'btn51RipplePrimary btn51Primary': buttonType === 'Primary',
      'btn51RippleSecondary btn51Secondary': buttonType === 'Secondary',
      'btn51RippleTertiary btn51Tertiary': buttonType === 'Tertiary',
      'btn51Loading': showLoader,
      'btn51DisabledPrimary': isDisabled && buttonType === 'Primary',
      'btn51DisabledSecondary': isDisabled && buttonType === 'Secondary',
      'btn51DisabledTertiary': isDisabled && buttonType === 'Tertiary'
    });

    return (
      <div className={fixToBottom ? 'btn51BottomFixed' : ''}>
        <div
          className={classname}
          onClick={this.onButtonClick}
          style={this.getComputedStyle()}
        >
          {
            showLoader && !isDisabled ? <Loader loaderType={LOADER_TYPE.LINEAR} /> : null
          }

          <div className="absolute-center btn51ParentDimension">
            <span className="absolute-center"
              style={{ padding: '0px 25px' }}
            >
              {iconPosition === 'Left' && this.getIconUI()}

              <span>{showLoader && !isDisabled ? loadingText : buttonText}</span>

              {iconPosition === 'Right' && this.getIconUI()}
            </span>
          </div>
        </div>
      </div>
    );
  }


  getIconUI = () => {
    const { iconComponent, iconPosition } = this.props;

    const buttonIconProps = {
      className: `btn51Icon${iconPosition}`,
      fill: 'currentColor'
    };

    return iconComponent?.(buttonIconProps) || null;
  }


  onButtonClick = (e: React.MouseEvent) => {
    const { onClick, showLoader, isDisabled } = this.props;

    if (!isDisabled && !showLoader) {
      onClick(e);
    }
  }


  getComputedStyle = () => {
    const {
      width,
      height,
      fontSize,
      textColor,
      backgroundColor,
      ...restProps
    } = this.props;

    return {
      width,
      height,
      fontSize,
      backgroundColor,
      color: textColor,
      ...restProps
    };
  }


  public static defaultProps: DefaultProps = {
    /**
    * How large should the button be?
    */
    width: 'auto',
    height: '45px',
    /**
    * Is this the principal call to action on the page?
    */
    buttonType: 'Primary',
    fixToBottom: false,
    isDisabled: false,
    iconComponent: null,
    iconPosition: 'Left',
    showLoader: false,
    loadingText: 'Loading...',
    fontSize: '',
    textColor: '',
    backgroundColor: ''
  }
}


type RequiredProps = {
  /**
  * Button contents
  */
  buttonText: string;
  /**
  * Optional click handler
  */
  onClick: (e: React.MouseEvent) => void;
}


type DefaultProps = {
  width: string | number;
  height: string | number;
  buttonType: 'Primary' | 'Secondary' | 'Tertiary';
  fixToBottom: boolean;
  isDisabled: boolean;
  iconComponent: ((props: ReactIconProps) => ReactIconComponentType) | null;
  iconPosition: 'Left' | 'Right';
  showLoader: boolean;
  loadingText: string;
  fontSize: string | number;
  textColor: string;
  /**
  * What background color to use
  */
  backgroundColor: string;
}


export type Props = RequiredProps & DefaultProps;

export default Button;
