import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Toast from 'light-toast';

import creditLogo from '../../assets/default-credit.png';

import {
  postUserWatchedStartAsync,
  deleteUserWatchedStartAsync,
  postUserCollectionStartAsync,
  deleteUserCollectionStartAsync,
  postUserWatchlistStartAsync,
  deleteUserWatchlistStartAsync,
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
        url,
        type,
        rating,
      } = this.props;

      const itemCategory = type || itemTypeDisc || itemTypeDisc || itemType;
      const itemTitle = title || name;
      const itemUrl = url || poster_path || backdrop_path;
      const itemRating = rating || vote_average || 0;

      const watchedDuplicate =
        watchedHistory.find((item) => item.id === id.toString()) || {};

      // console.log({ id, email, type, itemTitle, url, vote_average });

      watchedDuplicate.id
        ? deleteUserWatchedStartAsync(id, email)
        : postUserWatchedStartAsync(
            id,
            email,
            itemCategory,
            itemTitle,
            itemUrl,
            itemRating
          );
    } else {
      Toast.fail('Please sign in to add to watched history!', 1000);
    }
  };

  handleCollection = (event) => {
    event.preventDefault();

    const { currentUser } = this.props;

    if (currentUser) {
      const {
        postUserCollectionStartAsync,
        deleteUserCollectionStartAsync,

        collection,

        id,
        currentUser: { email },
        itemType,
        itemTypeDisc,
        title,
        name,
        poster_path,
        backdrop_path,
        vote_average,
        url,
        type,
        rating,
      } = this.props;

      const itemCategory = type || itemTypeDisc || itemTypeDisc || itemType;
      const itemTitle = title || name;
      const itemUrl = url || poster_path || backdrop_path;
      const itemRating = rating || vote_average || 0;

      const collectionDuplicate =
        collection.find((item) => item.id === id.toString()) || {};

      // console.log({ id, email, type, itemTitle, url, vote_average });

      collectionDuplicate.id
        ? deleteUserCollectionStartAsync(id, email)
        : postUserCollectionStartAsync(
            id,
            email,
            itemCategory,
            itemTitle,
            itemUrl,
            itemRating
          );
    } else {
      Toast.fail('Please sign in to add to collection!', 1000);
    }
  };

  handleWatchlist = (event) => {
    event.preventDefault();

    const { currentUser } = this.props;

    if (currentUser) {
      const {
        postUserWatchlistStartAsync,
        deleteUserWatchlistStartAsync,

        watchlist,

        id,
        currentUser: { email },
        itemType,
        itemTypeDisc,
        title,
        name,
        poster_path,
        backdrop_path,
        vote_average,
        url,
        type,
        rating,
      } = this.props;

      const itemCategory = type || itemTypeDisc || itemTypeDisc || itemType;
      const itemTitle = title || name;
      const itemUrl = url || poster_path || backdrop_path;
      const itemRating = rating || vote_average || 0;

      const watchlistDuplicate =
        watchlist.find((item) => item.id === id.toString()) || {};

      // console.log({ id, email, type, itemTitle, url, vote_average });

      watchlistDuplicate.id
        ? deleteUserWatchlistStartAsync(id, email)
        : postUserWatchlistStartAsync(
            id,
            email,
            itemCategory,
            itemTitle,
            itemUrl,
            itemRating
          );
    } else {
      Toast.fail('Please sign in to add to watchlist!', 1000);
    }
  };

  handleRate = (event) => {
    event.preventDefault();

    const { currentUser } = this.props;

    if (currentUser) {
      Toast.success('Thank you for the rating!', 1000);
    } else {
      Toast.fail('Please sign in to rate!', 1000);
    }
  };

  render() {
    const {
      currentUser,

      watchedHistory,
      collection,
      watchlist,

      vote_average,
      poster_path,
      backdrop_path,
      id: itemId,
      itemType,
      itemTypeDisc,
      discover,
      rating,
      type,
      url,
    } = this.props;

    // console.log(this.props);

    let watchedHistoryBool, collectionBool, watchlistBool;

    if (currentUser) {
      watchedHistoryBool = watchedHistory.some(
        (item) => item.id === itemId.toString()
      );
      collectionBool = collection.some((item) => item.id === itemId.toString());
      watchlistBool = watchlist.some((item) => item.id === itemId.toString());
      // console.log({ watchedHistoryBool, collectionBool, watchlistBool });
    }

    return (
      <div className='featured-item'>
        <Link
          to={`/details/${
            type || itemTypeDisc || itemTypeDisc || itemType
          }/${itemId}`}
          className='featured-item--image-container'
        >
          <img
            className={`featured-item--image ${
              discover ? 'featured-item--image--disc' : null
            }`}
            alt='Featured Item'
            src={
              url || poster_path || backdrop_path
                ? `https://image.tmdb.org/t/p/w200${
                    url || poster_path || backdrop_path
                  }`
                : creditLogo
            }
          />
        </Link>

        <div className='featured-item--content'>
          <div className='featured-item--content--history'>
            <button
              onClick={this.handleWatched}
              className={`featured-item--content--history--button ${
                watchedHistoryBool
                  ? 'featured-item--content--history--bool'
                  : 'null'
              }`}
            >
              <ion-icon name='checkmark-circle'></ion-icon>
            </button>

            <span className='featured-item--content--history--text'>
              {watchedHistoryBool ? 'Remove from' : 'Add to'} watched history
            </span>
          </div>

          <div className='featured-item--content--collection'>
            <button
              onClick={this.handleCollection}
              className={`featured-item--content--collection--button ${
                collectionBool
                  ? 'featured-item--content--collection--bool'
                  : 'null'
              }`}
            >
              <ion-icon name='file-tray-full'></ion-icon>
            </button>

            <span className='featured-item--content--collection--text'>
              {collectionBool ? 'Remove from' : 'Add to'} collection
            </span>
          </div>
          <div className='featured-item--content--watchlist'>
            <button
              onClick={this.handleWatchlist}
              className={`featured-item--content--watchlist--button ${
                watchlistBool
                  ? 'featured-item--content--watchlist--bool'
                  : 'null'
              }`}
            >
              <ion-icon name='time'></ion-icon>
            </button>

            <span className='featured-item--content--watchlist--text'>
              {watchlistBool ? 'Remove from' : 'Add to'} watchlist
            </span>
          </div>

          <div className='featured-item--content--like'>
            <span className='featured-item--content--rating'>
              {vote_average
                ? `${parseInt(vote_average * 10)}%`
                : rating
                ? `${parseInt(rating * 10)}%`
                : 'N/A'}
            </span>
            <div className='featured-item--content--rate'>
              <button
                onClick={this.handleRate}
                className='featured-item--content--rate--button'
              >
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

  collection: state.user.collection,

  watchlist: state.user.watchlist,
});

const mapDispatchToProps = (dispatch) => ({
  // User Watched
  postUserWatchedStartAsync: (id, email, type, title, url, rating) =>
    dispatch(postUserWatchedStartAsync(id, email, type, title, url, rating)),
  deleteUserWatchedStartAsync: (id, email) =>
    dispatch(deleteUserWatchedStartAsync(id, email)),

  // User Collection
  postUserCollectionStartAsync: (id, email, type, title, url, rating) =>
    dispatch(postUserCollectionStartAsync(id, email, type, title, url, rating)),
  deleteUserCollectionStartAsync: (id, email) =>
    dispatch(deleteUserCollectionStartAsync(id, email)),

  // User Watchlist
  postUserWatchlistStartAsync: (id, email, type, title, url, rating) =>
    dispatch(postUserWatchlistStartAsync(id, email, type, title, url, rating)),
  deleteUserWatchlistStartAsync: (id, email) =>
    dispatch(deleteUserWatchlistStartAsync(id, email)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedItem);
