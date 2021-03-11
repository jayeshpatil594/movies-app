import {
  FETCH_TOP_RATED_MOVIES,
  FETCH_UPCOMING_MOVIES,
  FETCH_SEARCH_MOVIES,
} from "../actions/types";

const initialState = {
  sortedMovies: [],
};
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TOP_RATED_MOVIES:
      return {
        ...state,
        sortedMovies: action.payload,
      };
    case FETCH_UPCOMING_MOVIES:
      return {
        ...state,
        sortedMovies: action.payload,
      };
    case FETCH_SEARCH_MOVIES:
      return {
        ...state,
        sortedMovies: action.payload,
      };
    default:
      return state;
  }
};
