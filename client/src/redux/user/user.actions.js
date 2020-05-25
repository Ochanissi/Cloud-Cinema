import { UserActionTypes } from './user.types';

import Toast from 'light-toast';

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

    fetch('http://localhost:5000/sign-in', {
      method: 'post',
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

    fetch('http://localhost:5000/sign-up', {
      method: 'post',
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
    fetch('http://localhost:5000/watched', {
      method: 'post',
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
        dispatch(postUserWatchedSuccess(data));
        Toast.success('Added to watched history!', 1000);
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
    fetch(`http://localhost:5000/get-watched/`, {
      method: 'post',
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

export const deleteUserWatchedStartAsync = (id) => {
  return (dispatch) => {
    dispatch(deleteUserWatchedStart());
    fetch('http://localhost:5000/delete-watched/', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(deleteUserWatchedSuccess(data));
        Toast.success('Deleted from watched history!', 1000);
      })
      .catch((error) => {
        dispatch(deleteUserWatchedFailure(error.message));
        Toast.fail('Failed deleting from watched history!', 1000);
      });
  };
};
