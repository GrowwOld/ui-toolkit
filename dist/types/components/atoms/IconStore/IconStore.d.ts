import React from 'react';
import { IMG_ICON_LIST, MI_ICON_LIST } from './iconList';
import './iconStore.css';
declare class IconStore extends React.PureComponent<Props, State> {
    static defaultProps: DefaultProps;
    state: {
        darkThemeEnabled: boolean;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    getRequiredIconUI: () => JSX.Element;
    themeChangeCallback: (e: React.SyntheticEvent) => void;
    importRequiredImage: (iconName: string) => string;
    getLightThemeImage: (iconName: string) => string;
    getDarkThemeImage: (iconName: string) => string;
    getFinalClassname: () => string;
    onIconClick: (e: React.MouseEvent) => void;
}
declare type RequiredProps = {
    iconName: string;
};
declare type DefaultProps = {
    /**
     * whether you want svg or material icon
     */
    getImage: boolean;
    width: number;
    height: number;
    /**
     * specify alt for image icon
     */
    imgAlt: string;
    iconStyle: object;
    iconClass: string;
    /**
     * If nothing is passed and only iconClass passed then it will be used
     */
    iconDarkClass: string;
    /**
     * Icon click callback method
     */
    onIconClick: (e: React.MouseEvent) => void;
    useLazyLoad: boolean;
};
export declare type Props = DefaultProps & RequiredProps;
declare type State = {
    darkThemeEnabled: boolean;
};
export default IconStore;
export { IMG_ICON_LIST, MI_ICON_LIST };
