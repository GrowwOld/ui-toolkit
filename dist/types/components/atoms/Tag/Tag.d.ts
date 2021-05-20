import React from 'react';
import './tag.css';
declare const Tag: {
    (props: Props): JSX.Element | null;
    defaultProps: Props;
};
declare type Props = {
    isWarning: boolean;
    isError: boolean;
    isInfo: boolean;
    tagClass: string;
    children: React.ReactNode;
};
export default Tag;
