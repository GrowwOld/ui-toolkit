import React from 'react';
import cn from 'classnames';

import { IconStore, MI_ICON_LIST } from '../IconStore';

import './informationBox.css';

const COLOR_TYPE = {
  POSITIVE: 'var(--primaryClr10)',
  NEUTRAL: 'var(--quaternaryBg)',
  DEFAULT: 'var(--primaryBg)',
  WARNING: 'var(--growwYellow10)',
  ERROR: 'var(--growwRed10)'
}

const BORDER_COLOR = {
  POSITIVE: 'var(--primaryClr60)',
  NEUTRAL: 'var(--border)',
  DEFAULT: 'var(--border)',
  WARNING: 'var(--growwYellow)',
  ERROR: 'var(--growwRed)'
}


const InformationBox = (props: Props) => {
  const {
    type,
    icon,
    width,
    height,
    content,
    showIcon,
    outlined,
    informationBoxClass,
    informationBoxStyle
  } = props;

  const parentDivClass = cn({
    "valign-wrapper infbd45ParentDiv fs14": true,
    informationBoxClass: informationBoxClass !== ""
  })

  const parentDivStyle = {
    height: height,
    width: width,
    ...(
      outlined ?
        { border: `1px solid ${BORDER_COLOR[type]}` } :
        { background: COLOR_TYPE[type] }
    ),
    ...informationBoxStyle
  }

  return (
    <div style={parentDivStyle} className={parentDivClass}>
      {
        showIcon &&
        <IconStore
          width={20}
          height={20}
          fontSize={20}
          iconClass="clrText infbd45InfoIcon"
          iconName={icon}
        />
      }

      <div className="infbd45Content">{content}</div>

    </div>
  )
}


const defaultProps: DefaultProps = {
  showIcon: true,
  icon: MI_ICON_LIST.info,
  iconClass: '',
  width: "auto",
  height: "auto",
  outlined: false,
  type: 'DEFAULT',
  informationBoxClass: "",
  informationBoxStyle: {}
}


type RequiredProps = {
  content: string
}


type DefaultProps = {
  icon: string;
  showIcon: boolean;
  iconClass: string;
  outlined: boolean;
  width: number | 'auto';
  height: number | 'auto';
  informationBoxClass: string;
  informationBoxStyle: React.CSSProperties;
  type: 'DEFAULT' | 'POSITIVE' | 'NEUTRAL' | 'ERROR' | 'WARNING';
}


InformationBox.defaultProps = defaultProps;

export type Props = RequiredProps & DefaultProps;

export default React.memo(InformationBox);
