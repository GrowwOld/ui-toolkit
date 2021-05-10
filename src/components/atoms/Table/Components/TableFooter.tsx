import React, { FunctionComponent, ReactNode } from "react";

type Props = {
  className?: string,
  children: ReactNode,
}

const TableFooter: FunctionComponent<Props> = (props) => {
  const { children, className } = props;

  return <tfoot className={className}>{children}</tfoot>;
};

export default TableFooter;
