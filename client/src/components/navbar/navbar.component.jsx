import React from 'react';
import { Link } from 'react-router-dom';

import mainLogo from '../../assets/logo.png';

import './navbar.styles.scss';

const Navbar = () => (
  <nav className='navbar'>
    <Link to='/' label='Home' alt='Logo'>
      <img src={mainLogo} alt='App Logo' className='navbar__logo' />
    </Link>

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
        <Link to='/' label='Home'>
          <ion-icon name='home'></ion-icon>
        </Link>
      </li>
      <li>
        <Link to='/discover' label='Discover'>
          <ion-icon name='compass'></ion-icon>
        </Link>
      </li>
      <li>
        <Link to='/account' label='Profile'>
          <ion-icon name='person-circle'></ion-icon>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
