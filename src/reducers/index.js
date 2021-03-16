import { combineReducers } from "redux";
import movieDetails from "./movieDetails";
import sortMovies from "./sortMovies";

export default combineReducers({
  movieDetails: movieDetails,
  movies: sortMovies,
});
