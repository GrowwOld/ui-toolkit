import React from "react";
declare type TableRowProps = {
    className?: string;
    horzPadding?: string | number;
    vertPadding?: string | number;
    id?: string | '';
    onClick?: (e?: React.MouseEvent) => void;
};
declare class TableRow extends React.PureComponent<TableRowProps, {}> {
    render(): JSX.Element;
}
export default TableRow;
