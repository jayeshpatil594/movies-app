import {
  FETCH_UPCOMING_MOVIES,
  FETCH_TOP_RATED_MOVIES,
  FETCH_SEARCH_MOVIES,
} from "./types";
import { moviesDataSortedByRatings } from "../api/ratingsapi";
import { mockData } from "../api/mock";
import { searchData } from "../api/searchData";

const api = `https://reactjs-cdp.herokuapp.com/movies`;

export const upcomingMovies = () => (dispatch) => {
  dispatch({
    type: FETCH_UPCOMING_MOVIES,
    payload: mockData.data,
  });
};

export const topRatedMovies = () => (dispatch) => {
  dispatch({
    type: FETCH_TOP_RATED_MOVIES,
    payload: moviesDataSortedByRatings.data,
  });
};

export const searchMovies = (query) => (dispatch) => {
  dispatch({
    type: FETCH_SEARCH_MOVIES,
    payload: searchData.data,
  });
};
