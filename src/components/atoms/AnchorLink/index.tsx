import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

const AnchorLink = ({
  isCsr, url, addAnchorClass, children,
  ...rest
}: AnchorLinkProps) => {

  if (isCsr) {
    return (
      <Link
        to={url}
        className={addAnchorClass}
        {...rest}
      >
        {children}
      </Link >
    )
  }

  return (
    <a
      href={url}
      className={addAnchorClass}
      {...rest}
    >
      {children}
    </a>
  )
}

type Props = {
  url: string,
  /* Prop name is isCsr i.e is client side routing in case of Link tag and server side routing in case of server side routing */
  children: React.ReactNode
}

type DefaultProps = {
  isCsr: boolean,
  addAnchorClass: string
}

type AnchorLinkProps = Props & DefaultProps & Partial<LinkProps<unknown>>;

AnchorLink.defaultProps = {
  isCsr: true,
  addAnchorClass: ""
} as DefaultProps;

export default AnchorLink;
