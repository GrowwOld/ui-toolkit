import React from 'react';
import { CheckBox, CHECKBOX_DIRECTION } from '../../atoms/CheckBox';
import './checkBoxGroup.css';
declare type DefaultProps = {
    containerClassName: string;
};
declare type RequiredProps = {
    checkBoxes: CheckBox[];
    checkedList: string[];
    onCheck: (value?: string, isChecked?: boolean) => void;
};
declare type CheckBox = {
    size?: number;
    label?: React.ReactNode;
    value?: string;
    disabled?: boolean;
    activeColor?: string;
    inActiveColor?: string;
    addParentClass?: string;
    labelComponent?: () => React.ReactNode;
    checkBoxDirection?: ValueOf<typeof CHECKBOX_DIRECTION>;
};
export declare type Props = DefaultProps & RequiredProps;
declare const _default: React.MemoExoticComponent<{
    (props: Props): JSX.Element;
    defaultProps: DefaultProps;
}>;
export default _default;
export { CHECKBOX_DIRECTION };
