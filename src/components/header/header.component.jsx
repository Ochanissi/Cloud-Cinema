import React from 'react';
import { connect } from 'react-redux';

import './header.styles.scss';

class Header extends React.Component {
  render() {
    const { itemType, moviesNowPlaying, TVAiringToday } = this.props;

    let backgroundItem;

    if (itemType === 'MOVIE')
      backgroundItem =
        moviesNowPlaying[Math.floor(Math.random() * moviesNowPlaying.length)] ||
        {};

    if (itemType === 'TV')
      backgroundItem =
        TVAiringToday[Math.floor(Math.random() * TVAiringToday.length)] || {};

    // console.log(backgroundItem.title);
    return (
      <div className='header'>
        <a href='# ' className='header__image-container'>
          <img
            className='header__image-container--image'
            alt='Header Background'
            src={`https://image.tmdb.org/t/p/original${backgroundItem.backdrop_path}`}
          />
        </a>
        <div className='header__text'>
          <span className='header__text--type'>Latest</span>
          <span className='header__text--title'>
            {backgroundItem.title || backgroundItem.name}
          </span>
          <span className='header__text--subtitle'>
            {backgroundItem.release_date} | {backgroundItem.vote_average * 10}%
            Rating
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  itemType: state.user.itemType,

  ismoviesNowPlayingFetching: state.movie.ismoviesNowPlayingFetching,
  moviesNowPlaying: state.movie.moviesNowPlaying,

  isTVOnTheAirFetching: state.tv.isTVOnTheAirFetching,
  TVAiringToday: state.tv.TVAiringToday,
});

export default connect(mapStateToProps)(Header);
