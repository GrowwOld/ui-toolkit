import React from 'react';

import cx from 'classnames';

import './dropDown.css';


const DropdownContent = (props: Props) => {
  const { children, className, animate, ...dropdownContentProps } = props;

  return (
    <div className={
      cx(
        'dropdown__content', className, {
          'dropdown__fadein': animate
        })
    }
    {...dropdownContentProps}
    >
      {children}
    </div>
  );
};

DropdownContent.displayName = 'DropdownContent';

DropdownContent.defaultProps = {
  className: '',
  animate: true
} as DefaultProps;


type RequiredProps = {
  children: React.ReactNode;
}


type DefaultProps = {
  className: string;
  animate: boolean;
}


type Props = RequiredProps & DefaultProps;

export default DropdownContent;
