import React from 'react';
import './progressBar.css';
declare class ProgressBar extends React.PureComponent<Props> {
    progressbarId: string;
    constructor(props: Props);
    render(): JSX.Element;
    getLinearProgressBar: () => JSX.Element;
    getCircularProgressBar: () => JSX.Element;
    animateProgressBar: () => void;
    static defaultProps: DefaultProps;
}
declare type DefaultProps = {
    containerThickness: number;
    color: string;
    backgroundColor: string;
    isCircular: boolean;
    borderRadius: string | number;
    text: string;
    addTextClass: string;
    size: string | number;
};
declare type RequiredProps = {
    fillerThickness: number;
    completedValue: number;
    name: string;
};
export declare type Props = DefaultProps & RequiredProps;
export default ProgressBar;
