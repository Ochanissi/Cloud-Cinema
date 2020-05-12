import { PeopleActionTypes } from './people.types';

const INITIAL_STATE = {
  isPeopleDetailsFetching: false,
  peopleDetails: {},

  isPeopleMovieCreditsFetching: false,
  peopleMovieCredits: [],

  isPeopleTVCreditsFetching: false,
  peopleTVCredits: [],

  errorMessage: undefined,
};

const peopleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // People Details
    case PeopleActionTypes.FETCH_PEOPLE_DETAILS_START:
      return {
        ...state,
        isPeopleDetailsFetching: true,
      };
    case PeopleActionTypes.FETCH_PEOPLE_DETAILS_SUCCESS:
      return {
        ...state,
        isPeopleDetailsFetching: false,
        peopleDetails: action.payload,
      };
    case PeopleActionTypes.FETCH_PEOPLE_DETAILS_FAILURE:
      return {
        ...state,
        isPeopleDetailsFetching: false,
        errorMessage: action.payload,
      };

    // People Movie Credits
    case PeopleActionTypes.FETCH_PEOPLE_MOVIE_CREDITS_START:
      return {
        ...state,
        isPeopleMovieCreditsFetching: true,
      };
    case PeopleActionTypes.FETCH_PEOPLE_MOVIE_CREDITS_SUCCESS:
      return {
        ...state,
        isPeopleMovieCreditsFetching: false,
        peopleMovieCredits: action.payload,
      };
    case PeopleActionTypes.FETCH_PEOPLE_MOVIE_CREDITS_FAILURE:
      return {
        ...state,
        isPeopleMovieCreditsFetching: false,
        errorMessage: action.payload,
      };

    // People TV Credits
    case PeopleActionTypes.FETCH_PEOPLE_TV_CREDITS_START:
      return {
        ...state,
        isPeopleTVCreditsFetching: true,
      };
    case PeopleActionTypes.FETCH_PEOPLE_TV_CREDITS_SUCCESS:
      return {
        ...state,
        isPeopleTVCreditsFetching: false,
        peopleTVCredits: action.payload,
      };
    case PeopleActionTypes.FETCH_PEOPLE_TV_CREDITS_FAILURE:
      return {
        ...state,
        isPeopleTVCreditsFetching: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default peopleReducer;
