import React, { ReactNode } from "react";

import cn from "classnames";

import { IconStore, MI_ICON_LIST } from '../../IconStore';

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


const TableHeaderCell = (props: Props) => {

  const {
    children,
    className = "tb10Th tb10ThText",
    style,
    textAlign = "left",
    width = '16%',
    sortConfig,
    ...otherProps
  } = props;


  const onSortTh = (e: React.MouseEvent) => {

    if (sortConfig && sortConfig.onSortClick) {
      sortConfig.onSortClick(e, !sortConfig?.ascending)
    }
  }

  if (sortConfig) {

    const classes = cn(className, { "tb10SelectHeaderCell": sortConfig?.isSelected });
    let customIconClass = sortConfig?.iconClass || '';
    const iconClasses = cn('tb10IconClass', customIconClass, { "tb10HideIcon": sortConfig?.hideIcon, "primaryClr": sortConfig?.isSelected })

    return (
      <th
        onClick={onSortTh}
        style={{ ...style, textAlign, cursor: "pointer", width }}
        className={classes}
        {...otherProps}
      >
        {children}
        <IconStore
          iconName={sortConfig?.ascending ? MI_ICON_LIST.arrow_drop_up : MI_ICON_LIST.arrow_drop_down}
          iconClass={iconClasses}
        />
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
