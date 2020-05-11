import React from 'react';

import './id-header.styles.scss';

const IDHeader = ({ movieDetails }) => {
  let {
    backdrop_path,
    poster_path,
    genres,
    title,
    tagline,
    vote_average,
    release_date,
    runtime,
  } = movieDetails;

  console.log(movieDetails);

  if (genres)
    genres = genres
      .map((genre) => genre.name)
      .slice(0, 2)
      .join(' | ');

  return (
    <div className='id-header'>
      <img
        className='id-header__image-container--image'
        alt='Header Background'
        src={`https://image.tmdb.org/t/p/original${
          backdrop_path || poster_path
        }`}
      />
      <div className='id-header__content'>
        <div className='id-header__content--col-1'>
          <img
            className='id-header__content--col-1--image'
            alt='Featured Item'
            src={`https://image.tmdb.org/t/p/w200${
              poster_path || backdrop_path
            }`}
          />
        </div>
        <div className='id-header__content--col-2'>
          <span className='id-header__content--col-2--title'>{title}</span>
          <span className='id-header__content--col-2--subtitle'>{tagline}</span>
          <span className='id-header__content--col-2--subtitle'>{genres}</span>
          <span className='id-header__content--col-2--subtitle'>
            Release date:{' '}
            {release_date ? release_date.split('-').reverse().join('/') : null}
          </span>
          <div className='id-header__content--col-2--links'>
            Runtime: {runtime}m | Rating: {vote_average * 10}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default IDHeader;
