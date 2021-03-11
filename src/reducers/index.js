import { combineReducers } from "redux";
import sortMovies from "./sortMovies";

export default combineReducers({
  movies: sortMovies,
});
