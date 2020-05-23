import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import movieReducer from './movie/movie.reducer';
import userReducer from './user/user.reducer';
import tvReducer from './tv/tv.reducer';
import peopleReducer from './people/people.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};

const rootReducer = combineReducers({
  user: userReducer,
  movie: movieReducer,
  tv: tvReducer,
  people: peopleReducer,
});

export default persistReducer(persistConfig, rootReducer);
