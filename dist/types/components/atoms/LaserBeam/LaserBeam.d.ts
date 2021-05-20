import React from 'react';
export declare const LASER_BEAM_UI: {
    DASH: string;
    SPREAD: string;
};
declare class LaserBeam extends React.Component<Props, State> {
    static defaultProps: Props;
    constructor(props: Props);
    componentDidUpdate(prevProps: Props): void;
    handleTransitionEnd(): void;
    _renderAddon(): JSX.Element | JSX.Element[];
    render(): JSX.Element;
}
declare type Props = {
    show: boolean;
    width: string;
    background?: string;
    zIndex?: string;
    noShadow?: boolean;
    ccStyle?: ValueOf<typeof LASER_BEAM_UI>;
    addon?: string;
    nextTransitionWidth?: string;
    nextTransitionDuration?: string;
    currentTransitionDuration?: string;
};
declare type State = {
    style: object;
    addonStyle: object;
};
export default LaserBeam;
