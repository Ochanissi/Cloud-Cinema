import React from 'react';
import { connect } from 'react-redux';

import { fetchMoviesGenreStartAsync } from '../../redux/movie/movie.actions';
import { fetchTVGenreStartAsync } from '../../redux/tv/tv.actions';

import './header.styles.scss';

class Header extends React.Component {
  componentDidMount() {
    const { fetchMoviesGenreStartAsync, fetchTVGenreStartAsync } = this.props;
    fetchMoviesGenreStartAsync();
    fetchTVGenreStartAsync();
  }

  handleBackgroundItem = () => {
    const {
      itemType,
      moviesNowPlaying,
      moviesGenre,
      TVAiringToday,
      TVGenre,
    } = this.props;

    let backgroundItem;

    if (itemType === 'MOVIE') {
      backgroundItem =
        moviesNowPlaying[Math.floor(Math.random() * moviesNowPlaying.length)] ||
        {};

      if (backgroundItem.genre_ids && moviesGenre) {
        backgroundItem.genre_ids = backgroundItem.genre_ids.map((genre) =>
          moviesGenre.filter((x) => x.id === genre).map((x) => x.name)
        )[0];
      }
    }

    if (itemType === 'TV') {
      backgroundItem =
        TVAiringToday[Math.floor(Math.random() * TVAiringToday.length)] || {};

      if (backgroundItem.genre_ids && TVGenre) {
        backgroundItem.genre_ids = backgroundItem.genre_ids.map((genre) =>
          TVGenre.filter((x) => x.id === genre).map((x) => x.name)
        )[0];
      }
    }

    return backgroundItem;
  };

  render() {
    const backgroundItem = this.handleBackgroundItem();

    return (
      <div className='header'>
        <a href='# ' className='header__image-container'>
          <img
            className='header__image-container--image'
            alt='Header Background'
            src={`https://image.tmdb.org/t/p/original${
              backgroundItem.backdrop_path || backgroundItem.poster_path
            }`}
          />
        </a>
        <div className='header__text'>
          <span className='header__text--type'>Playing now</span>
          <span className='header__text--title'>
            {backgroundItem.title || backgroundItem.name}
          </span>
          <span className='header__text--subtitle'>
            {backgroundItem.genre_ids} | {backgroundItem.vote_average * 10}%
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
  moviesGenre: state.movie.moviesGenre,
  ismoviesGenreFetching: state.movie.ismoviesGenreFetching,

  isTVOnTheAirFetching: state.tv.isTVOnTheAirFetching,
  TVAiringToday: state.tv.TVAiringToday,
  TVGenre: state.tv.TVGenre,
  isTVGenreFetching: state.tv.isTVGenreFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMoviesGenreStartAsync: () => dispatch(fetchMoviesGenreStartAsync()),
  fetchTVGenreStartAsync: () => dispatch(fetchTVGenreStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
