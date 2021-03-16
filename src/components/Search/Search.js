import React, { Fragment, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { searchMoviesByTitle, searchMoviesByGenre } from "../../actions";
import { connect } from "react-redux";

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchBy, setSearchBy] = useState("Title");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
    console.log("Search movie", e.target.value);
  };

  const handleKeyUp = (e) => {
    if (e.code === "Enter") {
      handleChange(e);
      handleMovieSearch();
    }
  };
  const handleMovieSearch = () => {
    console.log(props, searchValue);
    searchBy.toLowerCase() === "title"
      ? props.searchMoviesByTitle(searchValue)
      : props.searchMoviesByGenre(searchValue);
  };

  const handleSearchBy = (e) => {
    setSearchBy(e.target.textContent);
  };

  return (
    <Fragment>
      <Row style={{ paddingTop: "1.5rem" }}>
        <Col sm={8}>
          <h2>FIND YOUR MOVIE</h2>
        </Col>
      </Row>
      <Row>
        <Col sm={8}>
          <SearchBox>
            <input
              type="search"
              placeholder="Search movies"
              style={{ height: "3rem", width: "100%" }}
              onChange={handleChange}
              onKeyUp={handleKeyUp}
            />
          </SearchBox>
        </Col>
        <Col sm={4}>
          <SearchButton variant="danger" onClick={handleMovieSearch}>
            {" "}
            SEARCH 🔍
          </SearchButton>
        </Col>
      </Row>
      <Row>
        <Col style={{ marginTop: "0.5rem" }}>
          SEARCH BY{" "}
          <Button
            variant={
              searchBy.toLowerCase() === "title" ? "danger" : "secondary"
            }
            onClick={handleSearchBy}
          >
            TITLE
          </Button>
          <Button
            variant={
              searchBy.toLowerCase() === "genres" ? "danger" : "secondary"
            }
            onClick={handleSearchBy}
          >
            GENRES
          </Button>
        </Col>
      </Row>
    </Fragment>
  );
};

const SearchBox = styled.div`
  padding-top: 1rem;
  width: 100%;
`;

const SearchButton = styled(Button)`
  margin-top: 1rem;
  height: 3rem;
  width: 100%;
`;

const mapStateToProps = (state) => ({
  movies: state.movies.sortedMovies,
});
export default connect(mapStateToProps, {
  searchMoviesByTitle,
  searchMoviesByGenre,
})(Search);
