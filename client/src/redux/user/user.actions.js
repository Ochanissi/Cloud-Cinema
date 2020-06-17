import { UserActionTypes } from './user.types';

import Toast from 'light-toast';

// import Kek from '../../.env';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ path: '../../.env' });
  console.log('lelelle');
}

// console.log(process.env.REACT_APP_BACKEND_URL);

// Set Item Type
export const setItemType = (itemType) => ({
  type: UserActionTypes.SET_ITEM_TYPE,
  payload: itemType,
});

// Set Current User
export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

// Sign In
export const signInStart = () => ({
  type: UserActionTypes.SIGN_IN_START,
});

export const signInSuccess = (currentUser) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: currentUser,
});

export const signInFailure = (errorMessage) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: errorMessage,
});

export const signInStartAsync = (email, password) => {
  return (dispatch) => {
    dispatch(signInStart());

    fetch(`${process.env.REACT_APP_BACKEND_URL}sign-in`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          dispatch(signInSuccess(user));
          Toast.success(`Welcome back ${user.name}!`, 1500);
        } else {
          dispatch(signInFailure(user));
          Toast.fail(user, 1500);
        }
      })
      .catch((error) => {
        dispatch(signInFailure(error.message));
        Toast.fail(`Failed signing in!`, 1500);
      });
  };
};

// Sign Up
export const signUpStart = () => ({
  type: UserActionTypes.SIGN_UP_START,
});

export const signUpSuccess = (currentUser) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: currentUser,
});

export const signUpFailure = (errorMessage) => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: errorMessage,
});

export const signUpStartAsync = (name, email, password) => {
  return (dispatch) => {
    dispatch(signUpStart());

    fetch(`${process.env.REACT_APP_BACKEND_URL}sign-up`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          dispatch(signUpSuccess(user));
          Toast.success(`Welcome to Cloud Cinema, ${user.name}!`, 1500);
        } else {
          dispatch(signUpFailure(user));
          Toast.fail(user, 1500);
        }
      })
      .catch((error) => {
        dispatch(signUpFailure(error.message));
        Toast.fail(`Failed Signing up!`, 1500);
      });
  };
};

// Sign Out

// export const signOutStart = () => ({
//   type: UserActionTypes.SIGN_OUT_START,
// });

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS,
});

// export const signOutFailure = (error) => ({
//   type: UserActionTypes.SIGN_OUT_FAILURE,
//   payload: error,
// });

// Post User Watched History
export const postUserWatchedStart = () => ({
  type: UserActionTypes.POST_USER_WATCHED_START,
});

export const postUserWatchedSuccess = (watchedHistory) => ({
  type: UserActionTypes.POST_USER_WATCHED_SUCCESS,
  payload: watchedHistory,
});

export const postUserWatchedFailure = (errorMessage) => ({
  type: UserActionTypes.POST_USER_WATCHED_FAILURE,
  payload: errorMessage,
});

export const postUserWatchedStartAsync = (
  id,
  email,
  type,
  title,
  url,
  rating
) => {
  return (dispatch) => {
    dispatch(postUserWatchedStart());
    fetch(`${process.env.REACT_APP_BACKEND_URL}watched`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id,
        email,
        type,
        title,
        url,
        rating,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (typeof data === 'string') {
          dispatch(postUserWatchedFailure(data));
          Toast.fail('Failed adding to watched history!', 1000);
        } else {
          dispatch(postUserWatchedSuccess(data));
          Toast.success('Added to watched history!', 1000);
        }
      })
      .catch((error) => {
        dispatch(postUserWatchedFailure(error.message));
        Toast.fail('Failed adding to watched history!', 1000);
      });
  };
};

// Get User Watched History
export const getUserWatchedStart = () => ({
  type: UserActionTypes.GET_USER_WATCHED_START,
});

export const getUserWatchedSuccess = (watchedHistory) => ({
  type: UserActionTypes.GET_USER_WATCHED_SUCCESS,
  payload: watchedHistory,
});

export const getUserWatchedFailure = (errorMessage) => ({
  type: UserActionTypes.GET_USER_WATCHED_FAILURE,
  payload: errorMessage,
});

export const getUserWatchedStartAsync = (email) => {
  return (dispatch) => {
    dispatch(getUserWatchedStart());
    fetch(`${process.env.REACT_APP_BACKEND_URL}get-watched/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(getUserWatchedSuccess(data));
      })
      .catch((error) => dispatch(getUserWatchedFailure(error.message)));
  };
};

// Delete User Watched History
export const deleteUserWatchedStart = () => ({
  type: UserActionTypes.DELETE_USER_WATCHED_START,
});

export const deleteUserWatchedSuccess = (watchedHistory) => ({
  type: UserActionTypes.DELETE_USER_WATCHED_SUCCESS,
  payload: watchedHistory,
});

export const deleteUserWatchedFailure = (errorMessage) => ({
  type: UserActionTypes.DELETE_USER_WATCHED_FAILURE,
  payload: errorMessage,
});

export const deleteUserWatchedStartAsync = (id, email) => {
  return (dispatch) => {
    dispatch(deleteUserWatchedStart());
    fetch(`${process.env.REACT_APP_BACKEND_URL}delete-watched/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id,
        email,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (typeof data === 'string') {
          dispatch(deleteUserWatchedFailure(data));
          Toast.fail('Failed removing from watched history!', 1000);
        } else {
          dispatch(deleteUserWatchedSuccess(data));
          Toast.success('Removed from watched history!', 1000);
        }
      })
      .catch((error) => {
        dispatch(deleteUserWatchedFailure(error.message));
        Toast.fail('Failed removing from watched history!', 1000);
      });
  };
};

// Post User Collection
export const postUserCollectionStart = () => ({
  type: UserActionTypes.POST_USER_COLLECTION_START,
});

export const postUserCollectionSuccess = (collection) => ({
  type: UserActionTypes.POST_USER_COLLECTION_SUCCESS,
  payload: collection,
});

export const postUserCollectionFailure = (errorMessage) => ({
  type: UserActionTypes.POST_USER_COLLECTION_FAILURE,
  payload: errorMessage,
});

export const postUserCollectionStartAsync = (
  id,
  email,
  type,
  title,
  url,
  rating
) => {
  return (dispatch) => {
    dispatch(postUserCollectionStart());
    fetch(`${process.env.REACT_APP_BACKEND_URL}collection`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id,
        email,
        type,
        title,
        url,
        rating,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (typeof data === 'string') {
          dispatch(postUserCollectionFailure(data));
          Toast.fail('Failed adding to collection!', 1000);
        } else {
          dispatch(postUserCollectionSuccess(data));
          Toast.success('Added to collection!', 1000);
        }
      })
      .catch((error) => {
        dispatch(postUserCollectionFailure(error.message));
        Toast.fail('Failed adding to collection!', 1000);
      });
  };
};

// Get User Collection
export const getUserCollectionStart = () => ({
  type: UserActionTypes.GET_USER_COLLECTION_START,
});

export const getUserCollectionSuccess = (collection) => ({
  type: UserActionTypes.GET_USER_COLLECTION_SUCCESS,
  payload: collection,
});

export const getUserCollectionFailure = (errorMessage) => ({
  type: UserActionTypes.GET_USER_COLLECTION_FAILURE,
  payload: errorMessage,
});

export const getUserCollectionStartAsync = (email) => {
  return (dispatch) => {
    dispatch(getUserCollectionStart());
    fetch(`${process.env.REACT_APP_BACKEND_URL}get-collection/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(getUserCollectionSuccess(data));
      })
      .catch((error) => dispatch(getUserCollectionFailure(error.message)));
  };
};

// Delete User Collection
export const deleteUserCollectionStart = () => ({
  type: UserActionTypes.DELETE_USER_COLLECTION_START,
});

export const deleteUserCollectionSuccess = (collection) => ({
  type: UserActionTypes.DELETE_USER_COLLECTION_SUCCESS,
  payload: collection,
});

export const deleteUserCollectionFailure = (errorMessage) => ({
  type: UserActionTypes.DELETE_USER_COLLECTION_FAILURE,
  payload: errorMessage,
});

export const deleteUserCollectionStartAsync = (id, email) => {
  return (dispatch) => {
    dispatch(deleteUserCollectionStart());
    fetch(`${process.env.REACT_APP_BACKEND_URL}delete-collection/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id,
        email,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (typeof data === 'string') {
          dispatch(deleteUserCollectionFailure(data));
          Toast.fail('Failed removing from collection!', 1000);
        } else {
          dispatch(deleteUserCollectionSuccess(data));
          Toast.success('Removed from collection!', 1000);
        }
      })
      .catch((error) => {
        dispatch(deleteUserCollectionFailure(error.message));
        Toast.fail('Failed removing from collection!', 1000);
      });
  };
};

// Post User Watchlist
export const postUserWatchlistStart = () => ({
  type: UserActionTypes.POST_USER_WATCHLIST_START,
});

export const postUserWatchlistSuccess = (watchlist) => ({
  type: UserActionTypes.POST_USER_WATCHLIST_SUCCESS,
  payload: watchlist,
});

export const postUserWatchlistFailure = (errorMessage) => ({
  type: UserActionTypes.POST_USER_WATCHLIST_FAILURE,
  payload: errorMessage,
});

export const postUserWatchlistStartAsync = (
  id,
  email,
  type,
  title,
  url,
  rating
) => {
  return (dispatch) => {
    dispatch(postUserWatchlistStart());
    fetch(`${process.env.REACT_APP_BACKEND_URL}watchlist`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id,
        email,
        type,
        title,
        url,
        rating,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (typeof data === 'string') {
          dispatch(postUserWatchlistFailure(data));
          Toast.fail('Failed adding to watchlist!', 1000);
        } else {
          dispatch(postUserWatchlistSuccess(data));
          Toast.success('Added to watchlist!', 1000);
        }
      })
      .catch((error) => {
        dispatch(postUserWatchlistFailure(error.message));
        Toast.fail('Failed adding to watchlist!', 1000);
      });
  };
};

// Get User Watchlist
export const getUserWatchlistStart = () => ({
  type: UserActionTypes.GET_USER_WATCHLIST_START,
});

export const getUserWatchlistSuccess = (watchlist) => ({
  type: UserActionTypes.GET_USER_WATCHLIST_SUCCESS,
  payload: watchlist,
});

export const getUserWatchlistFailure = (errorMessage) => ({
  type: UserActionTypes.GET_USER_WATCHLIST_FAILURE,
  payload: errorMessage,
});

export const getUserWatchlistStartAsync = (email) => {
  return (dispatch) => {
    dispatch(getUserWatchlistStart());
    fetch(`${process.env.REACT_APP_BACKEND_URL}get-watchlist/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(getUserWatchlistSuccess(data));
      })
      .catch((error) => dispatch(getUserWatchlistFailure(error.message)));
  };
};

// Delete User Watchlist
export const deleteUserWatchlistStart = () => ({
  type: UserActionTypes.DELETE_USER_WATCHLIST_START,
});

export const deleteUserWatchlistSuccess = (watchlist) => ({
  type: UserActionTypes.DELETE_USER_WATCHLIST_SUCCESS,
  payload: watchlist,
});

export const deleteUserWatchlistFailure = (errorMessage) => ({
  type: UserActionTypes.DELETE_USER_WATCHLIST_FAILURE,
  payload: errorMessage,
});

export const deleteUserWatchlistStartAsync = (id, email) => {
  return (dispatch) => {
    dispatch(deleteUserWatchlistStart());
    fetch(`${process.env.REACT_APP_BACKEND_URL}delete-watchlist/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id,
        email,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (typeof data === 'string') {
          dispatch(deleteUserWatchlistFailure(data));
          Toast.fail('Failed removing from watchlist!', 1000);
        } else {
          dispatch(deleteUserWatchlistSuccess(data));
          Toast.success('Removed from watchlist!', 1000);
        }
      })
      .catch((error) => {
        dispatch(deleteUserWatchlistFailure(error.message));
        Toast.fail('Failed removing from watchlist!', 1000);
      });
  };
};

// Update User Data
export const updateUserDataStart = () => ({
  type: UserActionTypes.UPDATE_USER_DATA_START,
});

export const updateUserDataSuccess = (currentUser) => ({
  type: UserActionTypes.UPDATE_USER_DATA_SUCCESS,
  payload: currentUser,
});

export const updateUserDataFailure = (errorMessage) => ({
  type: UserActionTypes.UPDATE_USER_DATA_FAILURE,
  payload: errorMessage,
});

export const updateUserDataStartAsync = (
  name,
  email,
  age,
  occupation,
  country,
  about
) => {
  return (dispatch) => {
    dispatch(updateUserDataStart());
    fetch(`${process.env.REACT_APP_BACKEND_URL}profile`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        age,
        occupation,
        country,
        about,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (typeof data === 'string') {
          dispatch(updateUserDataFailure(data));
          Toast.fail('Failed updating data!', 1000);
        } else {
          dispatch(updateUserDataSuccess(data));
          Toast.success('Data successfully updated!', 1000);
        }
      })
      .catch((error) => {
        dispatch(updateUserDataFailure(error.message));
        Toast.fail('Failed updating data!', 1000);
      });
  };
};
