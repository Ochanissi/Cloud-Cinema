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

  handleGenres = () => {};

  handleBackgroundItem = () => {
    const { itemType, moviesNowPlaying, TVAiringToday } = this.props;

    let backgroundItem;

    if (itemType === 'MOVIE')
      backgroundItem =
        moviesNowPlaying[Math.floor(Math.random() * moviesNowPlaying.length)] ||
        {};

    if (itemType === 'TV')
      backgroundItem =
        TVAiringToday[Math.floor(Math.random() * TVAiringToday.length)] || {};

    return backgroundItem;
  };

  render() {
    const backgroundItem = this.handleBackgroundItem();

    const { moviesGenre, moviesNowPlaying, ismoviesGenreFetching } = this.props;

    console.log(ismoviesGenreFetching);

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
  moviesGenre: state.movie.moviesGenre,
  ismoviesGenreFetching: state.movie.ismoviesGenreFetching,

  isTVOnTheAirFetching: state.tv.isTVOnTheAirFetching,
  TVAiringToday: state.tv.TVAiringToday,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMoviesGenreStartAsync: () => dispatch(fetchMoviesGenreStartAsync()),
  fetchTVGenreStartAsync: () => dispatch(fetchTVGenreStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
