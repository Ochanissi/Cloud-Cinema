import React from 'react';
import { Link } from 'react-router-dom';

import mainLogo from '../../assets/logo.png';
import { ReactComponent as TMDBLogo } from '../../assets/tmdb-logo.svg';

import './footer.styles.scss';

const Footer = () => (
  <div className='footer'>
    <div className='footer__col-1'>
      <h2 className='footer__col-1--title'>Cloud Cinema</h2>
      <div className='footer__col-1--subtitle'>
        <Link to='/' label='Home'>
          Home
        </Link>
        <Link to='/discover' label='Discover'>
          Discover
        </Link>
        <Link to='/profile' label='Profile'>
          Profile
        </Link>
      </div>
      <div className='footer__col-1--copyright'>
        Copyright &copy; 2020{' '}
        <span className='footer__col-1--copyright--name'>
          <a
            href='https://github.com/Ochanissi/'
            target='_blank'
            rel='noopener noreferrer'
            className='footer__col-1--copyright--link'
          >
            Mirel Bițoi
          </a>
        </span>
        .{' '}
        <span className='footer__col-1--copyright--rights'>
          All rights reserved.
        </span>
      </div>
    </div>

    <div className='footer__col-2'>
      <Link to='/' label='Home'>
        <img src={mainLogo} alt='App Logo' className='footer__col-2--logo' />
      </Link>
      <a
        href='https://developers.themoviedb.org/3'
        target='_blank'
        rel='noopener noreferrer'
      >
        <TMDBLogo className='footer__col-2--logo' />
      </a>
    </div>

    <div className='footer__links'>
      <a href='mailto:mirelalex2094@gmail.com' className='btn btn__contact'>
        <ion-icon name='mail'></ion-icon>
      </a>
      <a
        href='https://github.com/Ochanissi/'
        target='_blank'
        rel='noopener noreferrer'
        className='btn btn__contact'
      >
        <ion-icon name='logo-github'></ion-icon>
      </a>
      <a
        href='https://edabit.com/user/zTZtM9jRsu8eXie6s'
        target='_blank'
        rel='noopener noreferrer'
        className='btn btn__contact'
      >
        <ion-icon name='logo-codepen'></ion-icon>
      </a>
      <a
        href='https://www.linkedin.com/in/mirel-alex-2a74b217b/'
        target='_blank'
        rel='noopener noreferrer'
        className='btn btn__contact'
      >
        <ion-icon name='logo-linkedin'></ion-icon>
      </a>
    </div>
  </div>
);

export default Footer;
