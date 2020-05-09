import React from 'react';
import { connect } from 'react-redux';

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

      <div className='id-content__cast'>
        <h2 className='id-content__title'>Cast</h2>
        <div className='id-content__content'>
          <div>cast</div>
          <div>cast</div>
        </div>
      </div>
      <div className='id-content__trailers'>
        <h2 className='id-content__title'>Trailers</h2>
        <div className='id-content__trailers--content'>
          <p>content</p>
          <p>content</p>
          <p>content</p>
        </div>
      </div>
      <div className='id-content__reviews'>
        <h2 className='id-content__title'>Reviews</h2>
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
