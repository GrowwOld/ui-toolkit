import React, { ReactNode } from 'react';


type Props = {
  className?: string;
  children: ReactNode;
  style?: React.CSSProperties;
  textAlign?: 'left' | 'right' | 'center';
  colSpan?: number;
  onClick?: (e?: React.MouseEvent) => void;
}


const TableCell = (props: Props) => {
  const { children, className = 'tb10Td', style, textAlign, colSpan = 1, onClick } = props;

  return (
    <td onClick={onClick}
      colSpan={colSpan}
      style={{ ...style, textAlign }}
      className={className}
    >
      {children}
    </td>
  );
};

export default TableCell;
