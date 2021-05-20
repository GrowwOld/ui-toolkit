import React from 'react';
import './loader.css';
export declare const LOADER_TYPE: {
    readonly CIRCULAR: "circular";
    readonly CIRCULAR_BOLT: "circularBolt";
    readonly CANDLE_STICK: "candleStick";
    readonly LINEAR: "linear";
};
export declare class Loader extends React.PureComponent<DefaultProps, {}> {
    static defaultProps: DefaultProps;
    render(): JSX.Element;
    getCircularLoaderUI: () => JSX.Element;
    getCirularBoltLoaderUI: () => JSX.Element;
    getCandleStickLoaderUI: () => JSX.Element;
    getLinearLoaderUI: () => JSX.Element;
    getContainerClassName: (defaultClass?: string) => string;
    getLoaderClassName: (defaultClass?: string) => string;
}
declare type DefaultProps = {
    loaderType: ValueOf<typeof LOADER_TYPE>;
    loaderClassName: string;
    active: boolean;
    dimension: string;
    borderWidth: string | number;
};
export default Loader;
