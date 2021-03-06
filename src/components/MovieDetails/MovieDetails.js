import React, { Component, Fragment } from "react";
import { getMovieDetails, getMoviesByGenre } from "../../actions";
import { connect } from "react-redux";
import Details from "../Details/Details";
import RecommendedMovies from "../RecommendedMovies/RecommendedMovies";

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }
  componentDidMount() {
    console.log(this.props);
    if (typeof this.props.getMovieDetails === "function")
      this.props.getMovieDetails(this.props.match.params.movieId);
    if (
      typeof this.props.getMoviesByGenre === "function" &&
      this.props.movieDetails
    )
      this.props.getMoviesByGenre(this.props.movieDetails.genres[0]);
    this.setState({
      loading: false,
    });
  }
  render() {
    console.log(this.props);
    return (
      <Fragment>
        {this.state.loading ? (
          <h1>loading...</h1>
        ) : (
          <Fragment>
            <Details {...this.props} />
            <RecommendedMovies {...this.props} />
          </Fragment>
        )}
        {/* <Details {...this.props} />
        <RecommendedMovies {...this.props} /> */}
        {/* {JSON.stringify(this.props)} */}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  movieDetails: state.movieDetails.movieDetails,
  moviesByGenre: state.movieDetails.moviesByGenre,
});

export default connect(mapStateToProps, { getMovieDetails, getMoviesByGenre })(
  MovieDetails
);
