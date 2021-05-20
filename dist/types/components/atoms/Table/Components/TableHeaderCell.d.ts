import React, { ReactNode } from "react";
declare type SortConfig = {
    iconClass?: string;
    isSelected?: boolean;
    hideIcon?: boolean;
    ascending?: boolean;
    onSortClick?: (e?: React.MouseEvent, ascending?: boolean) => void;
};
declare type Props = {
    className?: string;
    children: ReactNode;
    style?: React.CSSProperties;
    sortConfig?: SortConfig;
    width?: string | number;
    textAlign?: 'left' | 'right' | 'center';
};
declare const TableHeaderCell: (props: Props) => JSX.Element;
export default TableHeaderCell;
