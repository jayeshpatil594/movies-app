import { FETCH_MOVIE_DETAILS, FETCH_MOVIES_BY_GENRE } from "../actions/types";

const initialState = {};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIE_DETAILS:
      return {
        ...state,
        movieDetails: action.movieDetails,
      };
    case FETCH_MOVIES_BY_GENRE:
      return {
        ...state,
        moviesByGenre: action.moviesByGenre,
      };
    default:
      return state;
  }
};
