import RecommendedMovies from "./RecommendedMovies";
import { shallow } from "enzyme";
import MovieCard from "../MovieCard/MovieCard";

test("Header should have text netflixroulette", () => {
  const component = shallow(<RecommendedMovies />);
});
