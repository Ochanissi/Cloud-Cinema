import React from 'react';

import mainLogo from '../../assets/logo.png';

import './navbar.styles.scss';

const Navbar = () => (
  <nav class='navbar'>
    <a href=' #' alt='Logo'>
      <img src={mainLogo} alt='App Logo' className='navbar__logo' />
    </a>

    <input id='menu-toggle' type='checkbox' />
    <label class='menu-button-container' for='menu-toggle'>
      <div class='menu-button'></div>
    </label>

    <div class='navbar__main'>KEK</div>

    <ul class='navbar__secondary'>
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
