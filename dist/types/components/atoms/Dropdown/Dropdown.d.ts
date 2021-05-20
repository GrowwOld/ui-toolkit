import React from 'react';
import './dropDown.css';
import DropdownTrigger from './DropdownTrigger';
import DropdownContent from './DropdownContent';
declare class Dropdown extends React.PureComponent<Props, State> {
    static defaultProps: DefaultProps;
    constructor(props: Props);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    isActive: () => boolean;
    hide: () => void;
    show: () => void;
    _onWindowClick: (event: MouseEvent | TouchEvent) => void;
    _onToggleClick: (event: MouseEvent) => void;
    _onKeyDownHandler: (event: KeyboardEvent) => void;
}
declare type State = {
    active: boolean;
};
declare type RequiredProps = {
    children: React.ReactChild | React.ReactChild[];
};
declare type DefaultProps = {
    className: string;
};
declare type Props = RequiredProps & DefaultProps & {
    disabled?: boolean;
    active?: boolean;
    onHide?: () => void;
    onShow?: () => void;
    removeElement?: boolean;
    style?: React.CSSProperties;
};
export { DropdownTrigger, DropdownContent };
export default Dropdown;
