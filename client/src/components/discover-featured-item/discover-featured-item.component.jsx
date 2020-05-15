import React from 'react';

import './discover-featured-item.styles.scss';

const DiscoverFeaturedItem = ({ name, icon, image }) => {
  return (
    <div className='discover__featured--item'>
      <img
        className='discover__featured--item--image'
        alt='Featured Background'
        src={`https://image.tmdb.org/t/p/w400${image}`}
      />
      <div className='discover__featured--item--content'>
        <ion-icon name={icon}></ion-icon>
        <span className='discover__featured--item--content--title'>{name}</span>
      </div>
    </div>
  );
};

export default DiscoverFeaturedItem;
