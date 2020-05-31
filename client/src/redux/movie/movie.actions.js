import { MovieActionTypes } from './movie.types';

require('dotenv').config({ path: '../../.env' });

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

// Movies Genre
export const fetchMoviesGenreStart = () => ({
  type: MovieActionTypes.FETCH_MOVIES_GENRE_START,
});

export const fetchMoviesGenreSuccess = (moviesGenre) => ({
  type: MovieActionTypes.FETCH_MOVIES_GENRE_SUCCESS,
  payload: moviesGenre,
});

export const fetchMoviesGenreFailure = (errorMessage) => ({
  type: MovieActionTypes.FETCH_MOVIES_GENRE_FAILURE,
  payload: errorMessage,
});

export const fetchMoviesGenreStartAsync = () => {
  return (dispatch) => {
    dispatch(fetchMoviesGenreStart());

    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => dispatch(fetchMoviesGenreSuccess(data.genres)))
      .catch((error) => dispatch(fetchMoviesGenreFailure(error.message)));
  };
};

// Movies Details
export const fetchMovieDetailsStart = () => ({
  type: MovieActionTypes.FETCH_MOVIE_DETAILS_START,
});

export const fetchMovieDetailsSuccess = (movieDetails) => ({
  type: MovieActionTypes.FETCH_MOVIE_DETAILS_SUCCESS,
  payload: movieDetails,
});

export const fetchMovieDetailsFailure = (errorMessage) => ({
  type: MovieActionTypes.FETCH_MOVIE_DETAILS_FAILURE,
  payload: errorMessage,
});

export const fetchMovieDetailsStartAsync = (movieId) => {
  return (dispatch) => {
    dispatch(fetchMovieDetailsStart());

    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => dispatch(fetchMovieDetailsSuccess(data)))
      .catch((error) => dispatch(fetchMovieDetailsFailure(error.message)));
  };
};

// Movies Credits
export const fetchMovieCreditsStart = () => ({
  type: MovieActionTypes.FETCH_MOVIE_CREDITS_START,
});

export const fetchMovieCreditsSuccess = (movieCredits) => ({
  type: MovieActionTypes.FETCH_MOVIE_CREDITS_SUCCESS,
  payload: movieCredits,
});

export const fetchMovieCreditsFailure = (errorMessage) => ({
  type: MovieActionTypes.FETCH_MOVIE_CREDITS_FAILURE,
  payload: errorMessage,
});

export const fetchMovieCreditsStartAsync = (movieId) => {
  return (dispatch) => {
    dispatch(fetchMovieCreditsStart());

    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => dispatch(fetchMovieCreditsSuccess(data.cast)))
      .catch((error) => dispatch(fetchMovieCreditsFailure(error.message)));
  };
};

// Movies Trailers
export const fetchMovieTrailersStart = () => ({
  type: MovieActionTypes.FETCH_MOVIE_TRAILERS_START,
});

export const fetchMovieTrailersSuccess = (movieTrailers) => ({
  type: MovieActionTypes.FETCH_MOVIE_TRAILERS_SUCCESS,
  payload: movieTrailers,
});

export const fetchMovieTrailersFailure = (errorMessage) => ({
  type: MovieActionTypes.FETCH_MOVIE_TRAILERS_FAILURE,
  payload: errorMessage,
});

export const fetchMovieTrailersStartAsync = (movieId) => {
  return (dispatch) => {
    dispatch(fetchMovieTrailersStart());

    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => dispatch(fetchMovieTrailersSuccess(data.results)))
      .catch((error) => dispatch(fetchMovieTrailersFailure(error.message)));
  };
};

// Movies Reviews
export const fetchMovieReviewsStart = () => ({
  type: MovieActionTypes.FETCH_MOVIE_REVIEWS_START,
});

export const fetchMovieReviewsSuccess = (movieReviews) => ({
  type: MovieActionTypes.FETCH_MOVIE_REVIEWS_SUCCESS,
  payload: movieReviews,
});

export const fetchMovieReviewsFailure = (errorMessage) => ({
  type: MovieActionTypes.FETCH_MOVIE_REVIEWS_FAILURE,
  payload: errorMessage,
});

export const fetchMovieReviewsStartAsync = (movieId) => {
  return (dispatch) => {
    dispatch(fetchMovieReviewsStart());

    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => dispatch(fetchMovieReviewsSuccess(data.results)))
      .catch((error) => dispatch(fetchMovieReviewsFailure(error.message)));
  };
};

// Movies Trending
export const fetchMoviesTrendingStart = () => ({
  type: MovieActionTypes.FETCH_MOVIES_TRENDING_START,
});

export const fetchMoviesTrendingSuccess = (moviesTrending) => ({
  type: MovieActionTypes.FETCH_MOVIES_TRENDING_SUCCESS,
  payload: moviesTrending,
});

export const fetchMoviesTrendingFailure = (errorMessage) => ({
  type: MovieActionTypes.FETCH_MOVIES_TRENDING_FAILURE,
  payload: errorMessage,
});

export const fetchMoviesTrendingStartAsync = () => {
  return (dispatch) => {
    dispatch(fetchMoviesTrendingStart());

    fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => dispatch(fetchMoviesTrendingSuccess(data.results)))
      .catch((error) => dispatch(fetchMoviesTrendingFailure(error.message)));
  };
};

// Multi Search
export const fetchMultiSearchStart = () => ({
  type: MovieActionTypes.FETCH_MULTI_SEARCH_START,
});

export const fetchMultiSearchSuccess = (multiSearch) => ({
  type: MovieActionTypes.FETCH_MULTI_SEARCH_SUCCESS,
  payload: multiSearch,
});

export const fetchMultiSearchFailure = (errorMessage) => ({
  type: MovieActionTypes.FETCH_MULTI_SEARCH_FAILURE,
  payload: errorMessage,
});

export const fetchMultiSearchStartAsync = (query) => {
  return (dispatch) => {
    dispatch(fetchMultiSearchStart());

    fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    )
      .then((res) => res.json())
      .then((data) => dispatch(fetchMultiSearchSuccess(data.results)))
      .catch((error) => dispatch(fetchMultiSearchFailure(error.message)));
  };
};
