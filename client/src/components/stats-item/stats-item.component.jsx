import React from 'react';

import './stats-item.styles.scss';

const StatsItem = ({ icon }) => {
  return (
    <div className='stats-item'>
      <ion-icon name={icon}></ion-icon>
      <div className='stats-item__content'>
        <span className='stats-item__content--row-1'>
          177 days, 11 hours, 8 mins watching
        </span>
        <span className='stats-item__content--row-2'>94 movies watched</span>
      </div>
    </div>
  );
};

export default StatsItem;
