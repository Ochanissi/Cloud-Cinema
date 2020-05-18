import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import creditLogo from '../../assets/default-credit.png';

import './featured-item.styles.scss';

const FeaturedItem = ({
  vote_average,
  poster_path,
  backdrop_path,
  id: itemId,
  itemType,
  itemTypeDisc,
  discover,
}) => {
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
              ? `https://image.tmdb.org/t/p/w200${poster_path || backdrop_path}`
              : creditLogo
          }
        />
      </Link>

      <div className='featured-item--content'>
        <div className='featured-item--content--history'>
          <a href='# ' className='featured-item--content--history--button'>
            <ion-icon name='checkmark-circle'></ion-icon>
          </a>

          <span className='featured-item--content--history--text'>
            Add to watched history
          </span>
        </div>

        <div className='featured-item--content--collection'>
          <a href='# ' className='featured-item--content--collection--button'>
            <ion-icon name='file-tray-full'></ion-icon>
          </a>

          <span className='featured-item--content--collection--text'>
            Add to collection
          </span>
        </div>
        <div className='featured-item--content--watchlist'>
          <a href='# ' className='featured-item--content--watchlist--button'>
            <ion-icon name='time'></ion-icon>
          </a>

          <span className='featured-item--content--watchlist--text'>
            Add to watchlist
          </span>
        </div>

        <div className='featured-item--content--like'>
          <span className='featured-item--content--rating'>
            {vote_average ? `${vote_average * 10}%` : 'N/A'}
          </span>
          <div className='featured-item--content--rate'>
            <a href='# ' className='featured-item--content--rate--button'>
              <ion-icon name='heart'></ion-icon>
            </a>
            <span className='featured-item--content--rate--text'>
              Rate this
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  itemType: state.user.itemType,
});

export default connect(mapStateToProps)(FeaturedItem);
