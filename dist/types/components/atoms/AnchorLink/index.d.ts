import React from 'react';
import { LinkProps } from 'react-router-dom';
declare const AnchorLink: {
    ({ isCsr, url, addAnchorClass, children, ...rest }: AnchorLinkProps): JSX.Element;
    defaultProps: DefaultProps;
};
declare type Props = {
    url: string;
    children: React.ReactNode;
};
declare type DefaultProps = {
    isCsr: boolean;
    addAnchorClass: string;
};
declare type AnchorLinkProps = Props & DefaultProps & Partial<LinkProps<unknown>>;
export default AnchorLink;
