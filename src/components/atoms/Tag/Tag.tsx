import React from 'react'

import './tag.css';

const Tag = (props: Props) => {
  if (!React.Children.count(props.children)) {
    return null
  }

  let tagClass = props.tagClass;

  if (props.isWarning) {
    tagClass = `tg11Warning`;

  } else if (props.isError) {
    tagClass = `tg11Error`;

  } else if (props.isInfo) {
    tagClass = `tg11Info`;
  }

  return (
    <div className={`tg11Container ${tagClass}`}>
      {props.children}
    </div>
  )
}

type Props = {
  isWarning: boolean,
  isError: boolean,
  isInfo: boolean,
  tagClass: string,
  children: React.ReactNode
}

Tag.defaultProps = {
  isWarning: true,
  isError: false,
  isInfo: false,
  tagClass: ''
} as Props;

export default Tag;
