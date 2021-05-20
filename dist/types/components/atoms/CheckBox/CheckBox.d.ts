import React from 'react';
import './checkBox.css';
export declare const CHECKBOX_DIRECTION: {
    LEFT: string;
    RIGHT: string;
};
declare const CheckBox: {
    (props: Props): JSX.Element;
    defaultProps: DefaultProps;
};
declare type DefaultProps = {
    size: number;
    label: React.ReactNode;
    value: string;
    isChecked: boolean;
    disabled: boolean;
    activeColor: string;
    inActiveColor: string;
    addParentClass: string;
    labelComponent: () => React.ReactNode;
    checkBoxDirection: ValueOf<typeof CHECKBOX_DIRECTION>;
};
declare type RequiredProps = {
    handleOnClick: (value: string, isChecked: boolean) => void;
};
export declare type Props = DefaultProps & RequiredProps;
export default CheckBox;
