import { MovieActionTypes } from './movie.types';

const INITIAL_STATE = {
  ismoviesUpcomingFetching: false,
  moviesUpcoming: [],

  ismoviesPopularFetching: false,
  moviesPopular: [],

  ismoviesNowPlayingFetching: false,
  moviesNowPlaying: [],

  ismoviesTopRatedFetching: false,
  moviesTopRated: [],

  ismoviesGenreFetching: false,
  moviesGenre: [],

  ismovieDetailsFetching: false,
  movieDetails: {},

  ismovieCreditsFetching: false,
  movieCredits: [],

  ismovieTrailersFetching: false,
  movieTrailers: [],

  ismovieReviewsFetching: false,
  movieReviews: [],

  ismoviesTrendingFetching: false,
  moviesTrending: [],

  ismultiSearchFetching: false,
  multiSearch: [],

  errorMessage: undefined,
};

const movieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Movies Upcoming
    case MovieActionTypes.FETCH_MOVIES_UPCOMING_START:
      return {
        ...state,
        ismoviesUpcomingFetching: true,
      };
    case MovieActionTypes.FETCH_MOVIES_UPCOMING_SUCCESS:
      return {
        ...state,
        ismoviesUpcomingFetching: false,
        moviesUpcoming: action.payload,
      };
    case MovieActionTypes.FETCH_MOVIES_UPCOMING_FAILURE:
      return {
        ...state,
        ismoviesUpcomingFetching: false,
        errorMessage: action.payload,
      };

    // Movies Popular
    case MovieActionTypes.FETCH_MOVIES_POPULAR_START:
      return {
        ...state,
        ismoviesPopularFetching: true,
      };
    case MovieActionTypes.FETCH_MOVIES_POPULAR_SUCCESS:
      return {
        ...state,
        ismoviesPopularFetching: false,
        moviesPopular: action.payload,
      };
    case MovieActionTypes.FETCH_MOVIES_POPULAR_FAILURE:
      return {
        ...state,
        ismoviesPopularFetching: false,
        errorMessage: action.payload,
      };

    // Movies Now Playing
    case MovieActionTypes.FETCH_MOVIES_NOWPLAYING_START:
      return {
        ...state,
        ismoviesNowPlayingFetching: true,
      };
    case MovieActionTypes.FETCH_MOVIES_NOWPLAYING_SUCCESS:
      return {
        ...state,
        ismoviesNowPlayingFetching: false,
        moviesNowPlaying: action.payload,
      };
    case MovieActionTypes.FETCH_MOVIES_NOWPLAYING_FAILURE:
      return {
        ...state,
        ismoviesNowPlayingFetching: false,
        errorMessage: action.payload,
      };

    // Movies Top Rated
    case MovieActionTypes.FETCH_MOVIES_TOPRATED_START:
      return {
        ...state,
        ismoviesTopRatedFetching: true,
      };
    case MovieActionTypes.FETCH_MOVIES_TOPRATED_SUCCESS:
      return {
        ...state,
        ismoviesTopRatedFetching: false,
        moviesTopRated: action.payload,
      };
    case MovieActionTypes.FETCH_MOVIES_TOPRATED_FAILURE:
      return {
        ...state,
        ismoviesTopRatedFetching: false,
        errorMessage: action.payload,
      };

    // Movies Genre
    case MovieActionTypes.FETCH_MOVIES_GENRE_START:
      return {
        ...state,
        ismoviesGenreFetching: true,
      };
    case MovieActionTypes.FETCH_MOVIES_GENRE_SUCCESS:
      return {
        ...state,
        ismoviesGenreFetching: false,
        moviesGenre: action.payload,
      };
    case MovieActionTypes.FETCH_MOVIES_GENRE_FAILURE:
      return {
        ...state,
        ismoviesGenreFetching: false,
        errorMessage: action.payload,
      };

    // Movie Details
    case MovieActionTypes.FETCH_MOVIE_DETAILS_START:
      return {
        ...state,
        ismovieDetailsFetching: true,
      };
    case MovieActionTypes.FETCH_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        ismovieDetailsFetching: false,
        movieDetails: action.payload,
      };
    case MovieActionTypes.FETCH_MOVIE_DETAILS_FAILURE:
      return {
        ...state,
        ismovieDetailsFetching: false,
        errorMessage: action.payload,
      };

    // Movie Credits
    case MovieActionTypes.FETCH_MOVIE_CREDITS_START:
      return {
        ...state,
        ismovieCreditsFetching: true,
      };
    case MovieActionTypes.FETCH_MOVIE_CREDITS_SUCCESS:
      return {
        ...state,
        ismovieCreditsFetching: false,
        movieCredits: action.payload,
      };
    case MovieActionTypes.FETCH_MOVIE_CREDITS_FAILURE:
      return {
        ...state,
        ismovieCreditsFetching: false,
        errorMessage: action.payload,
      };

    // Movie Trailers
    case MovieActionTypes.FETCH_MOVIE_TRAILERS_START:
      return {
        ...state,
        ismovieTrailersFetching: true,
      };
    case MovieActionTypes.FETCH_MOVIE_TRAILERS_SUCCESS:
      return {
        ...state,
        ismovieTrailersFetching: false,
        movieTrailers: action.payload,
      };
    case MovieActionTypes.FETCH_MOVIE_TRAILERS_FAILURE:
      return {
        ...state,
        ismovieTrailersFetching: false,
        errorMessage: action.payload,
      };

    // Movie Reviews
    case MovieActionTypes.FETCH_MOVIE_REVIEWS_START:
      return {
        ...state,
        ismovieReviewsFetching: true,
      };
    case MovieActionTypes.FETCH_MOVIE_REVIEWS_SUCCESS:
      return {
        ...state,
        ismovieReviewsFetching: false,
        movieReviews: action.payload,
      };
    case MovieActionTypes.FETCH_MOVIE_REVIEWS_FAILURE:
      return {
        ...state,
        ismovieReviewsFetching: false,
        errorMessage: action.payload,
      };

    // Movie Trending
    case MovieActionTypes.FETCH_MOVIES_TRENDING_START:
      return {
        ...state,
        ismoviesTrendingFetching: true,
      };
    case MovieActionTypes.FETCH_MOVIES_TRENDING_SUCCESS:
      return {
        ...state,
        ismoviesTrendingFetching: false,
        moviesTrending: action.payload,
      };
    case MovieActionTypes.FETCH_MOVIES_TRENDING_FAILURE:
      return {
        ...state,
        ismoviesTrendingFetching: false,
        errorMessage: action.payload,
      };

    // Multi Search
    case MovieActionTypes.FETCH_MULTI_SEARCH_START:
      return {
        ...state,
        ismultiSearchFetching: true,
      };
    case MovieActionTypes.FETCH_MULTI_SEARCH_SUCCESS:
      return {
        ...state,
        ismultiSearchFetching: false,
        multiSearch: action.payload,
      };
    case MovieActionTypes.FETCH_MULTI_SEARCH_FAILURE:
      return {
        ...state,
        ismultiSearchFetching: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default movieReducer;
