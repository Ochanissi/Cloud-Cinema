import React from 'react';

import './featured.styles.scss';

const Featured = () => (
  <div className='featured'>
    <div className='featured__container'>
      <h2 className='featured__container--title'>Airing Today</h2>
      <div className='featured__container--content'>
        <div>Movie</div>
        <div>Movie</div>
        <div>Movie</div>
        <div>Movie</div>
        <div>Movie</div>
      </div>
    </div>

    <div className='featured__container'>
      <h2 className='featured__container--title'>Popular</h2>
      <div className='featured__container--content'>
        <div>Movie</div>
        <div>Movie</div>
        <div>Movie</div>
        <div>Movie</div>
        <div>Movie</div>
      </div>
    </div>

    <div className='featured__container'>
      <h2 className='featured__container--title'>On the air</h2>
      <div className='featured__container--content'>
        <div>Movie</div>
        <div>Movie</div>
        <div>Movie</div>
        <div>Movie</div>
        <div>Movie</div>
      </div>
    </div>

    <div className='featured__container'>
      <h2 className='featured__container--title'>Top rated</h2>
      <div className='featured__container--content'>
        <div>Movie</div>
        <div>Movie</div>
        <div>Movie</div>
        <div>Movie</div>
        <div>Movie</div>
      </div>
    </div>
  </div>
);

export default Featured;
