import React from 'react';
import { connect } from 'react-redux';

import FeaturedContainer from '../featured-container/featured-container.component';

import {
  fetchMoviesUpcomingStartAsync,
  fetchMoviesPopularStartAsync,
  fetchMoviesNowPlayingStartAsync,
  fetchMoviesTopRatedStartAsync,
} from '../../redux/movie/movie.actions';

import './featured.styles.scss';

class Featured extends React.Component {
  componentDidMount() {
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

    // console.log(this.props);
  }

  render() {
    const {
      moviesUpcoming,
      moviesPopular,
      moviesNowPlaying,
      moviesTopRated,
    } = this.props;
    // console.log(
    //   moviesUpcoming,
    //   moviesPopular,
    //   moviesNowPlaying,
    //   moviesTopRated
    // );
    return (
      <div className='featured'>
        <FeaturedContainer title='Upcoming' movieType={moviesUpcoming} />
        <FeaturedContainer title='Popular' movieType={moviesPopular} />
        <FeaturedContainer title='Now Playing' movieType={moviesNowPlaying} />
        <FeaturedContainer title='Top Rated' movieType={moviesTopRated} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ismoviesUpcomingFetching: state.movie.ismoviesUpcomingFetching,
  moviesUpcoming: state.movie.moviesUpcoming,
  ismoviesPopularFetching: state.movie.ismoviesPopularFetching,
  moviesPopular: state.movie.moviesPopular,
  ismoviesNowPlayingFetching: state.movie.ismoviesNowPlayingFetching,
  moviesNowPlaying: state.movie.moviesNowPlaying,
  ismoviesTopRatedFetching: state.movie.ismoviesTopRatedFetching,
  moviesTopRated: state.movie.moviesTopRated,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMoviesUpcomingStartAsync: () =>
    dispatch(fetchMoviesUpcomingStartAsync()),
  fetchMoviesPopularStartAsync: () => dispatch(fetchMoviesPopularStartAsync()),
  fetchMoviesNowPlayingStartAsync: () =>
    dispatch(fetchMoviesNowPlayingStartAsync()),
  fetchMoviesTopRatedStartAsync: () =>
    dispatch(fetchMoviesTopRatedStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Featured);
