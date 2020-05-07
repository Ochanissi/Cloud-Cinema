import React from 'react';

import './id-header.styles.scss';

const IDHeader = () => {
  return (
    <div className='id-header'>
      <img
        className='id-header__image-container--image'
        alt='Header Background'
        src={`https://images.unsplash.com/photo-1588582212722-046cddf21fb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80`}
      />
      <div className='id-header__content'>
        <div className='id-header__content--col-1'>
          <img
            className='id-header__content--col-1--image'
            alt='Featured Item'
            src={`https://images.unsplash.com/photo-1588818542141-ccc9fdd28211?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=638&q=80`}
          />
        </div>
        <div className='id-header__content--col-2'>
          <span className='id-header__content--col-2--title'>Name</span>
          <span className='id-header__content--col-2--subtitle'>
            {'Generic'} | {69}% Rating
          </span>
          <span className='id-header__content--col-2--type'>Playing now</span>
        </div>
      </div>
    </div>
  );
};

export default IDHeader;
