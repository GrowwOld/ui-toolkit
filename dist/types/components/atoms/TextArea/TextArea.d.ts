import React from 'react';
import './textArea.css';
declare type RequiredProps = {
    label?: string;
};
declare type DefaultProps = {
    error: string;
    /** styling and classNames */
    labelStyle: React.CSSProperties;
    errorStyle: React.CSSProperties;
    textAreaStyle: React.CSSProperties;
    parentDivClass: string;
    /**  bools for utility*/
    disableCopyPaste: boolean;
};
export declare type Props = RequiredProps & DefaultProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>;
declare const _default: React.MemoExoticComponent<{
    (props: Props): JSX.Element;
    defaultProps: DefaultProps;
}>;
export default _default;
