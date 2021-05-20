import React from 'react';
import './rodal.css';
declare class Rodal extends React.Component<Props, State> {
    el: HTMLDivElement | null;
    static defaultProps: DefaultProps;
    state: {
        isShow: boolean;
        animationType: string;
    };
    componentDidMount(): void;
    componentDidUpdate(prevProps: Props): void;
    enter(): void;
    leave(): void;
    onKeyUp: (event: React.KeyboardEvent) => void;
    animationEnd: (event: React.BaseSyntheticEvent) => void;
    render(): JSX.Element;
}
declare type State = {
    isShow: boolean;
    animationType: string;
};
declare type DefaultProps = {
    width: number;
    height: number;
    measure: string;
    visible: boolean;
    showMask: boolean;
    closeOnEsc: boolean;
    closeMaskOnClick: boolean;
    showCloseButton: boolean;
    animation: string;
    enterAnimation: string;
    leaveAnimation: string;
    onAnimationEnd: () => void;
    duration: number;
    className: string;
    customStyles: React.CSSProperties;
    customMaskStyles: React.CSSProperties;
};
declare type RequiredProps = {
    onClose: (e: React.MouseEvent | React.KeyboardEvent) => void;
    popupClass: string;
};
declare type Props = DefaultProps & RequiredProps;
export default Rodal;
