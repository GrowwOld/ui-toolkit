import React, { FunctionComponent, ReactNode } from "react";

export type TableHeaderProps = {
  className?: string,
  children: ReactNode,
}

const TableHeader: FunctionComponent<TableHeaderProps> = (props) => {
  const { children, className = "" } = props;

  return <thead className={className}>{children}</thead>;
};

export default TableHeader;
