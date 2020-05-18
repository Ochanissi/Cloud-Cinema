import React from 'react';
import { connect } from 'react-redux';

import {
  fetchMoviesUpcomingStartAsync,
  fetchMoviesPopularStartAsync,
  fetchMoviesNowPlayingStartAsync,
  fetchMoviesTopRatedStartAsync,
  fetchMultiSearchStartAsync,
} from '../../redux/movie/movie.actions';

import {
  fetchTVAiringTodayStartAsync,
  fetchTVPopularStartAsync,
  fetchTVOnTheAirStartAsync,
  fetchTVTopRatedStartAsync,
} from '../../redux/tv/tv.actions';

import FeaturedItem from '../../components/featured-item/featured-item.component';
import IDItem from '../../components/id-item/id-item.component';

import './discover-item.styles.scss';

class DiscoverItem extends React.Component {
  componentDidMount() {
    const { id: itemId, type: itemType } = this.props.match.params;

    if (itemType === 'movie') this.handleMovieFetch();
    if (itemType === 'tv') this.handleTVFetch();
    if (!itemType) this.handleSearch(itemId);
  }

  // Checks if the component received new props and refetches data
  componentDidUpdate(prevProps) {
    const { id: itemId, type: itemType } = this.props.match.params;

    if (itemId !== prevProps.match.params.id) {
      if (itemType === 'movie') this.handleMovieFetch();
      if (itemType === 'tv') this.handleTVFetch();
      if (!itemType) this.handleSearch(itemId);
    }
  }

  handleMovieFetch = () => {
    const { id: itemId } = this.props.match.params;

    const {
      fetchMoviesUpcomingStartAsync,
      fetchMoviesPopularStartAsync,
      fetchMoviesNowPlayingStartAsync,
      fetchMoviesTopRatedStartAsync,
    } = this.props;

    if (itemId === 'upcoming') fetchMoviesUpcomingStartAsync();
    if (itemId === 'popular') fetchMoviesPopularStartAsync();
    if (itemId === 'now-playing') fetchMoviesNowPlayingStartAsync();
    if (itemId === 'top-rated') fetchMoviesTopRatedStartAsync();
  };

  handleTVFetch = () => {
    const { id: itemId } = this.props.match.params;

    const {
      fetchTVAiringTodayStartAsync,
      fetchTVPopularStartAsync,
      fetchTVOnTheAirStartAsync,
      fetchTVTopRatedStartAsync,
    } = this.props;

    if (itemId === 'airing-today') fetchTVAiringTodayStartAsync();
    if (itemId === 'popular') fetchTVPopularStartAsync();
    if (itemId === 'on-the-air') fetchTVOnTheAirStartAsync();
    if (itemId === 'top-rated') fetchTVTopRatedStartAsync();
  };

  handleSearch = (query) => {
    const { fetchMultiSearchStartAsync } = this.props;

    fetchMultiSearchStartAsync(query);
  };

  handleItemContent = () => {
    const { id: itemId, type: itemType } = this.props.match.params;

    const itemHash = `${itemType} ${itemId}`;

    const {
      moviesUpcoming,
      moviesPopular,
      moviesNowPlaying,
      moviesTopRated,

      multiSearch,

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
        itemContent = multiSearch;
      // .filter(
      //   (item) => item.media_type === 'movie' || item.media_type === 'tv'
      // );
    }

    return itemContent;
  };

  render() {
    const { id: itemId, type: itemType } = this.props.match.params;

    const itemContent = this.handleItemContent();

    // console.log(itemContent);

    let itemName =
      itemType === 'movie'
        ? `${itemId} ${itemType}s`
        : itemType === 'movie'
        ? `${itemId} ${itemType} shows`
        : 'Search Results';

    return (
      <div className='discover-item'>
        <div className='discover-item__header'>
          {itemName.replace(/-/g, ' ')}
        </div>
        <div className='discover-item__content'>
          {itemContent.map((item) => {
            if (itemType)
              return (
                <FeaturedItem key={item.id} {...item} itemTypeDisc={itemType} />
              );

            if (item.media_type === 'movie')
              return (
                <FeaturedItem key={item.id} {...item} itemTypeDisc={'movie'} />
              );

            if (item.media_type === 'tv')
              return (
                <FeaturedItem key={item.id} {...item} itemTypeDisc={'tv'} />
              );

            if (item.media_type === 'person')
              return <IDItem key={item.id} item={item} itemType={'people'} />;

            return null;
          })}
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

  ismultiSearchFetching: state.movie.ismultiSearchFetching,
  multiSearch: state.movie.multiSearch,

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

  fetchMultiSearchStartAsync: (query) =>
    dispatch(fetchMultiSearchStartAsync(query)),

  fetchTVAiringTodayStartAsync: () => dispatch(fetchTVAiringTodayStartAsync()),
  fetchTVPopularStartAsync: () => dispatch(fetchTVPopularStartAsync()),
  fetchTVOnTheAirStartAsync: () => dispatch(fetchTVOnTheAirStartAsync()),
  fetchTVTopRatedStartAsync: () => dispatch(fetchTVTopRatedStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverItem);
