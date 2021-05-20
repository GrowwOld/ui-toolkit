import { PureComponent } from "react";
import "./dateSelector.css";
declare const INVOKE_MODE: {
    readonly POPUP: "POPUP";
    readonly TOOLTIP: "TOOLTIP";
};
declare class DateSelector extends PureComponent<Props, State> {
    state: State;
    render(): JSX.Element | undefined;
    getMainUi: () => JSX.Element;
    confirmDate: () => void;
    selectDate(date: number): void;
    static defaultProps: DefaultProps;
}
declare type State = {
    selectedDate: number;
};
declare type RequiredProps = {
    onDateChange: (num: number) => void;
    defaultDate: number;
};
declare type DefaultProps = {
    availableDates: number[];
    visible: boolean;
    onClose: () => void;
    buttonText: string;
    titleText: string;
    tooltipTop: number | string;
    tooltipLeft: number | string;
    invokeMode: ValueOf<typeof INVOKE_MODE>;
};
export declare type Props = RequiredProps & DefaultProps;
export default DateSelector;
