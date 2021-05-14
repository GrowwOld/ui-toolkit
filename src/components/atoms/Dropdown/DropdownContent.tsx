import React from 'react';

const DropdownContent = (props: Props) => {
  const { children, className, ...dropdownContentProps } = props;

  return (
    <div className={`dropdown__content ${className}`} {...dropdownContentProps}>
      {children}
    </div>
  );
}

DropdownContent.displayName = 'DropdownContent';

DropdownContent.defaultProps = {
  className: ''
} as DefaultProps;

type RequiredProps = {
  children: React.ReactNode
}

type DefaultProps = {
  className: string
}

type Props = RequiredProps & DefaultProps;

export default DropdownContent;
