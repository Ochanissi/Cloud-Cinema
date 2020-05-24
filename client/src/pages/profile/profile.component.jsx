import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../../components/custom-button/custom-button.component';

import { signOutSuccess } from '../../redux/user/user.actions';

import './profile.styles.scss';

class Profile extends React.Component {
  handleSignOut = (event) => {
    event.preventDefault();

    const { signOutSuccess } = this.props;

    signOutSuccess();
  };

  render() {
    return (
      <div className='profile'>
        <div className='profile__header'>
          <div className='profile__header--details'>
            <div className='profile__header--details--col-1'>
              <img
                className='profile__header--details--image'
                alt='Profile User'
                src={
                  'https://cdn4.iconfinder.com/data/icons/user-people-2/48/6-512.png'
                }
              />
              <div className='profile__header--details--content'>
                <span className='profile__header--details--content--name'>
                  Hello, Mirel Bitoi!
                </span>
                <span className='profile__header--details--content--date'>
                  <span className='profile__header--details--content--date--since'>
                    Member since{' '}
                  </span>
                  APR 15, 2016 02:08
                </span>
              </div>
            </div>
            <div className='profile__header--details--col-2'>
              <CustomButton link='/profile/settings'>Settings</CustomButton>
              <CustomButton onClick={this.handleSignOut}>Sign Out</CustomButton>
            </div>
          </div>
        </div>

        <div className='profile__stats'>TV, Movies, Collected</div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signOutSuccess: () => dispatch(signOutSuccess()),
});

export default connect(null, mapDispatchToProps)(Profile);
