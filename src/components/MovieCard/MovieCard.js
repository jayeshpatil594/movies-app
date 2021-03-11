import React, { Fragment } from "react";
import { Col } from "react-bootstrap";
import styled from "styled-components";

const MovieCard = (props) => {
  const { movie } = props;

  return (
    <Col>
      <img
        style={{ width: "100%" }}
        src={movie.poster_path}
        alt={movie.title}
      />
      <p>
        {movie.title}{" "}
        <RatingSpan className="rating">🌟{movie.vote_average} </RatingSpan>
      </p>
    </Col>
  );
};

const RatingSpan = styled.span`
  position: absolute;
  bottom: 3rem;
  right: 1.2rem;
  background: rgb(254, 199, 42);
  color: black;
  padding: 3px 5px;
  border-radius: 50%;
`;
export default MovieCard;
