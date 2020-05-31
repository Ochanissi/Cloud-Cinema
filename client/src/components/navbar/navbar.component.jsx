import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import mainLogo from '../../assets/logo.png';
import defaultLogo from '../../assets/default.png';

import './navbar.styles.scss';

class Navbar extends React.Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      searchValue: '',
    };
  }

  handleSearch = (e) => {
    this.setState({ searchValue: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.history.push(`/search/${this.state.searchValue}`);

    this.setState({ searchValue: '' });

    //   <Link
    //   to={`/search/${this.state.searchValue}`}
    //   className='navbar__main--btn-search'
    // ></Link>
  };

  render() {
    const { currentUser } = this.props;
    const { searchValue } = this.state;

    return (
      <nav className='navbar'>
        <Link to='/' label='Home' alt='Logo'>
          <img src={mainLogo} alt='App Logo' className='navbar__logo' />
        </Link>

        <input id='menu-toggle' type='checkbox' />
        <label className='menu-button-container' htmlFor='menu-toggle'>
          <div className='menu-button'></div>
        </label>

        <form onSubmit={this.handleSubmit} className='navbar__main'>
          <input
            id='searchBar'
            className='navbar__main--searchbar'
            type='text'
            placeholder='Search...'
            autoComplete='off'
            onChange={this.handleSearch}
            value={searchValue}
          />
          <button
            className='navbar__main--btn-search'
            type='submit'
            value='Submit'
          >
            <ion-icon name='search'></ion-icon>
          </button>
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
              {currentUser ? (
                <img
                  src={defaultLogo}
                  alt='User Profile'
                  className='navbar__secondary--logo'
                />
              ) : (
                <ion-icon name='person-circle'></ion-icon>
              )}
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default withRouter(connect(mapStateToProps)(Navbar));
