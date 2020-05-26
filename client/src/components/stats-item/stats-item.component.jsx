import React from 'react';

import './stats-item.styles.scss';

const StatsItem = ({ icon, stats }) => {
  const firstRow = icon === 'tv' ? 120 : icon === 'videocam' ? 42 : 60;
  const secondRow =
    icon === 'tv'
      ? 'movies'
      : icon === 'videocam'
      ? 'TV shows'
      : 'movies collected';

  return (
    <div className='stats-item'>
      <ion-icon name={icon}></ion-icon>
      <div className='stats-item__content'>
        <span className='stats-item__content--row-1'>
          {`${(firstRow * stats) / 60} hours of watch time.`}
        </span>
        <span className='stats-item__content--row-2'>{`${stats} ${secondRow}.`}</span>
      </div>
    </div>
  );
};

export default StatsItem;
