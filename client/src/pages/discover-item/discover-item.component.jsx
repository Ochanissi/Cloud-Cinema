import React from 'react';
import { connect } from 'react-redux';

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

import FeaturedItem from '../../components/featured-item/featured-item.component';

import './discover-item.styles.scss';

class DiscoverItem extends React.Component {
  componentDidMount() {
    const { type: itemType } = this.props.match.params;

    if (itemType === 'movie') return this.handleMovieFetch();
    if (itemType === 'tv') return this.handleTVFetch();
  }

  handleMovieFetch = () => {
    const { id: itemId } = this.props.match.params;

    const {
      fetchMoviesUpcomingStartAsync,
      fetchMoviesPopularStartAsync,
      fetchMoviesNowPlayingStartAsync,
      fetchMoviesTopRatedStartAsync,
    } = this.props;

    if (itemId === 'upcoming') return fetchMoviesUpcomingStartAsync();
    if (itemId === 'popular') return fetchMoviesPopularStartAsync();
    if (itemId === 'now-playing') return fetchMoviesNowPlayingStartAsync();
    if (itemId === 'top-rated') return fetchMoviesTopRatedStartAsync();
  };

  handleTVFetch = () => {
    const { id: itemId } = this.props.match.params;

    const {
      fetchTVAiringTodayStartAsync,
      fetchTVPopularStartAsync,
      fetchTVOnTheAirStartAsync,
      fetchTVTopRatedStartAsync,
    } = this.props;

    if (itemId === 'airing-today') return fetchTVAiringTodayStartAsync();
    if (itemId === 'popular') return fetchTVPopularStartAsync();
    if (itemId === 'on-the-air') return fetchTVOnTheAirStartAsync();
    if (itemId === 'top-rated') return fetchTVTopRatedStartAsync();
  };

  handleItemContent = () => {
    const { id: itemId, type: itemType } = this.props.match.params;

    const itemHash = `${itemType} ${itemId}`;

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

    let itemContent = [];

    switch (itemHash) {
      case 'movie upcoming':
        itemContent = moviesUpcoming;
        break;
      case 'movie popular':
        itemContent = moviesPopular;
        break;
      case 'movie now-playing':
        itemContent = moviesNowPlaying;
        break;
      case 'movie top-rated':
        itemContent = moviesTopRated;
        break;

      case 'tv airing-today':
        itemContent = TVAiringToday;
        break;
      case 'tv popular':
        itemContent = TVPopular;
        break;
      case 'tv on-the-air':
        itemContent = TVOnTheAir;
        break;
      case 'tv top-rated':
        itemContent = TVTopRated;
        break;

      default:
        console.log('Something went wrong!');
    }

    return itemContent;
  };

  render() {
    const { id: itemId, type: itemType } = this.props.match.params;

    const itemContent = this.handleItemContent();

    let itemName =
      itemType === 'movie'
        ? `${itemId} ${itemType}s`
        : `${itemId} ${itemType} shows`;

    return (
      <div className='discover-item'>
        <div className='discover-item__header'>
          {itemName.replace(/-/g, ' ')}
        </div>
        <div className='discover-item__content'>
          {itemContent.map((item) => (
            <FeaturedItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverItem);
