import { UserActionTypes } from './user.types';

export const setItemType = (itemType) => ({
  type: UserActionTypes.SET_ITEM_TYPE,
  payload: itemType,
});

// export const setCurrentUser = (user) => ({
//   type: UserActionTypes.SET_CURRENT_USER,
//   payload: user,
// });
