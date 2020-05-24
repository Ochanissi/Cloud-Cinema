import { UserActionTypes } from './user.types';

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
        }
      })
      .catch((error) => dispatch(signInFailure(error.message)));
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
        }
      })
      .catch((error) => dispatch(signUpFailure(error.message)));
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
