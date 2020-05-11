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
  movieDetails,
  movieCredits,
  movieTrailers,
  movieReviews,
}) => {
  const { overview } = movieDetails;

  // console.log(movieDetails);

  // console.log(this.props);

  return (
    <div className='id-content'>
      <div className='id-content__summary'>
        <h2 className='id-content__title'>Summary</h2>
        <p className='id-content__summary--content'>{overview}</p>
      </div>

      <CarouselProvider
        naturalSlideWidth={146}
        naturalSlideHeight={231}
        totalSlides={movieCredits.length}
        visibleSlides={6}
        className='id-content__cast'
      >
        <div className='id-content__header'>
          <h2 className='id-content__header--title'>Cast</h2>
          <div className='id-content__header--arrows'>
            <ButtonBack className='id-content__header--arrows--prev'>
              &#10094;
            </ButtonBack>
            <ButtonNext className='id-content__header--arrows--next'>
              &#10095;
            </ButtonNext>
          </div>
        </div>
        <Slider className='id-content__cast--content'>
          {movieCredits.map((item, i) => (
            <Slide index={i} key={item.id}>
              <IDItem item={item} />
            </Slide>
          ))}
        </Slider>
      </CarouselProvider>

      <CarouselProvider
        naturalSlideWidth={160}
        naturalSlideHeight={80}
        totalSlides={movieTrailers.length}
        visibleSlides={3}
        className='id-content__trailers'
      >
        <div className='id-content__header'>
          <h2 className='id-content__header--title'>Trailers</h2>
          <div className='id-content__header--arrows'>
            <ButtonBack className='id-content__header--arrows--prev'>
              &#10094;
            </ButtonBack>
            <ButtonNext className='id-content__header--arrows--next'>
              &#10095;
            </ButtonNext>
          </div>
        </div>
        <Slider className='id-content__trailers--content'>
          {movieTrailers.map(({ id, key, name }, i) => (
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

      <div className='id-content__reviews'>
        <div className='id-content__header'>
          <h2 className='id-content__header--title'>Reviews</h2>
        </div>
        <div className='id-content__reviews--content'>
          {movieReviews.map(({ author, content, id, url }) => (
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
    </div>
  );
};

const mapStateToProps = (state) => ({
  movieCredits: state.movie.movieCredits,
  movieTrailers: state.movie.movieTrailers,
  movieReviews: state.movie.movieReviews,
});

export default connect(mapStateToProps)(IDContent);
