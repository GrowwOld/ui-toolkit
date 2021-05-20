import React from 'react';
import './radioButton.css';
export declare const RADIO_DIRECTION: {
    LEFT: string;
    RIGHT: string;
};
declare type DefaultProps = {
    labelClassName: string;
    parentClassName: string;
    radioDirection: ValueOf<typeof RADIO_DIRECTION>;
    iconClassName: string;
};
declare type RequiredProps = {
    value?: React.ReactNode;
    label: React.ReactNode;
    selected: boolean;
    onSelect: () => void;
};
export declare type Props = RequiredProps & DefaultProps;
declare const _default: React.MemoExoticComponent<{
    (props: Props): JSX.Element;
    defaultProps: DefaultProps;
}>;
export default _default;
