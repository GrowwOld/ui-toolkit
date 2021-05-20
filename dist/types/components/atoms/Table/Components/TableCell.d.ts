import React, { ReactNode } from "react";
declare type Props = {
    className?: string;
    children: ReactNode;
    style?: React.CSSProperties;
    textAlign?: 'left' | 'right' | 'center';
    colSpan?: number;
    onClick?: (e?: React.MouseEvent) => void;
};
declare const TableCell: (props: Props) => JSX.Element;
export default TableCell;
