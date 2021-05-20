import React, { ReactNode } from "react";
import { TableRow } from "./Components";
import "./table.css";
declare type TableProps = {
    className?: string;
    style?: React.CSSProperties;
    children: ReactNode;
};
declare class Table extends React.Component<TableProps, {}> {
    static Body: React.ForwardRefExoticComponent<import("./Components/TableBody").TableBodyProps & React.RefAttributes<HTMLTableSectionElement>>;
    static Cell: (props: {
        className?: string | undefined;
        children: React.ReactNode;
        style?: React.CSSProperties | undefined;
        textAlign?: "left" | "right" | "center" | undefined;
        colSpan?: number | undefined;
        onClick?: ((e?: React.MouseEvent<Element, MouseEvent> | undefined) => void) | undefined;
    }) => JSX.Element;
    static Footer: (props: {
        className?: string | undefined;
        children: React.ReactNode;
    }) => JSX.Element;
    static Header: (props: import("./Components/TableHeader").TableHeaderProps) => JSX.Element;
    static HeaderCell: (props: {
        className?: string | undefined;
        children: React.ReactNode;
        style?: React.CSSProperties | undefined;
        sortConfig?: {
            iconClass?: string | undefined;
            isSelected?: boolean | undefined;
            hideIcon?: boolean | undefined;
            ascending?: boolean | undefined;
            onSortClick?: ((e?: React.MouseEvent<Element, MouseEvent> | undefined, ascending?: boolean | undefined) => void) | undefined;
        } | undefined;
        width?: string | number | undefined;
        textAlign?: "left" | "right" | "center" | undefined;
    }) => JSX.Element;
    static Row: typeof TableRow;
    render(): JSX.Element;
}
export default Table;
