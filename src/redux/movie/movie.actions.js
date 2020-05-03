import { MovieActionTypes } from './movie.types';

const saveMoviesUpcoming = (moviesUpcoming) => ({
  type: MovieActionTypes.GET_MOVIES_UPCOMING,
  payload: moviesUpcoming,
});

export const getMoviesUpcoming = (url) => {
  return (dispatch) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => dispatch(saveMoviesUpcoming(data)))
      .catch((error) => console.log(error));
  };
};
