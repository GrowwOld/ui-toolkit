import React from 'react';
declare class Popup extends React.PureComponent<Props> {
    static defaultProps: DefaultProps;
    constructor(props: Props);
    componentWillUnmount(): void;
    render(): JSX.Element;
    onClose: () => void;
}
declare type DefaultProps = {
    width: number;
    onLoad: () => void;
    onUnLoad: () => void;
    onClose: () => void;
    closeMaskOnClick: boolean;
    closeOnEsc: boolean;
    showCloseButton: boolean;
    customStyles: React.CSSProperties;
    popupClass: string;
};
declare type RequiredProps = {
    visible: boolean;
};
export declare type Props = RequiredProps & DefaultProps;
export default Popup;
