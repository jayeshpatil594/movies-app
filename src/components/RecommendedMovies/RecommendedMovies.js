import React, { Fragment } from "react";
import { Row } from "react-bootstrap";
import MovieCard from "../MovieCard/MovieCard";

const RecommendedMovies = (props) => {
  return (
    <Fragment>
      <div style={{ padding: "1rem" }}>Recommended movies</div>
      <Row xs={1} sm={2} md={3} lg={4}>
        {props.moviesByGenre && props.moviesByGenre.length > 0 ? (
          props.moviesByGenre.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))
        ) : (
          <div>No results found</div>
        )}
      </Row>
    </Fragment>
  );
};

export default RecommendedMovies;
