import React from 'react';
import { connect } from 'react-redux';

import {
  fetchMovieDetailsStartAsync,
  fetchMovieCreditsStartAsync,
  fetchMovieTrailersStartAsync,
  fetchMovieReviewsStartAsync,
} from '../../redux/movie/movie.actions';

import {
  fetchTVDetailsStartAsync,
  fetchTVCreditsStartAsync,
  fetchTVTrailersStartAsync,
  fetchTVReviewsStartAsync,
} from '../../redux/tv/tv.actions';

import IDHeader from '../../components/id-header/id-header.component';
import IDContent from '../../components/id-content/id-content.component';

import './item-details.styles.scss';

class ItemDetails extends React.Component {
  componentDidMount() {
    const { type, id } = this.props.match.params;

    if (type === 'movie') return this.handleMovieFetch(id);
    if (type === 'tv') return this.handleTVFetch(id);
  }

  handleMovieFetch = (id) => {
    const {
      fetchMovieDetailsStartAsync,
      fetchMovieCreditsStartAsync,
      fetchMovieTrailersStartAsync,
      fetchMovieReviewsStartAsync,
    } = this.props;

    fetchMovieDetailsStartAsync(id);
    fetchMovieCreditsStartAsync(id);
    fetchMovieTrailersStartAsync(id);
    fetchMovieReviewsStartAsync(id);
  };

  handleTVFetch = (id) => {
    const {
      fetchTVDetailsStartAsync,
      fetchTVCreditsStartAsync,
      fetchTVTrailersStartAsync,
      fetchTVReviewsStartAsync,
    } = this.props;

    fetchTVDetailsStartAsync(id);
    fetchTVCreditsStartAsync(id);
    fetchTVTrailersStartAsync(id);
    fetchTVReviewsStartAsync(id);
  };

  render() {
    const { movieDetails, TVDetails } = this.props;
    const { type, id } = this.props.match.params;

    let itemDetails;
    if (type === 'movie') itemDetails = movieDetails;
    if (type === 'tv') itemDetails = TVDetails;

    return (
      <div className='item-details'>
        <IDHeader itemDetails={itemDetails} />
        <IDContent itemDetails={itemDetails} itemType={type} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movieDetails: state.movie.movieDetails,
  TVDetails: state.tv.TVDetails,
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

  fetchTVDetailsStartAsync: (TVId) => dispatch(fetchTVDetailsStartAsync(TVId)),
  fetchTVCreditsStartAsync: (TVId) => dispatch(fetchTVCreditsStartAsync(TVId)),
  fetchTVTrailersStartAsync: (TVId) =>
    dispatch(fetchTVTrailersStartAsync(TVId)),
  fetchTVReviewsStartAsync: (TVId) => dispatch(fetchTVReviewsStartAsync(TVId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails);
