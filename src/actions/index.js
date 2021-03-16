import {
  FETCH_UPCOMING_MOVIES,
  FETCH_TOP_RATED_MOVIES,
  SEARCH_MOVIES_BY_TITLE,
  SEARCH_MOVIES_BY_GENRE,
  FETCH_MOVIE_DETAILS,
  FETCH_MOVIES_BY_GENRE,
} from "./types";
import { moviesDataSortedByRatings } from "../api/ratingsapi";
import { mockData } from "../api/mock";
import { searchDataByTitle } from "../api/searchDataByTitle";
import { searchDataByGenre } from "../api/searchDataByGenre";
import { movieDetails } from "../api/movieDetails";
import { moviesByGenre } from "../api/moviesByGenre";

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

export const searchMoviesByTitle = (query) => (dispatch) => {
  dispatch({
    type: SEARCH_MOVIES_BY_TITLE,
    payload: searchDataByTitle.data,
  });
};

export const searchMoviesByGenre = (query) => (dispatch) => {
  dispatch({
    type: SEARCH_MOVIES_BY_GENRE,
    payload: searchDataByGenre.data,
  });
};

export const getMovieDetails = (movieId) => async (dispatch) => {
  const response = await fetch(`${api}/${movieId}`);
  const movie = await response.json();

  dispatch({
    type: FETCH_MOVIE_DETAILS,
    movieDetails: movie,
    moviesByGenre: moviesByGenre.data,
  });
};

export const getMoviesByGenre = (genre) => async (dispatch) => {
  const response = await fetch(
    `${api}/?search=${genre}&searchBy=genres&limit=10`
  );
  const movies = await response.json();
  console.log(movies);
  dispatch({
    type: FETCH_MOVIES_BY_GENRE,
    moviesByGenre: movies.data,
  });
};
