import React from 'react';

import FeaturedItem from '../featured-item/featured-item.component';

import './featured.styles.scss';

const Featured = () => (
  <div className='featured'>
    <div className='featured__container'>
      <h2 className='featured__container--title'>Airing Today</h2>
      <div className='featured__container--content'>
        <FeaturedItem />
        <FeaturedItem />
        <FeaturedItem />
        <FeaturedItem />
        <FeaturedItem />
      </div>
    </div>

    <div className='featured__container'>
      <h2 className='featured__container--title'>Popular</h2>
      <div className='featured__container--content'>
        <FeaturedItem />
        <FeaturedItem />
        <FeaturedItem />
        <FeaturedItem />
        <FeaturedItem />
      </div>
    </div>

    <div className='featured__container'>
      <h2 className='featured__container--title'>On the air</h2>
      <div className='featured__container--content'>
        <FeaturedItem />
        <FeaturedItem />
        <FeaturedItem />
        <FeaturedItem />
        <FeaturedItem />
      </div>
    </div>

    <div className='featured__container'>
      <h2 className='featured__container--title'>Top rated</h2>
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
