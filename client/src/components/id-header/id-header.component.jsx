import React from 'react';

import './id-header.styles.scss';

const IDHeader = ({ itemDetails }) => {
  let {
    backdrop_path,
    poster_path,
    genres,
    title,
    tagline,
    vote_average,
    release_date,
    runtime,
    name,
    last_air_date,
    episode_run_time,
  } = itemDetails;

  console.log(itemDetails);

  if (genres)
    genres = genres
      .map((genre) => genre.name)
      .slice(0, 2)
      .join(' | ');

  let date = release_date || last_air_date;

  return (
    <div className='id-header'>
      <div className='id-header__image-container'>
        <img
          className='id-header__image-container--image'
          alt='Header Background'
          src={`https://image.tmdb.org/t/p/original${
            backdrop_path || poster_path
          }`}
        />
      </div>
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
          <span className='id-header__content--col-2--title'>
            {title || name}
          </span>
          {tagline ? (
            <span className='id-header__content--col-2--subtitle'>
              {tagline}
            </span>
          ) : null}
          <span className='id-header__content--col-2--subtitle'>{genres}</span>
          <span className='id-header__content--col-2--subtitle'>
            Release date: {date ? date.split('-').reverse().join('/') : null}
          </span>
          <div className='id-header__content--col-2--links'>
            Runtime: {runtime || episode_run_time}m | Rating:{' '}
            {vote_average * 10}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default IDHeader;
