import React from 'react';

import './tag.css';


const Tag = (props: Props) => {
  const childrenCount = React.Children.count(props.children);

  if (!childrenCount) {
    return null;
  }

  let tagClass = props.tagClass;

  if (props.isWarning) {
    tagClass = 'tg11Warning width100';

  } else if (props.isError) {
    tagClass = 'tg11Error width100';

  } else if (props.isInfo) {
    tagClass = 'tg11Info width100';
  }

  if (childrenCount === 1) {
    tagClass += ' absolute-center';

  } else {
    tagClass += ' valign-wrapper vspace-between';
  }

  return (
    <div className={`fs12 tg11Container ${tagClass}`}>
      {props.children}
    </div>
  );
};


type Props = {
  isWarning: boolean;
  isError: boolean;
  isInfo: boolean;
  tagClass: string;
  children: React.ReactNode;
}

Tag.defaultProps = {
  isWarning: true,
  isError: false,
  isInfo: false,
  tagClass: ''
} as Props;

export default Tag;
