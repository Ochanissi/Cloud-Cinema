import React from 'react';

import FeaturedItem from '../featured-item/featured-item.component';

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
  return (
    <CarouselProvider
      naturalSlideWidth={146}
      naturalSlideHeight={200}
      totalSlides={contentType.length}
      visibleSlides={6}
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
