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
    if (itemType === 'MOVIE') this.handleMovieFetch();
    if (itemType === 'TV') this.handleTVFetch();
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
      ismoviesUpcomingFetching,
      moviesPopular,
      ismoviesPopularFetching,
      moviesNowPlaying,
      ismoviesNowPlayingFetching,
      moviesTopRated,
      ismoviesTopRatedFetching,

      TVAiringToday,
      isTVAiringTodayFetching,
      TVPopular,
      isTVPopularFetching,
      TVOnTheAir,
      isTVOnTheAirFetching,
      TVTopRated,
      isTVTopRatedFetching,
    } = this.props;

    let featuredContent;
    if (itemType === 'MOVIE') {
      featuredContent = (
        <div>
          <FeaturedContainer
            isLoading={ismoviesUpcomingFetching}
            title='Upcoming'
            contentType={moviesUpcoming}
          />
          <FeaturedContainer
            isLoading={ismoviesPopularFetching}
            title='Popular'
            contentType={moviesPopular}
          />
          <FeaturedContainer
            isLoading={ismoviesNowPlayingFetching}
            title='Now Playing'
            contentType={moviesNowPlaying}
          />
          <FeaturedContainer
            isLoading={ismoviesTopRatedFetching}
            title='Top Rated'
            contentType={moviesTopRated}
          />
        </div>
      );
    }

    if (itemType === 'TV') {
      featuredContent = (
        <div>
          <FeaturedContainer
            isLoading={isTVAiringTodayFetching}
            title='Airing Today'
            contentType={TVAiringToday}
          />
          <FeaturedContainer
            isLoading={isTVPopularFetching}
            title='Popular'
            contentType={TVPopular}
          />
          <FeaturedContainer
            isLoading={isTVOnTheAirFetching}
            title='On The Air'
            contentType={TVOnTheAir}
          />
          <FeaturedContainer
            isLoading={isTVTopRatedFetching}
            title='Top Rated'
            contentType={TVTopRated}
          />
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
