import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Toast from 'light-toast';

import StatsItem from '../../components/stats-item/stats-item.component';

import CustomButton from '../../components/custom-button/custom-button.component';

import { signOutSuccess } from '../../redux/user/user.actions';

import FeaturedContainer from '../../components/featured-container/featured-container.component';

import './profile.styles.scss';

class Profile extends React.Component {
  handleSignOut = (event) => {
    event.preventDefault();

    const {
      signOutSuccess,
      currentUser: { name },
    } = this.props;

    signOutSuccess();
    Toast.success(`See you soon, ${name}!`, 1500);
  };

  render() {
    const profileContent = this.props.match.path.split('/').slice(-1)[0];

    const {
      currentUser: { name, joined },
      collection,
      watchedHistory,
      watchlist,
    } = this.props;

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
                  Hello, {name}!
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
          <div className='profile__settings'>Settings</div>
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
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Profile)
);
