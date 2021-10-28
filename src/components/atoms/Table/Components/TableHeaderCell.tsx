import React, { ReactNode } from 'react';

import { ArrowDropDown, ArrowDropUp } from '@groww-tech/icon-store/mi';
import cn from 'classnames';


type SortConfig = {
  iconClass?: string;
  isSelected?: boolean;
  hideIcon?: boolean;
  ascending?: boolean;
  onSortClick?: (e?: React.MouseEvent, ascending?: boolean) => void;
}


type Props = {
  className?: string;
  children: ReactNode;
  style?: React.CSSProperties;
  sortConfig?: SortConfig;
  width?: string | number;
  textAlign?: 'left' | 'right' | 'center';
}


const TableHeaderCell = (props: React.ThHTMLAttributes<HTMLTableCellElement> & Props) => {

  const {
    children,
    className = 'tb10Th tb10ThText',
    style,
    textAlign = 'left',
    width = '16%',
    sortConfig,
    ...otherProps
  } = props;


  const onSortTh = (e: React.MouseEvent) => {

    if (sortConfig && sortConfig.onSortClick) {
      sortConfig.onSortClick(e, !sortConfig?.ascending);
    }
  };

  if (sortConfig) {

    const classes = cn(className, { 'tb10SelectHeaderCell': sortConfig?.isSelected });
    const customIconClass = sortConfig?.iconClass || '';
    const iconClasses = cn('tb10IconClass', customIconClass, { 'tb10HideIcon': sortConfig?.hideIcon, 'primaryClr': sortConfig?.isSelected });

    return (
      <th
        onClick={onSortTh}
        style={{ ...style, textAlign, cursor: 'pointer', width }}
        className={classes}
        {...otherProps}
      >
        {children}
        {
          sortConfig?.ascending
            ? <ArrowDropUp className={iconClasses} />
            : <ArrowDropDown className={iconClasses} />
        }
      </th>
    );

  } else {

    const classes = cn(className);

    return (
      <th
        style={{ ...style, textAlign, width }}
        className={classes}
        {...otherProps}
      >
        {children}
      </th>
    );
  }
};

export default TableHeaderCell;
