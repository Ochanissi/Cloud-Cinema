import React from 'react';

import './featured-item.styles.scss';

const FeaturedItem = () => (
  <div className='featured-item'>
    <img
      className='featured-item--image'
      alt='Featured Item'
      src='https://www.gstatic.com/tv/thumb/tvbanners/9181462/p9181462_b_v8_aa.jpg'
    />
    <div className='featured-item--content'>
      <div className='featured-item--content--history'>
        <ion-icon name='checkmark-circle'></ion-icon>
        <span className='featured-item--content--history--text'>
          Add to watched history
        </span>
      </div>

      <div className='featured-item--content--collection'>
        <ion-icon name='file-tray-full'></ion-icon>
      </div>
      <div className='featured-item--content--watchlist'>
        <ion-icon name='time'></ion-icon>
      </div>

      <div class='featured-item--content--like'>
        <span className='featured-item--content--rating'>90%</span>
        <div className='featured-item--content--rate'>
          <ion-icon name='heart'></ion-icon>
        </div>
      </div>
    </div>
  </div>
);

export default FeaturedItem;
