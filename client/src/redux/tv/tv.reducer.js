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

  isTVDetailsFetching: false,
  TVDetails: {},

  isTVCreditsFetching: false,
  TVCredits: [],

  isTVTrailersFetching: false,
  TVTrailers: [],

  isTVReviewsFetching: false,
  TVReviews: [],

  isTVTrendingFetching: false,
  TVTrending: [],

  isTVTrendingTodayFetching: false,
  TVTrendingToday: [],

  errorMessage: undefined,
};

const TVReducer = (state = INITIAL_STATE, action) => {
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

    // TV Details
    case TVActionTypes.FETCH_TV_DETAILS_START:
      return {
        ...state,
        isTVDetailsFetching: true,
      };
    case TVActionTypes.FETCH_TV_DETAILS_SUCCESS:
      return {
        ...state,
        isTVDetailsFetching: false,
        TVDetails: action.payload,
      };
    case TVActionTypes.FETCH_TV_DETAILS_FAILURE:
      return {
        ...state,
        isTVDetailsFetching: false,
        errorMessage: action.payload,
      };

    // TV Credits
    case TVActionTypes.FETCH_TV_CREDITS_START:
      return {
        ...state,
        isTVCreditsFetching: true,
      };
    case TVActionTypes.FETCH_TV_CREDITS_SUCCESS:
      return {
        ...state,
        isTVCreditsFetching: false,
        TVCredits: action.payload,
      };
    case TVActionTypes.FETCH_TV_CREDITS_FAILURE:
      return {
        ...state,
        isTVCreditsFetching: false,
        errorMessage: action.payload,
      };

    // TV Trailers
    case TVActionTypes.FETCH_TV_TRAILERS_START:
      return {
        ...state,
        isTVTrailersFetching: true,
      };
    case TVActionTypes.FETCH_TV_TRAILERS_SUCCESS:
      return {
        ...state,
        isTVTrailersFetching: false,
        TVTrailers: action.payload,
      };
    case TVActionTypes.FETCH_TV_TRAILERS_FAILURE:
      return {
        ...state,
        isTVTrailersFetching: false,
        errorMessage: action.payload,
      };

    // TV Reviews
    case TVActionTypes.FETCH_TV_REVIEWS_START:
      return {
        ...state,
        isTVReviewsFetching: true,
      };
    case TVActionTypes.FETCH_TV_REVIEWS_SUCCESS:
      return {
        ...state,
        isTVReviewsFetching: false,
        TVReviews: action.payload,
      };
    case TVActionTypes.FETCH_TV_REVIEWS_FAILURE:
      return {
        ...state,
        isTVReviewsFetching: false,
        errorMessage: action.payload,
      };

    // TV Trending
    case TVActionTypes.FETCH_TV_TRENDING_START:
      return {
        ...state,
        isTVTrendingFetching: true,
      };
    case TVActionTypes.FETCH_TV_TRENDING_SUCCESS:
      return {
        ...state,
        isTVTrendingFetching: false,
        TVTrending: action.payload,
      };
    case TVActionTypes.FETCH_TV_TRENDING_FAILURE:
      return {
        ...state,
        isTVTrendingFetching: false,
        errorMessage: action.payload,
      };

    // TV Trending Today
    case TVActionTypes.FETCH_TV_TRENDING_TODAY_START:
      return {
        ...state,
        isTVTrendingTodayFetching: true,
      };
    case TVActionTypes.FETCH_TV_TRENDING_TODAY_SUCCESS:
      return {
        ...state,
        isTVTrendingTodayFetching: false,
        TVTrendingToday: action.payload,
      };
    case TVActionTypes.FETCH_TV_TRENDING_TODAY_FAILURE:
      return {
        ...state,
        isTVTrendingTodayFetching: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default TVReducer;
