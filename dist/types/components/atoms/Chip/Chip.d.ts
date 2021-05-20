import React from 'react';
import './chip.css';
declare enum IconPosition {
    LEFT = "left",
    RIGHT = "right"
}
declare type RequiredProps = {
    text: string;
};
declare type DefaultProps = {
    /**
     * Event handler called when the user clicks on the chip
     */
    onClick: (e: React.MouseEvent<HTMLImageElement>) => void;
    /**
     * Position of icon with respect to Chip text, if iconName is provided.
     */
    iconPosition: IconPosition;
    /**
     * Custom iconClass for icon, if iconName is provided.
     */
    iconClass: string;
    /**
     * This class will be applied on both, text and icon
     */
    parentClass: string;
    /**
     * If getImage is true, iconName should be one from IMG_ICON_LIST
     */
    getImage: boolean;
    /**
     * Custom class for text decoration
     */
    textClass: string;
    /**
     * Custom icon, value must be either from MI-ICON-LIST or IMG-ICON-LIST
     */
    iconName: string;
};
export declare type Props = RequiredProps & DefaultProps;
declare const _default: React.MemoExoticComponent<{
    (props: Props): JSX.Element;
    defaultProps: {
        onClick: () => void;
        iconPosition: IconPosition;
        iconClass: string;
        textClass: string;
        iconName: string;
        parentClass: string;
        getImage: boolean;
    };
}>;
export default _default;
