import React from 'react';
import { Link } from 'react-router-dom';

import 'pure-react-carousel/dist/react-carousel.es.css';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';

import FeaturedItem from '../../components/featured-item/featured-item.component';

import './discover-trends-item.styles.scss';

const DiscoverTrendsItem = ({
  itemTitle,
  itemType,
  itemId,
  itemContent,
  popular,
}) => {
  return (
    <CarouselProvider
      naturalSlideWidth={146}
      naturalSlideHeight={84.4}
      totalSlides={itemContent.length}
      visibleSlides={1}
      className='discover__trends--container'
    >
      <Slider className='discover__trends--item'>
        {itemContent.slice(0, 10).map((item, i) => (
          <Slide index={i} key={item.id}>
            <img
              className='discover__trends--item--image'
              alt='Discover Background'
              src={`https://image.tmdb.org/t/p/original${
                item.backdrop_path || item.poster_path
              }`}
            />
            <div className='discover__trends--item--content'>
              <FeaturedItem
                id={item.id}
                itemTypeDisc={itemType}
                discover={true}
                {...item}
              />

              {popular ? (
                <div className='discover__trends--item--content--description'>
                  <span className='discover__trends--item--content--description--title'>
                    {item.name || item.original_name}
                  </span>
                  <span className='discover__trends--item--content--description--text'>
                    {item.overview}
                  </span>
                </div>
              ) : null}
            </div>
          </Slide>
        ))}
      </Slider>
      <span className='discover__trends--item--title'>{itemTitle}</span>
      <span className='discover__trends--item--more'>
        <Link to={`/discover/${itemType}/${itemId}`}>
          <span>See More</span>
          <ion-icon name='chevron-forward-circle-outline'></ion-icon>
        </Link>
      </span>
      <ButtonBack className='discover__trends--container--prev'>
        &#10094;
      </ButtonBack>
      <ButtonNext className='discover__trends--container--next'>
        &#10095;
      </ButtonNext>
    </CarouselProvider>
  );
};

export default DiscoverTrendsItem;
