import React, { ReactNode } from "react";
export declare type TableBodyProps = {
    className?: string;
    onScroll?: (event?: React.UIEvent<HTMLElement>) => void;
    children: ReactNode;
};
declare const TableBody: React.ForwardRefExoticComponent<TableBodyProps & React.RefAttributes<HTMLTableSectionElement>>;
export default TableBody;
