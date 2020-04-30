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
      <ion-icon name='checkmark-circle'></ion-icon>
      <ion-icon name='file-tray-full'></ion-icon>
      <ion-icon name='time'></ion-icon>
      <ion-icon name='heart'></ion-icon>
      <span>90%</span>
    </div>
  </div>
);

export default FeaturedItem;
