import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
  itemType: 'MOVIE',
  currentUser: null,
  watchedHistory: [],

  errorMessage: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_ITEM_TYPE:
      return {
        ...state,
        itemType: action.payload,
      };

    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
      };

    case UserActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };

    case UserActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
      };

    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };

    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
      };

    case UserActionTypes.POST_USER_WATCHED_SUCCESS:
      return {
        ...state,
        watchedHistory: action.payload,
      };

    case UserActionTypes.POST_USER_WATCHED_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };

    case UserActionTypes.GET_USER_WATCHED_SUCCESS:
      return {
        ...state,
        watchedHistory: action.payload,
      };

    case UserActionTypes.GET_USER_WATCHED_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };

    case UserActionTypes.DELETE_USER_WATCHED_SUCCESS:
      return {
        ...state,
        watchedHistory: action.payload,
      };

    case UserActionTypes.DELETE_USER_WATCHED_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
