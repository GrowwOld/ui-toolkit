import React from 'react';
import cn from 'classnames';

import { ReactIconProps } from '@groww-tech/icon-store';
import { Info } from '@groww-tech/icon-store/mi';

import './informationBox.css';

const COLOR_TYPE = {
  POSITIVE: 'var(--primaryClr10)',
  NEUTRAL: 'var(--quaternaryBg)',
  DEFAULT: 'var(--primaryBg)',
  WARNING: 'var(--growwYellow10)',
  ERROR: 'var(--growwRed10)'
};

const BORDER_COLOR = {
  POSITIVE: 'var(--primaryClr60)',
  NEUTRAL: 'var(--border)',
  DEFAULT: 'var(--border)',
  WARNING: 'var(--growwYellow)',
  ERROR: 'var(--growwRed)'
};


const InformationBox = (props: Props) => {
  const {
    type,
    width,
    height,
    content,
    showIcon,
    iconComponent,
    outlined,
    informationBoxClass,
    informationBoxStyle
  } = props;

  const parentDivClass = cn({
    'valign-wrapper infbd45ParentDiv fs14': true,
    informationBoxClass: informationBoxClass !== ''
  });

  const parentDivStyle = {
    height: height,
    width: width,
    ...(
      outlined
        ? { border: `1px solid ${BORDER_COLOR[type]}` }
        : { background: COLOR_TYPE[type] }
    ),
    ...informationBoxStyle
  };

  const infoIconProps = {
    size: 20,
    className: 'clrText infbd45InfoIcon'
  };

  return (
    <div style={parentDivStyle}
      className={parentDivClass}
    >
      {
        showIcon
          ? iconComponent?.(infoIconProps)
          : null
      }

      <span>{content}</span>

    </div>
  );
};


const defaultProps: DefaultProps = {
  showIcon: true,
  iconComponent: (props: ReactIconProps) => <Info {...props} />,
  width: 'auto',
  height: 'auto',
  outlined: false,
  type: 'DEFAULT',
  informationBoxClass: '',
  informationBoxStyle: {}
};


type RequiredProps = {
  content: React.ReactNode;
}


type DefaultProps = {
  showIcon: boolean;
  /**
   * iconComponent function returns svg icon component, we pass some extra props from InformationBox component
   */
  iconComponent: (props: ReactIconProps) => JSX.Element;
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
