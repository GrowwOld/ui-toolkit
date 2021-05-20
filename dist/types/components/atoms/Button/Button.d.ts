import React from 'react';
import './button.css';
declare class Button extends React.PureComponent<Props> {
    render(): JSX.Element;
    getIconUI: () => JSX.Element;
    onButtonClick: (e: React.MouseEvent) => void;
    getComputedStyle: () => {
        buttonText: string;
        onClick: (e: React.MouseEvent<Element, MouseEvent>) => void;
        buttonType: "Primary" | "Secondary" | "Tertiary";
        fixToBottom: boolean;
        isDisabled: boolean;
        iconName: string;
        iconPosition: "Left" | "Right";
        showLoader: boolean;
        loadingText: string;
        children?: React.ReactNode;
        width: string | number;
        height: string | number;
        fontSize: string | number;
        backgroundColor: string;
        color: string;
    };
    getComputedStyleForIcon: () => {
        fontSize: string | number;
        color: string;
    };
    static defaultProps: DefaultProps;
}
declare type RequiredProps = {
    /**
    * Button contents
    */
    buttonText: string;
    /**
    * Optional click handler
    */
    onClick: (e: React.MouseEvent) => void;
};
declare type DefaultProps = {
    width: string | number;
    height: string | number;
    buttonType: 'Primary' | 'Secondary' | 'Tertiary';
    fixToBottom: boolean;
    isDisabled: boolean;
    iconName: string;
    iconPosition: 'Left' | 'Right';
    showLoader: boolean;
    loadingText: string;
    fontSize: string | number;
    textColor: string;
    /**
    * What background color to use
    */
    backgroundColor: string;
};
export declare type Props = RequiredProps & DefaultProps;
export default Button;
