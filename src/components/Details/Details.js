import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Details = (props) => {
  // const { movieDetails } = props;
  const releaseYear = new Date(props.movieDetails.release_date).getFullYear();

  return (
    <div style={{ backgroundColor: "black" }}>
      <Link to="/">
        <h4 style={{ color: "red", padding: "1rem" }}>
          <span style={{ fontWeight: "900" }}> ⬅️ netflix</span>roulette
          <span style={{ position: "absolute", right: "5%" }}>🔍</span>
        </h4>
      </Link>
      <Row>
        <Col sm={4} style={{ paddingLeft: "1rem" }}>
          <img
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "70%",
            }}
            src={props.movieDetails.poster_path}
            alt={props.movieDetails.title}
          />
        </Col>
        <Col sm={8}>
          <h2>
            {props.movieDetails.title}
            <RatingSpan>{props.movieDetails.vote_average}</RatingSpan>
          </h2>
          <p>{props.movieDetails.tagline}</p>
          <div>
            <RedSpan> {releaseYear} </RedSpan> year
            <RedSpan> {props.movieDetails.runtime} </RedSpan> min
          </div>
          <p>{props.movieDetails.overview}</p>
          <br />
          <p style={{ color: "red" }}>{props.movieDetails.genres.join(",")}</p>
        </Col>
      </Row>
    </div>
  );
};

const RatingSpan = styled.span`
  position: absolute;
  font-size: 1.5rem;
  background: black;
  color: #00ff00;
  padding: 0.4rem;
  border-radius: 50%;
  border: 1px solid white;
`;
const RedSpan = styled.span`
  color: red;
  font-size: 1.5rem;
`;

export default Details;
