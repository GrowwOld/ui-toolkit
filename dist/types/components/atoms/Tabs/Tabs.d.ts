import React from 'react';
import './tabs.css';
declare type DefaultProps = {
    showBottomBorder: boolean;
    activeTabIndexOnMount: number;
    customStyleTab: string;
};
declare type RequiredProps = {
    data: Tab[];
    onTabSelect: (index: number) => void;
};
declare type Tab = {
    description?: string;
    name: React.ReactNode;
    style?: React.CSSProperties;
    width: number;
    left: number;
};
export declare type Props = DefaultProps & RequiredProps;
declare const _default: React.MemoExoticComponent<{
    (props: Props): JSX.Element;
    defaultProps: DefaultProps;
}>;
export default _default;
