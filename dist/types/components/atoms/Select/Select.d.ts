import React from 'react';
import { Dropdown } from '../Dropdown';
import './select.css';
declare class Select extends React.PureComponent<Props> {
    optionsRefArr: React.RefObject<HTMLDivElement>[];
    selectDropdownRef: Dropdown | null;
    static defaultProps: DefaultProps;
    constructor(props: Props);
    render(): JSX.Element | null;
    getDropdownUI: () => JSX.Element;
    onSelectChange: (index: number) => void;
    onKeyUp: (event: React.KeyboardEvent) => void;
    onKeyDown: (event: React.KeyboardEvent) => void;
}
declare type SelectData = {
    label: string;
    value: string;
};
declare type RequiredProps = {
    data: SelectData[];
    activeIndex: number;
    onSelectChange: (index: number) => void;
};
declare type DefaultProps = {
    placeholder: string;
    optionClass: string;
    optionsParentClass: string;
    activeOptionBoxClass: string;
};
export declare type Props = RequiredProps & DefaultProps;
export default Select;
