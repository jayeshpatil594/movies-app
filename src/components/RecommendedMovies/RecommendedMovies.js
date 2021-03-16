import React, { Fragment } from "react";
import { Row } from "react-bootstrap";
import MovieCard from "../MovieCard/MovieCard";

const RecommendedMovies = (props) => {
  return (
    <Fragment>
      <div style={{ padding: "1rem" }}>
        Films by {props.movieDetails.genres[0]} genre
      </div>
      <Row xs={1} sm={2} md={3} lg={4}>
        {props.moviesByGenre.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </Row>
    </Fragment>
  );
};

export default RecommendedMovies;
