import { MovieActionTypes } from './movie.types';

require('dotenv').config();

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
      .then((data) => dispatch(fetchMoviesUpcomingSuccess(data)))
      .catch((error) => dispatch(fetchMoviesUpcomingFailure(error.message)));
  };
};
