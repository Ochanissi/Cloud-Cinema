import React from 'react';

import './id-item.styles.scss';

const IDItem = ({ item }) => {
  const { name, profile_path, credit_id } = item;

  return (
    <div className='id-item'>
      <a href='# ' className='id-item__image-container'>
        <img
          className='id-item__image-container--image'
          alt='Featured Item'
          src={`https://image.tmdb.org/t/p/w200${profile_path}`}
        />
      </a>
      <div className='id-item__name'>{name}</div>
    </div>
  );
};

export default IDItem;
