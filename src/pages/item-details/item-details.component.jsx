import React from 'react';
import { connect } from 'react-redux';

import {
  fetchMovieDetailsStartAsync,
  fetchMovieCreditsStartAsync,
  fetchMovieTrailersStartAsync,
  fetchMovieReviewsStartAsync,
} from '../../redux/movie/movie.actions';

import IDHeader from '../../components/id-header/id-header.component';
import IDContent from '../../components/id-content/id-content.component';

import './item-details.styles.scss';

class ItemDetails extends React.Component {
  componentDidMount() {
    const { type, id } = this.props.match.params;

    const {
      fetchMovieDetailsStartAsync,
      fetchMovieCreditsStartAsync,
      fetchMovieTrailersStartAsync,
      fetchMovieReviewsStartAsync,
    } = this.props;
    // console.log(type, id);

    fetchMovieDetailsStartAsync(id);
    fetchMovieCreditsStartAsync(id);
    fetchMovieTrailersStartAsync(id);
    fetchMovieReviewsStartAsync(id);
  }
  render() {
    const { movieDetails } = this.props;

    return (
      <div className='item-details'>
        <IDHeader movieDetails={movieDetails} />
        <IDContent />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movieDetails: state.movie.movieDetails,
  movieCredits: state.movie.movieCredits,
  movieTrailers: state.movie.movieTrailers,
  movieReviews: state.movie.movieReviews,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMovieDetailsStartAsync: (movieId) =>
    dispatch(fetchMovieDetailsStartAsync(movieId)),
  fetchMovieCreditsStartAsync: (movieId) =>
    dispatch(fetchMovieCreditsStartAsync(movieId)),
  fetchMovieTrailersStartAsync: (movieId) =>
    dispatch(fetchMovieTrailersStartAsync(movieId)),
  fetchMovieReviewsStartAsync: (movieId) =>
    dispatch(fetchMovieReviewsStartAsync(movieId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails);
