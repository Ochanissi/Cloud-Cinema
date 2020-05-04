import { TVActionTypes } from './tv.types';

require('dotenv').config();

// TV Airing Today
export const fetchTVAiringTodayStart = () => ({
  type: TVActionTypes.FETCH_TV_AIRINGTODAY_START,
});

export const fetchTVAiringTodaySuccess = (TVAiringToday) => ({
  type: TVActionTypes.FETCH_TV_AIRINGTODAY_SUCCESS,
  payload: TVAiringToday,
});

export const fetchTVAiringTodayFailure = (errorMessage) => ({
  type: TVActionTypes.FETCH_TV_AIRINGTODAY_FAILURE,
  payload: errorMessage,
});

export const fetchTVAiringTodayStartAsync = () => {
  return (dispatch) => {
    dispatch(fetchTVAiringTodayStart());

    fetch(
      `https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => dispatch(fetchTVAiringTodaySuccess(data.results)))
      .catch((error) => dispatch(fetchTVAiringTodayFailure(error.message)));
  };
};

// TV Popular
export const fetchTVPopularStart = () => ({
  type: TVActionTypes.FETCH_TV_POPULAR_START,
});

export const fetchTVPopularSuccess = (TVPopular) => ({
  type: TVActionTypes.FETCH_TV_POPULAR_SUCCESS,
  payload: TVPopular,
});

export const fetchTVPopularFailure = (errorMessage) => ({
  type: TVActionTypes.FETCH_TV_POPULAR_FAILURE,
  payload: errorMessage,
});

export const fetchTVPopularStartAsync = () => {
  return (dispatch) => {
    dispatch(fetchTVPopularStart());

    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => dispatch(fetchTVPopularSuccess(data.results)))
      .catch((error) => dispatch(fetchTVPopularFailure(error.message)));
  };
};

// TV On The Air
export const fetchTVOnTheAirStart = () => ({
  type: TVActionTypes.FETCH_TV_ONTHEAIR_START,
});

export const fetchTVOnTheAirSuccess = (TVOnTheAir) => ({
  type: TVActionTypes.FETCH_TV_ONTHEAIR_SUCCESS,
  payload: TVOnTheAir,
});

export const fetchTVOnTheAirFailure = (errorMessage) => ({
  type: TVActionTypes.FETCH_TV_ONTHEAIR_FAILURE,
  payload: errorMessage,
});

export const fetchTVOnTheAirStartAsync = () => {
  return (dispatch) => {
    dispatch(fetchTVOnTheAirStart());

    fetch(
      `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => dispatch(fetchTVOnTheAirSuccess(data.results)))
      .catch((error) => dispatch(fetchTVOnTheAirFailure(error.message)));
  };
};

// TV Top Rated
export const fetchTVTopRatedStart = () => ({
  type: TVActionTypes.FETCH_TV_TOPRATED_START,
});

export const fetchTVTopRatedSuccess = (TVTopRated) => ({
  type: TVActionTypes.FETCH_TV_TOPRATED_SUCCESS,
  payload: TVTopRated,
});

export const fetchTVTopRatedFailure = (errorMessage) => ({
  type: TVActionTypes.FETCH_TV_TOPRATED_FAILURE,
  payload: errorMessage,
});

export const fetchTVTopRatedStartAsync = () => {
  return (dispatch) => {
    dispatch(fetchTVTopRatedStart());

    fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => dispatch(fetchTVTopRatedSuccess(data.results)))
      .catch((error) => dispatch(fetchTVTopRatedFailure(error.message)));
  };
};
