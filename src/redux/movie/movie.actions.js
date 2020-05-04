import { MovieActionTypes } from './movie.types';

require('dotenv').config();

// Movies Upcoming
export const fetchMoviesUpcomingStart = () => ({
  type: MovieActionTypes.FETCH_MOVIES_UPCOMING_START,
});

export const fetchMoviesUpcomingSuccess = (moviesUpcoming) => ({
  type: MovieActionTypes.FETCH_MOVIES_UPCOMING_SUCCESS,
  payload: moviesUpcoming,
});

export const fetchMoviesUpcomingFailure = (errorMessage) => ({
  type: MovieActionTypes.FETCH_MOVIES_UPCOMING_FAILURE,
  payload: errorMessage,
});

export const fetchMoviesUpcomingStartAsync = () => {
  return (dispatch) => {
    dispatch(fetchMoviesUpcomingStart());

    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => dispatch(fetchMoviesUpcomingSuccess(data.results)))
      .catch((error) => dispatch(fetchMoviesUpcomingFailure(error.message)));
  };
};

// Movies Popular
export const fetchMoviesPopularStart = () => ({
  type: MovieActionTypes.FETCH_MOVIES_POPULAR_START,
});

export const fetchMoviesPopularSuccess = (moviesPopular) => ({
  type: MovieActionTypes.FETCH_MOVIES_POPULAR_SUCCESS,
  payload: moviesPopular,
});

export const fetchMoviesPopularFailure = (errorMessage) => ({
  type: MovieActionTypes.FETCH_MOVIES_POPULAR_FAILURE,
  payload: errorMessage,
});

export const fetchMoviesPopularStartAsync = () => {
  return (dispatch) => {
    dispatch(fetchMoviesPopularStart());

    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => dispatch(fetchMoviesPopularSuccess(data.results)))
      .catch((error) => dispatch(fetchMoviesPopularFailure(error.message)));
  };
};

// Movies Now Playing
export const fetchMoviesNowPlayingStart = () => ({
  type: MovieActionTypes.FETCH_MOVIES_NOWPLAYING_START,
});

export const fetchMoviesNowPlayingSuccess = (moviesNowPlaying) => ({
  type: MovieActionTypes.FETCH_MOVIES_NOWPLAYING_SUCCESS,
  payload: moviesNowPlaying,
});

export const fetchMoviesNowPlayingFailure = (errorMessage) => ({
  type: MovieActionTypes.FETCH_MOVIES_NOWPLAYING_FAILURE,
  payload: errorMessage,
});

export const fetchMoviesNowPlayingStartAsync = () => {
  return (dispatch) => {
    dispatch(fetchMoviesNowPlayingStart());

    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => dispatch(fetchMoviesNowPlayingSuccess(data.results)))
      .catch((error) => dispatch(fetchMoviesNowPlayingFailure(error.message)));
  };
};

// Movies Top Rated
export const fetchMoviesTopRatedStart = () => ({
  type: MovieActionTypes.FETCH_MOVIES_TOPRATED_START,
});

export const fetchMoviesTopRatedSuccess = (moviesTopRated) => ({
  type: MovieActionTypes.FETCH_MOVIES_TOPRATED_SUCCESS,
  payload: moviesTopRated,
});

export const fetchMoviesTopRatedFailure = (errorMessage) => ({
  type: MovieActionTypes.FETCH_MOVIES_TOPRATED_FAILURE,
  payload: errorMessage,
});

export const fetchMoviesTopRatedStartAsync = () => {
  return (dispatch) => {
    dispatch(fetchMoviesTopRatedStart());

    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => dispatch(fetchMoviesTopRatedSuccess(data.results)))
      .catch((error) => dispatch(fetchMoviesTopRatedFailure(error.message)));
  };
};
