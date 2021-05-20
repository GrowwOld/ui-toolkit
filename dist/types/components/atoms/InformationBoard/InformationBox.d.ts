import React from 'react';
import './informationBox.css';
declare type RequiredProps = {
    content: string;
};
declare type DefaultProps = {
    icon: string;
    showIcon: boolean;
    iconClass: string;
    outlined: boolean;
    width: number | 'auto';
    height: number | 'auto';
    informationBoxClass: string;
    informationBoxStyle: React.CSSProperties;
    type: 'DEFAULT' | 'POSITIVE' | 'NEUTRAL' | 'ERROR' | 'WARNING';
};
export declare type Props = RequiredProps & DefaultProps;
declare const _default: React.MemoExoticComponent<{
    (props: Props): JSX.Element;
    defaultProps: DefaultProps;
}>;
export default _default;
