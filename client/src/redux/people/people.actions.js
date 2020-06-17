import { PeopleActionTypes } from './people.types';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ path: '../../.env' });
}

// People Details
export const fetchPeopleDetailsStart = () => ({
  type: PeopleActionTypes.FETCH_PEOPLE_DETAILS_START,
});

export const fetchPeopleDetailsSuccess = (peopleDetails) => ({
  type: PeopleActionTypes.FETCH_PEOPLE_DETAILS_SUCCESS,
  payload: peopleDetails,
});

export const fetchPeopleDetailsFailure = (errorMessage) => ({
  type: PeopleActionTypes.FETCH_PEOPLE_DETAILS_FAILURE,
  payload: errorMessage,
});

export const fetchPeopleDetailsStartAsync = (peopleId) => {
  return (dispatch) => {
    dispatch(fetchPeopleDetailsStart());

    fetch(
      `https://api.themoviedb.org/3/person/${peopleId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => dispatch(fetchPeopleDetailsSuccess(data)))
      .catch((error) => dispatch(fetchPeopleDetailsFailure(error.message)));
  };
};

// People Movie Credits
export const fetchPeopleMovieCreditsStart = () => ({
  type: PeopleActionTypes.FETCH_PEOPLE_MOVIE_CREDITS_START,
});

export const fetchPeopleMovieCreditsSuccess = (peopleMovieCredits) => ({
  type: PeopleActionTypes.FETCH_PEOPLE_MOVIE_CREDITS_SUCCESS,
  payload: peopleMovieCredits,
});

export const fetchPeopleMovieCreditsFailure = (errorMessage) => ({
  type: PeopleActionTypes.FETCH_PEOPLE_MOVIE_CREDITS_FAILURE,
  payload: errorMessage,
});

export const fetchPeopleMovieCreditsStartAsync = (peopleId) => {
  return (dispatch) => {
    dispatch(fetchPeopleMovieCreditsStart());

    fetch(
      `https://api.themoviedb.org/3/person/${peopleId}/movie_credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) =>
        dispatch(fetchPeopleMovieCreditsSuccess({ ...data.cast, ...data.crew }))
      )
      .catch((error) =>
        dispatch(fetchPeopleMovieCreditsFailure(error.message))
      );
  };
};

// People TV Credits
export const fetchPeopleTVCreditsStart = () => ({
  type: PeopleActionTypes.FETCH_PEOPLE_TV_CREDITS_START,
});

export const fetchPeopleTVCreditsSuccess = (peopleTVCredits) => ({
  type: PeopleActionTypes.FETCH_PEOPLE_TV_CREDITS_SUCCESS,
  payload: peopleTVCredits,
});

export const fetchPeopleTVCreditsFailure = (errorMessage) => ({
  type: PeopleActionTypes.FETCH_PEOPLE_TV_CREDITS_FAILURE,
  payload: errorMessage,
});

export const fetchPeopleTVCreditsStartAsync = (peopleId) => {
  return (dispatch) => {
    dispatch(fetchPeopleTVCreditsStart());

    fetch(
      `https://api.themoviedb.org/3/person/${peopleId}/tv_credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) =>
        dispatch(fetchPeopleTVCreditsSuccess({ ...data.cast, ...data.crew }))
      )
      .catch((error) => dispatch(fetchPeopleTVCreditsFailure(error.message)));
  };
};
