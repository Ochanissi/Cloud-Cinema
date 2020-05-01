import React from 'react';

import './featured-item.styles.scss';

const FeaturedItem = () => (
  <div className='featured-item'>
    <a href='# ' className='featured-item--image-container'>
      <img
        className='featured-item--image'
        alt='Featured Item'
        src='https://www.gstatic.com/tv/thumb/tvbanners/9181462/p9181462_b_v8_aa.jpg'
      />
    </a>

    <div className='featured-item--content'>
      <div className='featured-item--content--history'>
        <a href='# ' className='featured-item--content--history--button'>
          <ion-icon name='checkmark-circle'></ion-icon>
        </a>

        <span className='featured-item--content--history--text'>
          Add to watched history
        </span>
      </div>

      <div className='featured-item--content--collection'>
        <a href='# ' className='featured-item--content--collection--button'>
          <ion-icon name='file-tray-full'></ion-icon>
        </a>

        <span className='featured-item--content--collection--text'>
          Add to collection
        </span>
      </div>
      <div className='featured-item--content--watchlist'>
        <a href='# ' className='featured-item--content--watchlist--button'>
          <ion-icon name='time'></ion-icon>
        </a>

        <span className='featured-item--content--watchlist--text'>
          Add to watchlist
        </span>
      </div>

      <div className='featured-item--content--like'>
        <span className='featured-item--content--rating'>90%</span>
        <div className='featured-item--content--rate'>
          <a href='# ' className='featured-item--content--rate--button'>
            <ion-icon name='heart'></ion-icon>
          </a>
          <span className='featured-item--content--rate--text'>Rate this</span>
        </div>
      </div>
    </div>
  </div>
);

export default FeaturedItem;
