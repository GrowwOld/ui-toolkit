import React from 'react';
import './radioButtonGroup.css';
declare type DefaultProps = {
    containerClassName: string;
};
declare type RequiredProps = {
    radioButtons: RadioButtonType[];
    selected: string | number;
    onSelect: (value?: string | number) => void;
};
export declare type RadioButtonType = {
    value?: string;
    label?: string;
    labelClassName?: string;
    parentClassName?: string;
    radioDirection?: string;
};
export declare type Props = DefaultProps & RequiredProps;
declare const _default: React.MemoExoticComponent<{
    (props: Props): JSX.Element;
    defaultProps: DefaultProps;
}>;
export default _default;
