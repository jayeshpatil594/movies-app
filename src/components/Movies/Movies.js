import React, { Component, Fragment } from "react";
import MovieCard from "../MovieCard/MovieCard";
import { Container, Row, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";
import {
  upcomingMovies,
  topRatedMovies,
  searchMoviesByTitle,
  searchMoviesByGenre,
} from "../../actions";

class Movies extends Component {
  constructor() {
    super();
    this.state = {
      showUpcomingMovies: true,
      showTopRatedMovies: false,
    };
  }

  componentDidMount() {
    // this.setState({
    //   movies: mockData.data,
    // });
    console.log(this.props);
    this.props.upcomingMovies();
  }

  sortMovies = (e) => {
    console.log(e);
    if (e.target.textContent === "RATING") {
      this.props.topRatedMovies();
      this.setState({
        showUpcomingMovies: false,
        showTopRatedMovies: true,
      });
    } else {
      this.props.upcomingMovies();
      this.setState({
        showUpcomingMovies: true,
        showTopRatedMovies: false,
      });
    }
  };

  render() {
    const { movies } = this.props;
    const { showTopRatedMovies, showUpcomingMovies } = this.state;
    console.log(this.props);
    return (
      <Fragment>
        <Container style={{ paddingTop: "1rem" }}>
          <Row style={{ paddingBottom: "1rem" }}>
            <Col md={{ span: "4", offset: "8" }}>
              SORT BY{" "}
              <Button
                onClick={(e) => this.sortMovies(e)}
                variant={showUpcomingMovies ? "danger" : "secondary"}
              >
                {" "}
                RELEASE DATE
              </Button>
              <Button
                variant={showTopRatedMovies ? "danger" : "secondary"}
                onClick={this.sortMovies}
              >
                RATING
              </Button>
            </Col>
          </Row>
          <Row xs={1} md={3} lg={4}>
            {movies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </Row>
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies.sortedMovies,
});

export default connect(mapStateToProps, {
  upcomingMovies,
  topRatedMovies,
  searchMoviesByTitle,
  searchMoviesByGenre,
})(Movies);
