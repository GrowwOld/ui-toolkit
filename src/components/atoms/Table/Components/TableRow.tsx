import React, {
  Children,
  cloneElement,
  isValidElement,
} from "react";

import cn from "classnames";

type TableRowProps = {
  className?: string;
  horzPadding?: string | number;
  vertPadding?: string | number;
  id?: string | '';
  onClick?: (e?: React.MouseEvent) => void;
}


type Props = TableRowProps & Partial<React.ThHTMLAttributes<HTMLTableRowElement>>;

class TableRow extends React.PureComponent<Props, {}> {

  render() {
    const {
      children,
      className = '',
      horzPadding = '5%',
      vertPadding = '16px',
      onClick,
      id,
      ...otherProps
    } = this.props;

    const classes = cn(className);

    const childrenWithProps = Children.map(children, (child, index) => {
      if (isValidElement(child)) {
        if (Children.count(children) === 1) {
          return cloneElement(child, {
            style: {
              paddingRight: horzPadding,
              paddingLeft: horzPadding,
              paddingTop: vertPadding,
              paddingBottom: vertPadding,
              ...child.props.style
            }
          });
 // for a table cannot add padding on the tr element. so pass padding to td.
        } else if (index === 0) {
          return cloneElement(child, {
            style: {
              paddingLeft: horzPadding,
              paddingTop: vertPadding,
              paddingBottom: vertPadding,
              ...child.props.style
            }
          });
 // for a table cannot add padding on the tr element. so pass padding to td.
        } else if (index === Children.count(children) - 1) {
          return cloneElement(child, {
            style: {
              paddingRight: horzPadding,
              paddingTop: vertPadding,
              paddingBottom: vertPadding,
              ...child.props.style
            }
          });
 // for a table cannot add padding on the tr element. so pass padding to td.
        } else {
          return cloneElement(child, {
            style: {
              paddingTop: vertPadding,
              paddingBottom: vertPadding,
              ...child.props.style
            }
          });
        }
      }

      return child;
    });

    return (
      <tr
        id={id}
        className={classes}
        onClick={onClick}
        {...otherProps}
      >
        {childrenWithProps}
      </tr>);

  }
}


export default TableRow;
