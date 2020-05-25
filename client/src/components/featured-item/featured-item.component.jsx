import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Toast from 'light-toast';

import creditLogo from '../../assets/default-credit.png';

import {
  postUserWatchedStartAsync,
  deleteUserWatchedStartAsync,
} from '../../redux/user/user.actions';

import './featured-item.styles.scss';

class FeaturedItem extends React.Component {
  handleWatched = (event) => {
    event.preventDefault();

    const { currentUser } = this.props;

    if (currentUser) {
      const {
        postUserWatchedStartAsync,
        deleteUserWatchedStartAsync,

        watchedHistory,

        id,
        currentUser: { email },
        itemType,
        itemTypeDisc,
        title,
        name,
        poster_path,
        backdrop_path,
        vote_average,
      } = this.props;

      const type = itemTypeDisc || itemType;
      const itemTitle = title || name;
      const url = poster_path || backdrop_path;

      // console.log(watchedHistory);

      const watchedDuplicate =
        watchedHistory.find((item) => item.id === id.toString()) || {};

      // console.log({ id, email, type, itemTitle, url, vote_average });

      // deleteUserWatchedStartAsync(id);

      // console.log(watchedDuplicate.id);

      watchedDuplicate.id
        ? deleteUserWatchedStartAsync(id)
        : postUserWatchedStartAsync(
            id,
            email,
            type,
            itemTitle,
            url,
            vote_average
          );
    } else {
      Toast.fail('Please sign in to add to watched history!', 1000);
    }
  };

  render() {
    const {
      vote_average,
      poster_path,
      backdrop_path,
      id: itemId,
      itemType,
      itemTypeDisc,
      discover,
    } = this.props;

    return (
      <div className='featured-item'>
        <Link
          to={`/details/${
            itemTypeDisc ? itemTypeDisc.toLowerCase() : itemType.toLowerCase()
          }/${itemId}`}
          className='featured-item--image-container'
        >
          <img
            className={`featured-item--image ${
              discover ? 'featured-item--image--disc' : null
            }`}
            alt='Featured Item'
            src={
              poster_path || backdrop_path
                ? `https://image.tmdb.org/t/p/w200${
                    poster_path || backdrop_path
                  }`
                : creditLogo
            }
          />
        </Link>

        <div className='featured-item--content'>
          <div className='featured-item--content--history'>
            <button
              onClick={this.handleWatched}
              className='featured-item--content--history--button'
            >
              <ion-icon name='checkmark-circle'></ion-icon>
            </button>

            <span className='featured-item--content--history--text'>
              Add to watched history
            </span>
          </div>

          <div className='featured-item--content--collection'>
            <button className='featured-item--content--collection--button'>
              <ion-icon name='file-tray-full'></ion-icon>
            </button>

            <span className='featured-item--content--collection--text'>
              Add to collection
            </span>
          </div>
          <div className='featured-item--content--watchlist'>
            <button className='featured-item--content--watchlist--button'>
              <ion-icon name='time'></ion-icon>
            </button>

            <span className='featured-item--content--watchlist--text'>
              Add to watchlist
            </span>
          </div>

          <div className='featured-item--content--like'>
            <span className='featured-item--content--rating'>
              {vote_average ? `${vote_average * 10}%` : 'N/A'}
            </span>
            <div className='featured-item--content--rate'>
              <button className='featured-item--content--rate--button'>
                <ion-icon name='heart'></ion-icon>
              </button>
              <span className='featured-item--content--rate--text'>
                Rate this
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  itemType: state.user.itemType,

  currentUser: state.user.currentUser,

  watchedHistory: state.user.watchedHistory,
});

const mapDispatchToProps = (dispatch) => ({
  postUserWatchedStartAsync: (id, email, type, itemTitle, url, vote_average) =>
    dispatch(
      postUserWatchedStartAsync(id, email, type, itemTitle, url, vote_average)
    ),
  deleteUserWatchedStartAsync: (id) =>
    dispatch(deleteUserWatchedStartAsync(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedItem);
