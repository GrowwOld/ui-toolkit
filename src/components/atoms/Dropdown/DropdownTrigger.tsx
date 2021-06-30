import React from 'react';


const DropdownTrigger = (props: Props) => {
  const { children, className, ...dropdownTriggerProps } = props;

  return (
    <div className={`dropdown__trigger ${className}`}
      {...dropdownTriggerProps}
    >
      {children}
    </div>
  );
};


DropdownTrigger.displayName = 'DropdownTrigger';

DropdownTrigger.defaultProps = {
  className: ''
} as DefaultProps;


type RequiredProps = {
  children: React.ReactNode;
}


type DefaultProps = {
  className: string;
}


type Props = RequiredProps & DefaultProps;

export default DropdownTrigger;
