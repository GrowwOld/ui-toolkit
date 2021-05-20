import React from 'react';
import './toggleSwitch.css';
declare type RequiredProps = {
    isActive: boolean;
    onChange: (e?: React.MouseEvent<HTMLDivElement> | React.ChangeEvent<HTMLInputElement>) => void;
};
declare type DefaultProps = {
    width: number;
    height: number;
    switchCircleColor: string;
    activeBackgroundColor: string;
    leftText: React.ReactNode;
    rightText: React.ReactNode;
    inactiveBackgroundColor: string;
};
export declare type Props = RequiredProps & DefaultProps;
declare const _default: React.MemoExoticComponent<{
    (props: Props): JSX.Element;
    defaultProps: DefaultProps;
}>;
export default _default;
