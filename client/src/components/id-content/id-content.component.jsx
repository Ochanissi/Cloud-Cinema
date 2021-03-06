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

import { useMediaQuery } from 'react-responsive';

import IDItem from '../id-item/id-item.component';
import FeaturedItem from '../../components/featured-item/featured-item.component';

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
    Object.values(peopleMovieCredits).filter((item) => {
      const i = itemCredits.findIndex((x) => x.id === item.id);
      if (i <= -1) {
        itemCredits.push(item);
      }
      return null;
    });

    itemCreditsTV = [];
    Object.values(peopleTVCredits).filter((item) => {
      const i = itemCreditsTV.findIndex((x) => x.id === item.id);
      if (i <= -1) {
        itemCreditsTV.push(item);
      }
      return null;
    });

    itemTrailers = [];
    itemReviews = [];
  }

  // console.log(itemCredits);

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

  let slidesTrailers = mediaSmall ? 1 : mediaLarge ? 2 : 3;

  let heigthTrailers = mediaPhone
    ? 45
    : mediaSmall
    ? 30
    : mediaMedium
    ? 45
    : 37;

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
          naturalSlideHeight={height}
          totalSlides={itemCredits.length}
          visibleSlides={slides}
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
            {itemCredits.map((item, i) => {
              if (itemType === 'people')
                return (
                  <Slide index={i} key={item.id}>
                    <FeaturedItem {...item} itemTypeDisc={'movie'} />
                  </Slide>
                );

              if (itemType === 'movie' || itemType === 'tv')
                return (
                  <Slide index={i} key={item.id}>
                    <IDItem item={item} itemType={'people'} />
                  </Slide>
                );

              return null;
            })}
          </Slider>
        </CarouselProvider>
      ) : null}

      {itemCreditsTV.length > 0 ? (
        <CarouselProvider
          naturalSlideWidth={146}
          naturalSlideHeight={height}
          totalSlides={itemCreditsTV.length}
          visibleSlides={slides}
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
                <FeaturedItem {...item} itemTypeDisc={'tv'} />
              </Slide>
            ))}
          </Slider>
        </CarouselProvider>
      ) : null}

      {itemTrailers.length > 0 ? (
        <CarouselProvider
          naturalSlideWidth={66}
          naturalSlideHeight={heigthTrailers}
          totalSlides={itemTrailers.length}
          visibleSlides={slidesTrailers}
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

      <div className='id-content__reviews'>
        <div className='id-content__header'>
          <h2 className='id-content__header--title'>
            {itemType === 'people' ? 'Comments' : 'Reviews'}
          </h2>
        </div>
        {itemReviews.length > 0 ? (
          <div className='id-content__reviews--content'>
            {itemReviews.map(({ author, content, id, url }) => (
              <div className='id-content__reviews--content--review' key={id}>
                <h4 className='id-content__reviews--content--review--title'>
                  {author}
                </h4>
                <p className='id-content__reviews--content--review--content'>
                  {content.length > 420
                    ? `${content.slice(0, 420)}...`
                    : content}
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
        ) : (
          <div className='id-content__reviews--content'>
            <div className='id-content__reviews--content--review'>
              There are no {itemType === 'people' ? 'comments' : 'reviews'} for
              this{' '}
              {itemType === 'tv'
                ? 'TV show'
                : itemType === 'people'
                ? 'person'
                : 'movie'}
              .
            </div>
          </div>
        )}
      </div>
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
