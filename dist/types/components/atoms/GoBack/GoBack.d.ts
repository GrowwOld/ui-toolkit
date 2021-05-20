import React from 'react';
import './goBack.css';
declare const GoBack: {
    (props: Props): JSX.Element;
    defaultProps: DefaultProps;
};
declare type DefaultProps = {
    text: React.ReactNode;
    iconWidth: number;
    iconHeight: number;
    iconClass: string;
    handleOnClick: (e?: React.MouseEvent) => void;
};
export declare type Props = DefaultProps;
export default GoBack;
