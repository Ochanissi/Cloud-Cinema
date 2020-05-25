import React from 'react';
import { Link } from 'react-router-dom';

import mainLogo from '../../assets/logo.png';

import './navbar.styles.scss';

class Navbar extends React.Component {
  constructor() {
    super();

    this.state = {
      searchValue: '',
    };
  }

  handleSearch = (e) => {
    this.setState({ searchValue: e.target.value });
  };

  render() {
    // console.log(this.state.searchValue);

    return (
      <nav className='navbar'>
        <Link to='/' label='Home' alt='Logo'>
          <img src={mainLogo} alt='App Logo' className='navbar__logo' />
        </Link>

        <input id='menu-toggle' type='checkbox' />
        <label className='menu-button-container' htmlFor='menu-toggle'>
          <div className='menu-button'></div>
        </label>

        <form className='navbar__main'>
          <input
            id='searchBar'
            className='navbar__main--searchbar'
            type='text'
            placeholder='Search...'
            autocomplete='off'
            onChange={this.handleSearch}
          />
          <Link
            to={`/search/${this.state.searchValue}`}
            className='navbar__main--btn-search'
          >
            <button className='navbar__main--btn-search' type='submit'>
              <ion-icon name='search'></ion-icon>
            </button>
          </Link>
        </form>

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
            <Link to='/profile' label='Profile'>
              <ion-icon name='person-circle'></ion-icon>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
