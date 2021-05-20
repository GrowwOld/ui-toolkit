import React, { ReactNode, forwardRef } from "react";

import cn from "classnames";

export type TableBodyProps = {
  className?: string;
  onScroll?: (event?: React.UIEvent<HTMLElement>) => void;
  children: ReactNode;
}

type TableSectionRef = HTMLTableSectionElement

const TableBody = forwardRef<TableSectionRef, TableBodyProps>((props, ref) => {
  const { children, className, onScroll } = props;
  // if animation needed use this instead of table body: <FlipMove typeName="tbody" enterAnimation="accordionVertical" leaveAnimation="none"></FlipMove>
  const classes = cn(className);

  return <tbody ref={ref} className={classes} onScroll={onScroll}>{children}</tbody>;
});

export default TableBody;
