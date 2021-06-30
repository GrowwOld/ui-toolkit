import React, { useState } from 'react';
import LazyLoad from 'react-lazyload';

import { Theme } from '../../../utils/types/theme';


const Image = (props: Props) => {
  const { src, srcDark, offset, height, addClass, addClassDark,
    width, alt, useLazyLoad, onClick } = props;

  let activeSrc = src;
  let activeClass = addClass;

  const [ currentTheme, setCurrentTheme ] = useState<Theme>(Theme.Light);
  const [ isErrorHandled, setErrorHandled ] = useState(false);


  const themeChangeCallback = (e: any) => {
    const theme: Theme = e.target?.dataset?.theme || Theme.Light;

    setCurrentTheme(theme);
  };


  const handleBrokenImage = (e: any) => {
    if (props.handleBrokenImage && (!isErrorHandled)) {
      setErrorHandled(true);
      e.target.src = props.handleBrokenImage;
    }
  };


  if (currentTheme === Theme.Dark) {
    activeSrc = srcDark ? srcDark : src;
    activeClass = addClassDark ? addClassDark : addClass;
  }


  if (useLazyLoad) {
    return (
      <LazyLoad height={height}
        once
        offset={offset}
      >
        <img
          onError={handleBrokenImage}
          className={activeClass}
          src={activeSrc}
          width={width}
          height={height}
          alt={alt}
          onClick={onClick}
        />
      </LazyLoad>
    );

  } else {
    return (
      <img
        onError={handleBrokenImage}
        className={activeClass}
        src={activeSrc}
        width={width}
        height={height}
        alt={alt}
        onClick={onClick}
      />
    );
  }
};


type RequiredProps = {
  height: string | number;
  width: string | number;
  alt: string;
  src: string;
}


type DefaultProps = {
  srcDark: string;
  addClass: string;
  addClassDark: string;
  offset: number;
  handleBrokenImage: string;
  onClick: (e: React.MouseEvent<HTMLImageElement>) => void;
  /** prop to determine if we want to use lazyload on image or not, by default it is true*/
  useLazyLoad: boolean;
}


export type Props = RequiredProps & DefaultProps;


Image.defaultProps = {
  offset: 800,
  addClass: '',
  srcDark: '',
  addClassDark: '',
  handleBrokenImage: '',
  useLazyLoad: true,
  onClick: () => { }
} as DefaultProps;


export default Image;
