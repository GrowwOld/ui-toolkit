import React from "react";
import './popover.css';
export declare const POPOVER_POSITIONS: {
    TOP: string;
    TOP_START: string;
    TOP_END: string;
    BOTTOM: string;
    BOTTOM_START: string;
    BOTTOM_END: string;
    LEFT: string;
    LEFT_START: string;
    LEFT_END: string;
    RIGHT: string;
    RIGHT_START: string;
    RIGHT_END: string;
};
declare const Popover: {
    (props: Props): JSX.Element;
    defaultProps: DefaultProps;
};
declare type RequiredProps = {
    content: React.ReactNode;
    children: React.ReactNode;
};
declare type DefaultProps = {
    popoverWrapperClass: string;
    direction: ValueOf<typeof POPOVER_POSITIONS>;
};
export declare type Props = RequiredProps & DefaultProps;
export default Popover;
