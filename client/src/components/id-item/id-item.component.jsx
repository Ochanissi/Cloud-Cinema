import React from 'react';

import castLogo from '../../assets/default-cast.png';

import './id-item.styles.scss';

const IDItem = ({ item }) => {
  const { name, profile_path } = item;
  return (
    <div className='id-item'>
      <a href='# ' className='id-item__image-container'>
        <img
          className='id-item__image-container--image'
          alt='Featured Item'
          src={
            profile_path
              ? `https://image.tmdb.org/t/p/w200${profile_path}`
              : castLogo
          }
        />
      </a>
      <div className='id-item__name'>{name}</div>
    </div>
  );
};

export default IDItem;
