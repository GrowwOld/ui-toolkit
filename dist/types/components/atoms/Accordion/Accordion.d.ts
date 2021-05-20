import React from 'react';
import './accordion.css';
export declare type Props = RequiredProps & DefaultProps;
declare type RequiredProps = {
    children: React.ReactNode;
};
declare type DefaultProps = {
    title: React.ReactNode;
    /**Initial state of accordion that you want to keep i.e true(open) or false(closed)*/
    onMountOpen: boolean;
    /**If you want to show the right arrow icon or not*/
    showRightIcon: boolean;
    onToggleCallback: (isOpen: boolean) => void;
    parentClass: string;
    headerClass: string;
    iconClass: string;
    titleClass: string;
};
declare const _default: React.MemoExoticComponent<{
    (props: Props): JSX.Element;
    defaultProps: DefaultProps;
}>;
export default _default;
