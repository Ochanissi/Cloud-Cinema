import React from 'react';
import { Link } from 'react-router-dom';

import castLogo from '../../assets/default-cast.png';
import creditLogo from '../../assets/default-credit.png';

import './id-item.styles.scss';

const IDItem = ({ item, itemType }) => {
  const { name, profile_path, poster_path, title, id } = item;

  return (
    <div className='id-item'>
      <Link
        to={`/details/${itemType.toLowerCase()}/${id}`}
        className='id-item__image-container'
      >
        <img
          className='id-item__image-container--image'
          alt='Featured Item'
          src={
            profile_path || poster_path
              ? `https://image.tmdb.org/t/p/w200${profile_path || poster_path}`
              : title
              ? creditLogo
              : castLogo
          }
        />
      </Link>
      <div className='id-item__name'>{name || title}</div>
    </div>
  );
};

export default IDItem;
