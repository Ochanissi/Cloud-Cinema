import React from 'react';

import FeaturedItem from '../featured-item/featured-item.component';

import './featured-container.styles.scss';

const FeaturedContainer = ({ title, movieType }) => {
  console.log(movieType);

  return (
    <div className='featured__container'>
      <div className='featured__container--header'>
        <h2 className='featured__container--header--title'>{title}</h2>
        <div className='featured__container--header--arrows'>
          <span>&#10094;</span>
          <span>&#10095;</span>
        </div>
      </div>
      <div className='featured__container--content'>
        {movieType.slice(0, 5).map(({ id, ...otherProps }) => (
          <FeaturedItem key={id} {...otherProps} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedContainer;
