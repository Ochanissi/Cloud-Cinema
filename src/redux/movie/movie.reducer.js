import { MovieActionTypes } from './movie.types';

const INITIAL_STATE = {
  results: [],
  isFetching: false,
  errorMessage: undefined,
};

const movieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MovieActionTypes.FETCH_MOVIES_UPCOMING_START:
      return {
        ...state,
        isFetching: true,
      };
    case MovieActionTypes.FETCH_MOVIES_UPCOMING_SUCCESS:
      return {
        ...state,
        isFetching: false,
        moviesUpcoming: action.payload,
      };
    case MovieActionTypes.FETCH_MOVIES_UPCOMING_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default movieReducer;
