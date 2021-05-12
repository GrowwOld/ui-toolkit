import React, { ReactNode } from "react";

type Props = {
  className?: string,
  children: ReactNode,
}

const TableFooter = (props: Props) => {
  const { children, className } = props;

  return <tfoot className={className}>{children}</tfoot>;
};

export default TableFooter;
