import React from 'react';
import { connect } from 'react-redux';

import FeaturedContainer from '../featured-container/featured-container.component';

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

import './featured.styles.scss';

class Featured extends React.Component {
  componentDidMount() {
    const { itemType } = this.props;
    if (itemType === 'movie') this.handleMovieFetch();
    if (itemType === 'tv') this.handleTVFetch();
  }

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
    const { itemType } = this.props;

    const {
      moviesUpcoming,
      moviesPopular,
      moviesNowPlaying,
      moviesTopRated,

      TVAiringToday,
      TVPopular,
      TVOnTheAir,
      TVTopRated,
    } = this.props;

    let featuredContent;
    if (itemType === 'movie') {
      featuredContent = (
        <div>
          <FeaturedContainer title='Upcoming' contentType={moviesUpcoming} />
          <FeaturedContainer title='Popular' contentType={moviesPopular} />
          <FeaturedContainer
            title='Now Playing'
            contentType={moviesNowPlaying}
          />
          <FeaturedContainer title='Top Rated' contentType={moviesTopRated} />
        </div>
      );
    }

    if (itemType === 'tv') {
      featuredContent = (
        <div>
          <FeaturedContainer title='Airing Today' contentType={TVAiringToday} />
          <FeaturedContainer title='Popular' contentType={TVPopular} />
          <FeaturedContainer title='On The Air' contentType={TVOnTheAir} />
          <FeaturedContainer title='Top Rated' contentType={TVTopRated} />
        </div>
      );
    }

    return <div className='featured'>{featuredContent}</div>;
  }
}

const mapStateToProps = (state) => ({
  itemType: state.user.itemType,

  ismoviesUpcomingFetching: state.movie.ismoviesUpcomingFetching,
  moviesUpcoming: state.movie.moviesUpcoming,
  ismoviesPopularFetching: state.movie.ismoviesPopularFetching,
  moviesPopular: state.movie.moviesPopular,
  ismoviesNowPlayingFetching: state.movie.ismoviesNowPlayingFetching,
  moviesNowPlaying: state.movie.moviesNowPlaying,
  ismoviesTopRatedFetching: state.movie.ismoviesTopRatedFetching,
  moviesTopRated: state.movie.moviesTopRated,

  isTVAiringTodayFetching: state.tv.isTVAiringTodayFetching,
  TVAiringToday: state.tv.TVAiringToday,
  isTVPopularFetching: state.tv.isTVPopularFetching,
  TVPopular: state.tv.TVPopular,
  isTVOnTheAirFetching: state.tv.isTVOnTheAirFetching,
  TVOnTheAir: state.tv.TVOnTheAir,
  isTVTopRatedFetching: state.tv.isTVTopRatedFetching,
  TVTopRated: state.tv.TVTopRated,
});

const mapDispatchToProps = (dispatch) => ({
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

export default connect(mapStateToProps, mapDispatchToProps)(Featured);
