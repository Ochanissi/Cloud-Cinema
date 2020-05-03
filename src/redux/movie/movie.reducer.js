import { MovieActionTypes } from './movie.types';

const INITIAL_STATE = {
  results: [],
};

const movieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MovieActionTypes.GET_MOVIES_UPCOMING:
      return {
        ...state,
        moviesUpcoming: action.payload,
      };

    default:
      return state;
  }
};

export default movieReducer;
