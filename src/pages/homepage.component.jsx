import React from 'react';

import Header from '../components/header/header.component';
import Controller from '../components/controller/controller.component';
import Featured from '../components/featured/featured.component';

import './homepage.styles.scss';

const HomePage = () => (
  <div className='homepage'>
    <Header />
    <Controller />
    <Featured />
  </div>
);

export default HomePage;
