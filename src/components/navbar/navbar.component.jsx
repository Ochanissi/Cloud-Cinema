import React from 'react';

import mainLogo from '../../assets/logo.png';

import './navbar.styles.scss';

const Navbar = () => (
  <nav className='navbar'>
    <a href=' #' alt='Logo'>
      <img src={mainLogo} alt='App Logo' className='navbar__logo' />
    </a>

    <input id='menu-toggle' type='checkbox' />
    <label className='menu-button-container' htmlFor='menu-toggle'>
      <div className='menu-button'></div>
    </label>

    <div className='navbar__main'>
      <input
        id='searchBar'
        className='navbar__main--searchbar'
        type='text'
        placeholder='Search...'
      />
      <a href=' #' id='btnSearch' className='navbar__main--btn-search'>
        <ion-icon name='search'></ion-icon>
      </a>
    </div>

    <ul className='navbar__secondary'>
      <li>
        <a href=' #'>
          <ion-icon name='home'></ion-icon>
        </a>
      </li>
      <li>
        <a href=' #'>
          <ion-icon name='compass'></ion-icon>
        </a>
      </li>
      <li>
        <a href=' #'>
          <ion-icon name='person-circle'></ion-icon>
        </a>
      </li>
    </ul>
  </nav>
);

export default Navbar;
