import React from 'react';
import { connect } from 'react-redux';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';

import IDItem from '../id-item/id-item.component';

import './id-content.styles.scss';

const IDContent = ({
  itemType,
  itemDetails,

  movieCredits,
  movieTrailers,
  movieReviews,

  TVCredits,
  TVTrailers,
  TVReviews,

  peopleMovieCredits,
  peopleTVCredits,
}) => {
  const { overview, biography } = itemDetails;

  let itemCredits, itemCreditsTV, itemTrailers, itemReviews;

  if (itemType === 'movie') {
    itemCredits = movieCredits;
    itemTrailers = movieTrailers;
    itemReviews = movieReviews;

    itemCreditsTV = [];
  }
  if (itemType === 'tv') {
    itemCredits = TVCredits;
    itemTrailers = TVTrailers;
    itemReviews = TVReviews;

    itemCreditsTV = [];
  }

  if (itemType === 'people') {
    itemCredits = [];
    const dataMovie = Object.values(peopleMovieCredits).filter((item) => {
      const i = itemCredits.findIndex((x) => x.id == item.id);
      if (i <= -1) {
        itemCredits.push(item);
      }
      return null;
    });

    itemCreditsTV = [];
    const dataTV = Object.values(peopleTVCredits).filter((item) => {
      const i = itemCreditsTV.findIndex((x) => x.id == item.id);
      if (i <= -1) {
        itemCreditsTV.push(item);
      }
      return null;
    });

    itemTrailers = [];
    itemReviews = [];
  }

  return (
    <div className='id-content'>
      {overview || biography ? (
        <div className='id-content__summary'>
          <h2 className='id-content__header--title'>
            {overview ? 'Summary' : 'Biography'}
          </h2>
          <p className='id-content__summary--content'>
            {overview || biography}
          </p>
        </div>
      ) : null}

      {itemCredits.length > 0 ? (
        <CarouselProvider
          naturalSlideWidth={146}
          naturalSlideHeight={231}
          totalSlides={itemCredits.length}
          visibleSlides={6}
          className='id-content__cast'
        >
          <div className='id-content__header'>
            <h2 className='id-content__header--title'>
              {itemType === 'people' ? 'Movie Credits' : 'Cast'}
            </h2>
            {itemCredits.length >= 6 ? (
              <div className='id-content__header--arrows'>
                <ButtonBack className='id-content__header--arrows--prev'>
                  &#10094;
                </ButtonBack>
                <ButtonNext className='id-content__header--arrows--next'>
                  &#10095;
                </ButtonNext>
              </div>
            ) : null}
          </div>
          <Slider className='id-content__cast--content'>
            {itemCredits.map((item, i) => (
              <Slide index={i} key={item.id}>
                <IDItem
                  item={item}
                  itemType={itemType === 'people' ? 'movie' : 'people'}
                />
              </Slide>
            ))}
          </Slider>
        </CarouselProvider>
      ) : null}

      {itemCreditsTV.length > 0 ? (
        <CarouselProvider
          naturalSlideWidth={146}
          naturalSlideHeight={231}
          totalSlides={itemCreditsTV.length}
          visibleSlides={6}
          className='id-content__cast'
        >
          <div className='id-content__header'>
            <h2 className='id-content__header--title'>TV Shows Credits</h2>
            {itemCreditsTV.length >= 6 ? (
              <div className='id-content__header--arrows'>
                <ButtonBack className='id-content__header--arrows--prev'>
                  &#10094;
                </ButtonBack>
                <ButtonNext className='id-content__header--arrows--next'>
                  &#10095;
                </ButtonNext>
              </div>
            ) : null}
          </div>
          <Slider className='id-content__cast--content'>
            {itemCreditsTV.map((item, i) => (
              <Slide index={i} key={item.id}>
                <IDItem item={item} itemType={'tv'} />
              </Slide>
            ))}
          </Slider>
        </CarouselProvider>
      ) : null}

      {itemTrailers.length > 0 ? (
        <CarouselProvider
          naturalSlideWidth={66}
          naturalSlideHeight={37}
          totalSlides={itemTrailers.length}
          visibleSlides={3}
          className='id-content__trailers'
        >
          <div className='id-content__header'>
            <h2 className='id-content__header--title'>Trailers</h2>
            {itemTrailers.length > 3 ? (
              <div className='id-content__header--arrows'>
                <ButtonBack className='id-content__header--arrows--prev'>
                  &#10094;
                </ButtonBack>
                <ButtonNext className='id-content__header--arrows--next'>
                  &#10095;
                </ButtonNext>
              </div>
            ) : null}
          </div>
          <Slider className='id-content__trailers--content'>
            {itemTrailers.map(({ id, key, name }, i) => (
              <Slide index={i} key={id}>
                <iframe
                  className='id-content__trailers--content--video'
                  src={`https://www.youtube.com/embed/${key}`}
                  frameBorder='0'
                  allow='autoplay; encrypted-media'
                  allowFullScreen
                  title={name}
                />
              </Slide>
            ))}
          </Slider>
        </CarouselProvider>
      ) : null}

      {itemReviews.length > 0 ? (
        <div className='id-content__reviews'>
          <div className='id-content__header'>
            <h2 className='id-content__header--title'>Reviews</h2>
          </div>
          <div className='id-content__reviews--content'>
            {itemReviews.map(({ author, content, id, url }) => (
              <div className='id-content__reviews--content--review' key={id}>
                <h4 className='id-content__reviews--content--review--title'>
                  {author}
                </h4>
                <p className='id-content__reviews--content--review--content'>
                  {content.slice(0, 420)}...
                </p>
                <a
                  className='id-content__reviews--content--review--url'
                  href={url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  See full review &rsaquo;
                </a>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  movieCredits: state.movie.movieCredits,
  movieTrailers: state.movie.movieTrailers,
  movieReviews: state.movie.movieReviews,

  TVCredits: state.tv.TVCredits,
  TVTrailers: state.tv.TVTrailers,
  TVReviews: state.tv.TVReviews,

  peopleMovieCredits: state.people.peopleMovieCredits,
  peopleTVCredits: state.people.peopleTVCredits,
});

export default connect(mapStateToProps)(IDContent);
