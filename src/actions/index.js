import {
  FETCH_UPCOMING_MOVIES,
  FETCH_TOP_RATED_MOVIES,
  SEARCH_MOVIES_BY_TITLE,
  SEARCH_MOVIES_BY_GENRE,
  FETCH_MOVIE_DETAILS,
  FETCH_MOVIES_BY_GENRE,
} from "./types";
// import { moviesDataSortedByRatings } from "../api/ratingsapi";
// import { mockData } from "../api/mock";
// import { searchDataByTitle } from "../api/searchDataByTitle";
// import { searchDataByGenre } from "../api/searchDataByGenre";

const api = `https://reactjs-cdp.herokuapp.com/movies`;

export const upcomingMovies = () => async (dispatch) => {
  try {
    const response = await fetch(
      `${api}?limit=20&sortBy=release_date&sortOrder=desc`
    );
    const movies = await response.json();
    dispatch({
      type: FETCH_UPCOMING_MOVIES,
      payload: movies.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const topRatedMovies = () => async (dispatch) => {
  try {
    const response = await fetch(
      `${api}?sortBy=vote_average&sortOrder=desc&limit=20`
    );
    const movies = await response.json();
    dispatch({
      type: FETCH_TOP_RATED_MOVIES,
      payload: movies.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const searchMoviesByTitle = (query) => async (dispatch) => {
  try {
    const response = await fetch(
      `${api}/?search=${query}&searchBy=title&limit=20`
    );
    const movies = await response.json();
    dispatch({
      type: SEARCH_MOVIES_BY_TITLE,
      payload: movies.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const searchMoviesByGenre = (query) => async (dispatch) => {
  try {
    const response = await fetch(
      `${api}/?search=${query}&searchBy=genres&limit=20`
    );
    const movies = await response.json();
    dispatch({
      type: SEARCH_MOVIES_BY_GENRE,
      payload: movies.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getMovieDetails = (movieId) => async (dispatch) => {
  try {
    const response = await fetch(`${api}/${movieId}`);
    const movie = await response.json();
    dispatch({
      type: FETCH_MOVIE_DETAILS,
      movieDetails: movie,
    });
  } catch (err) {
    //TODO: add action to handle api request failures
    console.log(err);
  }
};

export const getMoviesByGenre = (genre) => async (dispatch) => {
  try {
    console.log("getMoviesByGenre");
    const response = await fetch(
      `${api}/?search=${genre}&searchBy=genres&limit=10`
    );
    const movies = await response.json();
    dispatch({
      type: FETCH_MOVIES_BY_GENRE,
      moviesByGenre: movies.data,
    });
  } catch (err) {
    //TODO: add action to handle api request failures
    console.log(err);
  }
};
