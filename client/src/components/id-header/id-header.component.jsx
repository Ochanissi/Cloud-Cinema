import React from 'react';

import { useMediaQuery } from 'react-responsive';

import castLogo from '../../assets/default-cast.png';
import creditLogo from '../../assets/default-credit.png';
import peopleBackground from '../../assets/default-people.png';

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
    profile_path,
    known_for_department,
    birthday,
    place_of_birth,
  } = itemDetails;

  // console.log(backdrop_path);

  // console.log(itemDetails);

  if (genres)
    genres = genres
      .map((genre) => genre.name)
      .slice(0, 2)
      .join(' | ');

  let date = release_date || last_air_date;

  const mediaLarge = useMediaQuery({ maxDeviceWidth: 1300 });

  const imageSize = mediaLarge ? 'w780' : 'w1280';

  return (
    <div className='id-header'>
      <div className='id-header__image-container'>
        <img
          className='id-header__image-container--image'
          alt='Header Background'
          src={
            backdrop_path || poster_path
              ? `https://image.tmdb.org/t/p/${imageSize}${
                  backdrop_path || poster_path
                }`
              : peopleBackground
          }
        />
      </div>
      <div className='id-header__content'>
        <div className='id-header__content--col-1'>
          <img
            className='id-header__content--col-1--image'
            alt='Featured Item'
            src={
              poster_path || backdrop_path || profile_path
                ? `https://image.tmdb.org/t/p/w200${
                    poster_path || backdrop_path || profile_path
                  }`
                : title
                ? creditLogo
                : castLogo
            }
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
          <span className='id-header__content--col-2--subtitle'>
            {genres || `Known for: ${known_for_department}`}
          </span>
          <span className='id-header__content--col-2--subtitle'>
            {date
              ? `Release date: ${
                  date ? date.split('-').reverse().join('/') : null
                }`
              : birthday
              ? `Date of birth: ${
                  birthday ? birthday.split('-').reverse().join('/') : null
                }`
              : null}
          </span>
          <div className='id-header__content--col-2--links'>
            {place_of_birth
              ? `Place of birth: ${place_of_birth}`
              : runtime || episode_run_time
              ? `Runtime: ${
                  runtime || episode_run_time.join('m / ')
                }m | Rating: ${vote_average * 10}%`
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IDHeader;
