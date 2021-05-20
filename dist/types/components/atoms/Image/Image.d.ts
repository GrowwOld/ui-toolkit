import React from 'react';
declare const Image: {
    (props: Props): JSX.Element;
    defaultProps: DefaultProps;
};
declare type RequiredProps = {
    height: number;
    width: string | number;
    alt: string;
    src: string;
};
declare type DefaultProps = {
    srcDark: string;
    addClass: string;
    addClassDark: string;
    offset: number;
    handleBrokenImage: string;
    onClick: (e: React.MouseEvent<HTMLImageElement>) => void;
    /** prop to determine if we want to use lazyload on image or not, by default it is true*/
    useLazyLoad: boolean;
};
export declare type Props = RequiredProps & DefaultProps;
export default Image;
