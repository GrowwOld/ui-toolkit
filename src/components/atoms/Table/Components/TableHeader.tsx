import React, { ReactNode } from 'react';

export type TableHeaderProps = {
  className?: string;
  children: ReactNode;
}


const TableHeader = (props: TableHeaderProps) => {
  const { children, className = '' } = props;

  return <thead className={className}>{children}</thead>;
};

export default TableHeader;
