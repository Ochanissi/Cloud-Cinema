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

    default:
      return state;
  }
};

export default movieReducer;
