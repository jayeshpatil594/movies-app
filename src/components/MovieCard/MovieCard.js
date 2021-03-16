import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MovieCard = (props) => {
  const { movie } = props;
  const releaseYear = new Date(movie.release_date).getFullYear();
  return (
    <Col>
      <Link to={`/movies-app/details/${movie.id}`}>
        <div style={{ paddingBottom: "0.5rem" }}>
          <img
            style={{ width: "100%" }}
            src={movie.poster_path}
            alt={movie.title}
          />
        </div>

        <p>
          {movie.title} <RatingSpan>☆{movie.vote_average} </RatingSpan>{" "}
          <span
            style={{
              marginLeft: "1rem",
              color: "white",
              border: "1px solid white",
              borderRadius: "10%",
              paddingLeft: "0.4rem",
              paddingRight: "0.4rem",
            }}
          >
            {releaseYear}
          </span>
        </p>
      </Link>
    </Col>
  );
};

const RatingSpan = styled.span`
  position: absolute;
  top: 0;
  right: 15px;
  background: black;
  color: #00ff00;
  padding: 3px 5px;
  border-radius: 50%;
`;
export default MovieCard;
