import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
  itemType: 'MOVIE',
  // currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_ITEM_TYPE:
      return {
        ...state,
        itemType: action.payload,
      };

    // case UserActionTypes.SET_CURRENT_USER:
    //   return {
    //     ...state,
    //     currentUser: action.payload,
    //   };

    default:
      return state;
  }
};

export default userReducer;
