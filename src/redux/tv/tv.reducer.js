import { TVActionTypes } from './tv.types';

const INITIAL_STATE = {
  isTVAiringTodayFetching: false,
  TVAiringToday: [],

  isTVPopularFetching: false,
  TVPopular: [],

  isTVOnTheAirFetching: false,
  TVOnTheAir: [],

  isTVTopRatedFetching: false,
  TVTopRated: [],

  isTVGenreFetching: false,
  TVGenre: [],

  errorMessage: undefined,
};

const movieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // TV Airing Today
    case TVActionTypes.FETCH_TV_AIRINGTODAY_START:
      return {
        ...state,
        isTVAiringTodayFetching: true,
      };
    case TVActionTypes.FETCH_TV_AIRINGTODAY_SUCCESS:
      return {
        ...state,
        isTVAiringTodayFetching: false,
        TVAiringToday: action.payload,
      };
    case TVActionTypes.FETCH_TV_AIRINGTODAY_FAILURE:
      return {
        ...state,
        isTVAiringTodayFetching: false,
        errorMessage: action.payload,
      };

    // TV Popular
    case TVActionTypes.FETCH_TV_POPULAR_START:
      return {
        ...state,
        isTVPopularFetching: true,
      };
    case TVActionTypes.FETCH_TV_POPULAR_SUCCESS:
      return {
        ...state,
        isTVPopularFetching: false,
        TVPopular: action.payload,
      };
    case TVActionTypes.FETCH_TV_POPULAR_FAILURE:
      return {
        ...state,
        isTVPopularFetching: false,
        errorMessage: action.payload,
      };

    // TV On The Air
    case TVActionTypes.FETCH_TV_ONTHEAIR_START:
      return {
        ...state,
        isTVOnTheAirFetching: true,
      };
    case TVActionTypes.FETCH_TV_ONTHEAIR_SUCCESS:
      return {
        ...state,
        isTVOnTheAirFetching: false,
        TVOnTheAir: action.payload,
      };
    case TVActionTypes.FETCH_TV_ONTHEAIR_FAILURE:
      return {
        ...state,
        isTVOnTheAirFetching: false,
        errorMessage: action.payload,
      };

    // TV Top Rated
    case TVActionTypes.FETCH_TV_TOPRATED_START:
      return {
        ...state,
        isTVTopRatedFetching: true,
      };
    case TVActionTypes.FETCH_TV_TOPRATED_SUCCESS:
      return {
        ...state,
        isTVTopRatedFetching: false,
        TVTopRated: action.payload,
      };
    case TVActionTypes.FETCH_TV_TOPRATED_FAILURE:
      return {
        ...state,
        isTVTopRatedFetching: false,
        errorMessage: action.payload,
      };

    // TV Genres
    case TVActionTypes.FETCH_TV_GENRE_START:
      return {
        ...state,
        isTVGenreFetching: true,
      };
    case TVActionTypes.FETCH_TV_GENRE_SUCCESS:
      return {
        ...state,
        isTVGenreFetching: false,
        TVGenre: action.payload,
      };
    case TVActionTypes.FETCH_TV_GENRE_FAILURE:
      return {
        ...state,
        isTVGenreFetching: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default movieReducer;
