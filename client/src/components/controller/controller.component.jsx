import React from 'react';
import { connect } from 'react-redux';

import { setItemType } from '../../redux/user/user.actions';

import {
  fetchMoviesUpcomingStartAsync,
  fetchMoviesPopularStartAsync,
  fetchMoviesNowPlayingStartAsync,
  fetchMoviesTopRatedStartAsync,
} from '../../redux/movie/movie.actions';

import {
  fetchTVAiringTodayStartAsync,
  fetchTVPopularStartAsync,
  fetchTVOnTheAirStartAsync,
  fetchTVTopRatedStartAsync,
} from '../../redux/tv/tv.actions';

import './controller.styles.scss';

class Controller extends React.Component {
  handleMovieFetch = () => {
    const {
      fetchMoviesUpcomingStartAsync,
      fetchMoviesPopularStartAsync,
      fetchMoviesNowPlayingStartAsync,
      fetchMoviesTopRatedStartAsync,
    } = this.props;

    fetchMoviesUpcomingStartAsync();
    fetchMoviesPopularStartAsync();
    fetchMoviesNowPlayingStartAsync();
    fetchMoviesTopRatedStartAsync();
  };

  handleTVFetch = () => {
    const {
      fetchTVAiringTodayStartAsync,
      fetchTVPopularStartAsync,
      fetchTVOnTheAirStartAsync,
      fetchTVTopRatedStartAsync,
    } = this.props;

    fetchTVAiringTodayStartAsync();
    fetchTVPopularStartAsync();
    fetchTVOnTheAirStartAsync();
    fetchTVTopRatedStartAsync();
  };

  render() {
    const { itemType, setItemType } = this.props;
    return (
      <div className='controller'>
        <button
          className={`controller__btn controller__movies ${
            itemType === 'movie' ? 'controller__btn--selected' : null
          }`}
          onClick={() => {
            setItemType('movie');
            this.handleMovieFetch();
          }}
        >
          Movies
        </button>
        <button
          className={`controller__btn controller__shows ${
            itemType === 'tv' ? 'controller__btn--selected' : null
          }`}
          onClick={() => {
            setItemType('tv');
            this.handleTVFetch();
          }}
        >
          TV Shows
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  itemType: state.user.itemType,
});

const mapDispatchToProps = (dispatch) => ({
  setItemType: (itemType) => dispatch(setItemType(itemType)),

  fetchMoviesUpcomingStartAsync: () =>
    dispatch(fetchMoviesUpcomingStartAsync()),
  fetchMoviesPopularStartAsync: () => dispatch(fetchMoviesPopularStartAsync()),
  fetchMoviesNowPlayingStartAsync: () =>
    dispatch(fetchMoviesNowPlayingStartAsync()),
  fetchMoviesTopRatedStartAsync: () =>
    dispatch(fetchMoviesTopRatedStartAsync()),

  fetchTVAiringTodayStartAsync: () => dispatch(fetchTVAiringTodayStartAsync()),
  fetchTVPopularStartAsync: () => dispatch(fetchTVPopularStartAsync()),
  fetchTVOnTheAirStartAsync: () => dispatch(fetchTVOnTheAirStartAsync()),
  fetchTVTopRatedStartAsync: () => dispatch(fetchTVTopRatedStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Controller);
