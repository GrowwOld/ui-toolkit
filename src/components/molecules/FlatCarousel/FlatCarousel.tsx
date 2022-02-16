import React, { useState, useEffect } from 'react';
import FlatCarousel from 'flat-carousel';

import { Image } from '../../atoms';
import { FlatCarouselImage } from './flatCarouselTypes';

import './carousel.css';


const Carousel = (props:Props) => {
  const {
    images,
    custom,
    parentClass,
    descriptionClass,
    titleClass,
    children
  } = props;

  const [ hidden, setHidden ] = useState(true);

  useEffect(() => {
    const carouselTimeout = setTimeout(function() {
      setHidden(false);
    }, 400);

    return () => {
      clearTimeout(carouselTimeout);
    };
  }, []);

  return (
    <FlatCarousel
      initialIndex={0}
      autoplay={true}
      autoplayInterval={2500}
    >
      {
        !custom
          ? images.map((image, index) => (
            <div
              key={index}
              className={`demo-item ${hidden && index ? 'carousel-item-hidden' : ''} ${parentClass}`}
            >
              <Image
                src={image.src}
                srcDark={image.darkSrc}
                addClass="center-align common171CarouselImg"
                alt={image.alt}
                width={image.width}
                height={image.height}
                useLazyLoad={false}
              />
              {
                image.title &&
                <div
                  className={`center-align common171CarouselTitle ${titleClass}`}
                >
                  {image.title}
                </div>
              }
              {
                image.description &&
                <div
                  className={`center-align common171CarouselDesc ${descriptionClass}`}
                >
                  {image.description}
                </div>
              }
            </div>
          ))
          : children
      }
    </FlatCarousel>
  );
};


type DefaultProps = {
  parentClass?: string;
  descriptionClass?: string;
  titleClass?: string;
  custom: boolean;
  children?: React.ReactNode;
}


type RequiredProps = {
  images: FlatCarouselImage[];
}


type Props = RequiredProps & DefaultProps;

Carousel.defaultProps = {
  parentClass: '',
  descriptionClass: '',
  titleClass: '',
  custom: false
};

export default Carousel;
