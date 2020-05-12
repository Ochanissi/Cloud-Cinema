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

// TV Genre
export const fetchTVGenreStart = () => ({
  type: TVActionTypes.FETCH_TV_GENRE_START,
});

export const fetchTVGenreSuccess = (TVGenre) => ({
  type: TVActionTypes.FETCH_TV_GENRE_SUCCESS,
  payload: TVGenre,
});

export const fetchTVGenreFailure = (errorMessage) => ({
  type: TVActionTypes.FETCH_TV_GENRE_FAILURE,
  payload: errorMessage,
});

export const fetchTVGenreStartAsync = () => {
  return (dispatch) => {
    dispatch(fetchTVGenreStart());

    fetch(
      `https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => dispatch(fetchTVGenreSuccess(data.genres)))
      .catch((error) => dispatch(fetchTVGenreFailure(error.message)));
  };
};

// TV Details
export const fetchTVDetailsStart = () => ({
  type: TVActionTypes.FETCH_TV_DETAILS_START,
});

export const fetchTVDetailsSuccess = (TVDetails) => ({
  type: TVActionTypes.FETCH_TV_DETAILS_SUCCESS,
  payload: TVDetails,
});

export const fetchTVDetailsFailure = (errorMessage) => ({
  type: TVActionTypes.FETCH_TV_DETAILS_FAILURE,
  payload: errorMessage,
});

export const fetchTVDetailsStartAsync = (TVId) => {
  return (dispatch) => {
    dispatch(fetchTVDetailsStart());

    fetch(
      `https://api.themoviedb.org/3/tv/${TVId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => dispatch(fetchTVDetailsSuccess(data)))
      .catch((error) => dispatch(fetchTVDetailsFailure(error.message)));
  };
};

// TV Credits
export const fetchTVCreditsStart = () => ({
  type: TVActionTypes.FETCH_TV_CREDITS_START,
});

export const fetchTVCreditsSuccess = (TVCredits) => ({
  type: TVActionTypes.FETCH_TV_CREDITS_SUCCESS,
  payload: TVCredits,
});

export const fetchTVCreditsFailure = (errorMessage) => ({
  type: TVActionTypes.FETCH_TV_CREDITS_FAILURE,
  payload: errorMessage,
});

export const fetchTVCreditsStartAsync = (TVId) => {
  return (dispatch) => {
    dispatch(fetchTVCreditsStart());

    fetch(
      `https://api.themoviedb.org/3/tv/${TVId}/credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => dispatch(fetchTVCreditsSuccess(data.cast)))
      .catch((error) => dispatch(fetchTVCreditsFailure(error.message)));
  };
};

// TV Trailers
export const fetchTVTrailersStart = () => ({
  type: TVActionTypes.FETCH_TV_TRAILERS_START,
});

export const fetchTVTrailersSuccess = (TVTrailers) => ({
  type: TVActionTypes.FETCH_TV_TRAILERS_SUCCESS,
  payload: TVTrailers,
});

export const fetchTVTrailersFailure = (errorMessage) => ({
  type: TVActionTypes.FETCH_TV_TRAILERS_FAILURE,
  payload: errorMessage,
});

export const fetchTVTrailersStartAsync = (TVId) => {
  return (dispatch) => {
    dispatch(fetchTVTrailersStart());

    fetch(
      `https://api.themoviedb.org/3/tv/${TVId}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => dispatch(fetchTVTrailersSuccess(data.results)))
      .catch((error) => dispatch(fetchTVTrailersFailure(error.message)));
  };
};

// TV Reviews
export const fetchTVReviewsStart = () => ({
  type: TVActionTypes.FETCH_TV_REVIEWS_START,
});

export const fetchTVReviewsSuccess = (TVReviews) => ({
  type: TVActionTypes.FETCH_TV_REVIEWS_SUCCESS,
  payload: TVReviews,
});

export const fetchTVReviewsFailure = (errorMessage) => ({
  type: TVActionTypes.FETCH_TV_REVIEWS_FAILURE,
  payload: errorMessage,
});

export const fetchTVReviewsStartAsync = (TVId) => {
  return (dispatch) => {
    dispatch(fetchTVReviewsStart());

    fetch(
      `https://api.themoviedb.org/3/tv/${TVId}/reviews?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => dispatch(fetchTVReviewsSuccess(data.results)))
      .catch((error) => dispatch(fetchTVReviewsFailure(error.message)));
  };
};
