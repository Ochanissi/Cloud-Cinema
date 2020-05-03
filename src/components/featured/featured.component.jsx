import React from 'react';

import FeaturedItem from '../featured-item/featured-item.component';

import './featured.styles.scss';

const Featured = () => (
  <div className='featured'>
    <div className='featured__container'>
      <div className='featured__container--header'>
        <h2 className='featured__container--header--title'>Airing today</h2>
        <div className='featured__container--header--arrows'>
          <span>&#10094;</span>
          <span>&#10095;</span>
        </div>
      </div>
      <div className='featured__container--content'>
        <FeaturedItem />
        <FeaturedItem />
        <FeaturedItem />
        <FeaturedItem />
        <FeaturedItem />
      </div>
    </div>

    <div className='featured__container'>
      <div className='featured__container--header'>
        <h2 className='featured__container--header--title'>Popular</h2>
        <div className='featured__container--header--arrows'>
          <span>&#10094;</span>
          <span>&#10095;</span>
        </div>
      </div>
      <div className='featured__container--content'>
        <FeaturedItem />
        <FeaturedItem />
        <FeaturedItem />
        <FeaturedItem />
        <FeaturedItem />
      </div>
    </div>

    <div className='featured__container'>
      <div className='featured__container--header'>
        <h2 className='featured__container--header--title'>On the air</h2>
        <div className='featured__container--header--arrows'>
          <span>&#10094;</span>
          <span>&#10095;</span>
        </div>
      </div>
      <div className='featured__container--content'>
        <FeaturedItem />
        <FeaturedItem />
        <FeaturedItem />
        <FeaturedItem />
        <FeaturedItem />
      </div>
    </div>

    <div className='featured__container'>
      <div className='featured__container--header'>
        <h2 className='featured__container--header--title'>Top rated</h2>
        <div className='featured__container--header--arrows'>
          <span>&#10094;</span>
          <span>&#10095;</span>
        </div>
      </div>
      <div className='featured__container--content'>
        <FeaturedItem />
        <FeaturedItem />
        <FeaturedItem />
        <FeaturedItem />
        <FeaturedItem />
      </div>
    </div>
  </div>
);

export default Featured;
