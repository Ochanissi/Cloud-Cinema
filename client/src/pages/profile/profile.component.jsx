import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Toast from 'light-toast';

import StatsItem from '../../components/stats-item/stats-item.component';

import CustomButton from '../../components/custom-button/custom-button.component';

import {
  signOutSuccess,
  updateUserDataStartAsync,
} from '../../redux/user/user.actions';

import FeaturedContainer from '../../components/featured-container/featured-container.component';

import FormInput from '../../components/form-input/form-input.component';

import './profile.styles.scss';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    const { currentUser } = this.props;

    this.state = {
      name: currentUser.name,
      email: currentUser.email,
      age: currentUser.age,
      occupation: currentUser.occupation,
      country: currentUser.country,
      about: currentUser.about,
      photo: currentUser.photo,
    };
  }

  handleSignOut = (event) => {
    event.preventDefault();

    const {
      signOutSuccess,
      currentUser: { name },
    } = this.props;

    signOutSuccess();
    Toast.success(`See you soon, ${name}!`, 1500);
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, age, occupation, country, about, photo } = this.state;

    const { updateUserDataStartAsync } = this.props;

    updateUserDataStartAsync(
      name,
      email,
      age,
      occupation,
      country,
      about,
      photo
    );
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });

    // console.log({ [name]: value });
  };

  render() {
    const profileContent = this.props.match.path.split('/').slice(-1)[0];

    const {
      currentUser: { name: username, joined },
      collection,
      watchedHistory,
      watchlist,
    } = this.props;

    const { name, email, age, occupation, country, about, photo } = this.state;

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
                  Hello, {username}!
                </span>
                <span className='profile__header--details--content--date'>
                  <span className='profile__header--details--content--date--since'>
                    Member since{' '}
                  </span>
                  {joined.split('T')[0].split('-').reverse().join('/')}
                </span>
              </div>
            </div>
            <div className='profile__header--details--col-2'>
              {profileContent === 'profile' ? (
                <CustomButton profile link={'/profile/settings'}>
                  Settings
                </CustomButton>
              ) : profileContent === 'settings' ? (
                <CustomButton profile link={'/profile'}>
                  Collection
                </CustomButton>
              ) : null}
              <CustomButton profile onClick={this.handleSignOut}>
                Sign Out
              </CustomButton>
            </div>
          </div>
        </div>

        <div className='profile__stats'>
          <StatsItem icon='tv' stats={collection.length} />
          <StatsItem icon='videocam' stats={watchedHistory.length} />
          <StatsItem icon='file-tray-full-outline' stats={watchlist.length} />
        </div>

        {profileContent === 'profile' ? (
          <div className='profile__content'>
            <FeaturedContainer title='Collection' contentType={collection} />
            <FeaturedContainer
              title='Watched History'
              contentType={watchedHistory}
            />
            <FeaturedContainer title='Watchlist' contentType={watchlist} />
          </div>
        ) : profileContent === 'settings' ? (
          <div className='profile__settings'>
            <form
              className='profile__settings--form'
              onSubmit={this.handleSubmit}
            >
              <h2 className='discover-item__header'>Settings</h2>

              <FormInput
                name='name'
                type='text'
                value={name || ''}
                handleChange={this.handleChange}
                required
                label='Your name'
                placeholder='John Doe'
                maxLength='50'
              />
              <FormInput
                name='email'
                type='email'
                value={email || ''}
                handleChange={this.handleChange}
                required
                label='Email Address'
                placeholder='example@google.com'
                disabled
              />
              <FormInput
                name='age'
                type='number'
                value={age || ''}
                handleChange={this.handleChange}
                label='Age'
                placeholder='How old are you.'
                min='12'
                max='110'
              />

              <FormInput
                name='occupation'
                type='text'
                value={occupation || ''}
                handleChange={this.handleChange}
                label='Occupation'
                placeholder='What do you do for a living.'
                maxLength='50'
              />
              <FormInput
                name='country'
                type='text'
                value={country || ''}
                handleChange={this.handleChange}
                label='Country'
                placeholder='Which country you are from.'
                maxLength='50'
              />

              <div className='form__input'>
                <label className='form-input__label'>About yourself</label>
                <textarea
                  className='form-input__input'
                  name='about'
                  type='text'
                  onChange={this.handleChange}
                  placeholder='Tell us about yourself.'
                  maxLength='200'
                  rows='3'
                  value={about || ''}
                ></textarea>
              </div>

              <label className='form-input__label'>Choose new photo</label>
              <div className='form-input__photo'>
                <img
                  className='form-input__photo--image'
                  src={
                    'https://cdn4.iconfinder.com/data/icons/user-people-2/48/6-512.png'
                  }
                  alt='Current User'
                />

                <input
                  type='file'
                  id='files'
                  className='form-input__photo--text'
                  name='photo'
                  accept='image/*'
                  placeholder='••••••••'
                />
                <label
                  htmlFor='files'
                  className='custom-button custom-button__profile'
                  id='form-input__photo--btn'
                >
                  Select file
                </label>
              </div>

              <div className='profile__settings--form--btn'>
                <CustomButton type='submit'>Save settings</CustomButton>
              </div>
            </form>
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  collection: state.user.collection,
  watchedHistory: state.user.watchedHistory,
  watchlist: state.user.watchlist,
});

const mapDispatchToProps = (dispatch) => ({
  signOutSuccess: () => dispatch(signOutSuccess()),
  updateUserDataStartAsync: (
    name,
    email,
    age,
    occupation,
    country,
    about,
    photo
  ) =>
    dispatch(
      updateUserDataStartAsync(
        name,
        email,
        age,
        occupation,
        country,
        about,
        photo
      )
    ),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Profile)
);
