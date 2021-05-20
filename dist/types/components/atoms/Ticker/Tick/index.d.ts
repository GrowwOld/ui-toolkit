/// <reference types="react" />
declare const Tick: (props: Props) => JSX.Element;
declare type Props = {
    currentClassName: string;
    hiddenClassName: string;
    className: string;
    range: string[];
    height: number;
    value: string;
};
export default Tick;
