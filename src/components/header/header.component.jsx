import React from 'react';

import './header.styles.scss';

const Header = () => (
  <div className='header'>
    <div className='header__text'>
      <span className='header__text--type'>Latest</span>
      <span className='header__text--title'>Breaking Bad</span>
      <span className='header__text--subtitle'>Drama | 7.7 Rating</span>
    </div>
  </div>
);

export default Header;
