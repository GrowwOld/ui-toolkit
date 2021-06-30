import React, { ReactNode } from 'react';
import cn from 'classnames';

import {
  TableBody,
  TableCell,
  TableFooter,
  TableHeader,
  TableHeaderCell,
  TableRow
} from './Components';

import './table.css';

// Can sort based on the header, Table header takes props -> sortable, ascending, onSortClick
// To add FilpMove -> instead of table body: <FlipMove typeName="tbody" enterAnimation="accordionVertical" leaveAnimation="none"></FlipMove>
// Can add Table Footer -> Pagination, Loader etc.
// Add padding to Table.Row -> HorzPadding, VertPadding
// Width provided to Table.HeaderCell + HorzPadding = 100%

type TableProps = {
  className?: string;
  style?: React.CSSProperties;
  children: ReactNode;
}

class Table extends React.Component<TableProps, {}> {

  static Body = TableBody;


  static Cell = TableCell;


  static Footer = TableFooter;


  static Header = TableHeader;


  static HeaderCell = TableHeaderCell;


  static Row = TableRow;


  render() {
    const { children, className = '', style = {} } = this.props;
    const classes = cn('tb10Table', className);

    return (
      <table style={style}
        className={classes}
      >
        {children}
      </table>
    );
  }
}

export default Table;
