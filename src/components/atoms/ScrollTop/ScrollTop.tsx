import React, { useState, useEffect } from 'react';
import cn from 'classnames';

import { IconStore, MI_ICON_LIST } from '../IconStore';

import './scrollTop.css';

const ScrollTop = (props: Props) => {
  const [show, toggleShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScrollEvent);

    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    }
  }, [show]);

  const handleScrollEvent = () => {
    if (typeof window !== 'undefined') {
      const { innerHeight, pageYOffset } = window;

      const offset = (document.body?.scrollHeight) - (innerHeight + 200); // taking margin of 200px on scroll down

      const hideElement = show && (pageYOffset <= 200); // taking margin of 200px on scroll up

      const showElement = (pageYOffset > offset || pageYOffset > 2000) && (!show); // added 2000px check for places where we have infinite scroll

      if (hideElement) {
        toggleShow(false);
      }

      if (showElement) {
        toggleShow(true);
      }
    }
  };


  const handleIconClick = () => {
    if (typeof window !== 'undefined') {
      window.scroll({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={cn('scroll11', { 'scroll11FadeIn': show, 'scroll11FadeOut': !show })} style={props.style} onClick={handleIconClick}>
      <IconStore
        iconName={MI_ICON_LIST.arrow_drop_down_circle}
        width={52}
        height={52}
        fontSize={52}
        iconClass="cur-po scroll11Img"
      />
    </div>
  )
}

const defaultProps: DefaultProps = {
  style: {}
}


type DefaultProps = {
  style: React.CSSProperties
}

ScrollTop.defaultProps = defaultProps;

export type Props = DefaultProps;

export default React.memo(ScrollTop);
