import { combineReducers } from 'redux';

import movieReducer from './movie/movie.reducer';
import userReducer from './user/user.reducer';
import tvReducer from './tv/tv.reducer';
import peopleReducer from './people/people.reducer';

export default combineReducers({
  user: userReducer,
  movie: movieReducer,
  tv: tvReducer,
  people: peopleReducer,
});
