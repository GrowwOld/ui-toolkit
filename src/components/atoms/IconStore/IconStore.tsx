import React from 'react';

import { IMG_ICON_LIST, MI_ICON_LIST } from './iconList';
import { Image } from '../Image';

import { Theme } from '../../../utils/types/theme';
import { listenToCustomEvent, unListenToCustomEvent } from '../../../utils/helper';

import './iconStore.css';

const IMG_PATH = "https://storage.googleapis.com/groww-assets/web-assets/img/payment/complete_credit.svg";

class IconStore extends React.PureComponent<Props, State> {
  static defaultProps: DefaultProps;

  state = {
    // initial theme
    darkThemeEnabled: false
  }

  componentDidMount() {
    // If theme changes
    listenToCustomEvent("themeChange", this.themeChangeCallback);
  }


  componentWillUnmount() {
    // remove theme event listener
    unListenToCustomEvent("themeChange", this.themeChangeCallback);
  }


  render() {
    return (
      this.getRequiredIconUI()
    );
  }

  getRequiredIconUI = () => {
    const { iconName, getImage, imgAlt, width, height, useLazyLoad } = this.props;
    const finalClassName = this.getFinalClassname();
    const wrapperDivClass = this.getWrapperDivClassname();

    if (getImage) {
      const img = this.importRequiredImage(iconName);
      return (
        <div className={wrapperDivClass}>
          <Image
            src={img}
            alt={imgAlt}
            width={width}
            height={height}
            addClass={finalClassName}
            onClick={this.onIconClick}
            useLazyLoad={useLazyLoad}
            handleBrokenImage={this.getLightThemeImage(iconName)}
          />

          {this.getBadgeUI()}
        </div>
      )

    } else {
      const MI_NAME = MI_ICON_LIST[iconName as keyof typeof MI_ICON_LIST];
      return (
        <div className={wrapperDivClass}>
          <i
            className={`material-icons ${finalClassName}`}
            onClick={this.onIconClick}
            style={{ width: width, height: height }}
          >
            {MI_NAME}
          </i>

          {this.getBadgeUI()}
        </div>
      )
    }
  }


  getWrapperDivClassname = () => {
    const { badgeValue } = this.props;
    let tempClass = "is31IconWrapper";

    if (badgeValue) {
      tempClass += " pos-rel hihi";
    }

    return tempClass;
  }


  getBadgeUI = () => {
    const { badgeValue, badgeClass } = this.props;

    if (badgeValue) {
      return (
        <div className={"absolute-center is31BadgeDefaultClass" + " " + badgeClass}>{badgeValue}</div>
      )

    } else {
      return null;
    }

  }


  themeChangeCallback = (e: React.SyntheticEvent) => {
    //@ts-expect-error
    const theme: Theme = e.target?.dataset?.theme || Theme.Light;
    if (theme === Theme.Dark) {
      this.setState({
        darkThemeEnabled: true
      })
    } else {
      this.setState({
        darkThemeEnabled: false
      })
    }
  }


  importRequiredImage = (iconName: string) => {
    const { darkThemeEnabled } = this.state;
    if (darkThemeEnabled)
      return this.getDarkThemeImage(iconName)
    else
      return this.getLightThemeImage(iconName);
  }


  getLightThemeImage = (iconName: string) => {
    // return require(IMG_PATH + iconName + ".svg");
    return (IMG_PATH);
  }


  getDarkThemeImage = (iconName: string) => {
    try {
      return (IMG_PATH);
      // return require(IMG_PATH + iconName + "_dark" + ".svg");
    } catch (e) {
      return this.getLightThemeImage(iconName)
    }
  }


  getFinalClassname = () => {
    const { darkThemeEnabled } = this.state;
    const { iconClass, iconDarkClass } = this.props;
    const defaultClass = "is31Default "; // dont remove this extra space at the end

    if (darkThemeEnabled && iconDarkClass) {
      return (defaultClass + iconDarkClass).trim();
    } else {
      return (defaultClass + iconClass).trim();
    }
  }


  onIconClick = (e: React.MouseEvent) => {
    const { onIconClick } = this.props;
    if (onIconClick) {
      onIconClick(e);
    }
  }
}


IconStore.defaultProps = {
  getImage: false,
  width: 24,
  height: 24,
  imgAlt: "Groww",
  iconClass: "",
  iconDarkClass: "",
  useLazyLoad: true,
  badgeValue: 0,
  badgeClass: "",
  iconStyle: {},
  onIconClick: () => { }
};

type RequiredProps = {
  iconName: string,
}

type DefaultProps = {
  /**
   * whether you want svg or material icon
   */
  getImage: boolean,
  width: number,
  height: number,
  /**
   * specify alt for image icon
   */
  imgAlt: string,
  iconStyle: object,
  iconClass: string,
  /**
   * If nothing is passed and only iconClass passed then it will be used
   */
  iconDarkClass: string,
  /**
   * Icon click callback method
   */
  onIconClick: (e: React.MouseEvent) => void,
  useLazyLoad: boolean,
  /**
   *  If you want to add a badge on the Icon then pass badge value
   */
  badgeValue: number,
  /**
   * Pass badge class for customized style
   */
  badgeClass: string
}

export type Props = DefaultProps & RequiredProps;

type State = {
  darkThemeEnabled: boolean
}

export default IconStore;
export { IMG_ICON_LIST, MI_ICON_LIST };
