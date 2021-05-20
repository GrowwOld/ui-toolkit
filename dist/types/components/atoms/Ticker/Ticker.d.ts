/// <reference types="react" />
declare const Ticker: {
    (props: Props): JSX.Element;
    defaultProps: DefaultProps;
};
declare type DefaultProps = {
    children: string;
    text: string;
    currentClassName: string;
    hiddenClassName: string;
    textClassName: string;
};
export declare type Props = DefaultProps;
export default Ticker;
