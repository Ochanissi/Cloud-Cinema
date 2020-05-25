import React from 'react';

import FeaturedItem from '../featured-item/featured-item.component';

import { useMediaQuery } from 'react-responsive';

import 'pure-react-carousel/dist/react-carousel.es.css';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';

import './featured-container.styles.scss';

const FeaturedContainer = ({ title, contentType }) => {
  const mediaBig = useMediaQuery({ maxDeviceWidth: 1110 });
  const mediaLarge = useMediaQuery({ maxDeviceWidth: 950 });
  const mediaMedium = useMediaQuery({ maxDeviceWidth: 800 });
  const mediaSmall = useMediaQuery({ maxDeviceWidth: 650 });
  const mediaPhone = useMediaQuery({ maxDeviceWidth: 500 });

  let slides = mediaPhone
    ? 2
    : mediaMedium
    ? 3
    : mediaLarge
    ? 4
    : mediaBig
    ? 5
    : 6;

  let height = mediaSmall
    ? 210
    : mediaMedium
    ? 150
    : mediaLarge
    ? 160
    : mediaBig
    ? 170
    : 210;

  return (
    <CarouselProvider
      naturalSlideWidth={146}
      naturalSlideHeight={height}
      totalSlides={contentType.length}
      visibleSlides={slides}
      className='featured__container'
    >
      <div className='featured__container--header'>
        <h2 className='featured__container--header--title'>{title}</h2>
        <div className='featured__container--header--arrows'>
          <ButtonBack className='featured__container--header--arrows--prev'>
            &#10094;
          </ButtonBack>
          <ButtonNext className='featured__container--header--arrows--next'>
            &#10095;
          </ButtonNext>
        </div>
      </div>
      <Slider className='featured__container--content'>
        {contentType.map(({ id, ...otherProps }, i) => (
          <Slide
            index={i}
            key={id}
            className='featured__container--content--slide'
          >
            <FeaturedItem id={id} {...otherProps} />
          </Slide>
        ))}
      </Slider>
    </CarouselProvider>
  );
};

export default FeaturedContainer;
