import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
  itemType: 'movie',
  currentUser: null,
  watchedHistory: [],
  collection: [],
  watchlist: [],

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
        watchedHistory: [],
        collection: [],
        watchlist: [],
      };

    // User Watched
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

    // User Collection
    case UserActionTypes.POST_USER_COLLECTION_SUCCESS:
      return {
        ...state,
        collection: action.payload,
      };

    case UserActionTypes.POST_USER_COLLECTION_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };

    case UserActionTypes.GET_USER_COLLECTION_SUCCESS:
      return {
        ...state,
        collection: action.payload,
      };

    case UserActionTypes.GET_USER_COLLECTION_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };

    case UserActionTypes.DELETE_USER_COLLECTION_SUCCESS:
      return {
        ...state,
        collection: action.payload,
      };

    case UserActionTypes.DELETE_USER_COLLECTION_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };

    // User Watchlist
    case UserActionTypes.POST_USER_WATCHLIST_SUCCESS:
      return {
        ...state,
        watchlist: action.payload,
      };

    case UserActionTypes.POST_USER_WATCHLIST_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };

    case UserActionTypes.GET_USER_WATCHLIST_SUCCESS:
      return {
        ...state,
        watchlist: action.payload,
      };

    case UserActionTypes.GET_USER_WATCHLIST_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };

    case UserActionTypes.DELETE_USER_WATCHLIST_SUCCESS:
      return {
        ...state,
        watchlist: action.payload,
      };

    case UserActionTypes.DELETE_USER_WATCHLIST_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };

    case UserActionTypes.UPDATE_USER_DATA_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
      };

    case UserActionTypes.UPDATE_USER_DATA_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
