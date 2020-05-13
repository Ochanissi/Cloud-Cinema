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

import {
  fetchPeopleDetailsStartAsync,
  fetchPeopleMovieCreditsStartAsync,
  fetchPeopleTVCreditsStartAsync,
} from '../../redux/people/people.actions';

import IDHeader from '../../components/id-header/id-header.component';
import IDContent from '../../components/id-content/id-content.component';

import './item-details.styles.scss';

class ItemDetails extends React.Component {
  componentDidMount() {
    const { id, type } = this.props.match.params;

    this.handleDataFetch(id, type);
  }

  // Checks if the component received new props and refetches data
  componentDidUpdate(prevProps) {
    const { id, type } = this.props.match.params;

    if (id !== prevProps.match.params.id) {
      this.handleDataFetch(id, type);
      console.log(id, type);
    }
  }

  handleDataFetch = (id, type) => {
    if (type === 'movie') return this.handleMovieFetch(id);
    if (type === 'tv') return this.handleTVFetch(id);
    if (type === 'people') return this.handlePeopleFetch(id);
  };

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

  handlePeopleFetch = (id) => {
    const {
      fetchPeopleDetailsStartAsync,
      fetchPeopleMovieCreditsStartAsync,
      fetchPeopleTVCreditsStartAsync,
    } = this.props;

    fetchPeopleDetailsStartAsync(id);
    fetchPeopleMovieCreditsStartAsync(id);
    fetchPeopleTVCreditsStartAsync(id);
  };

  render() {
    const { movieDetails, TVDetails, peopleDetails } = this.props;
    const { type } = this.props.match.params;

    let itemDetails;
    if (type === 'movie') itemDetails = movieDetails;
    if (type === 'tv') itemDetails = TVDetails;
    if (type === 'people') itemDetails = peopleDetails;

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
  peopleDetails: state.people.peopleDetails,
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

  fetchPeopleDetailsStartAsync: (peopleId) =>
    dispatch(fetchPeopleDetailsStartAsync(peopleId)),
  fetchPeopleMovieCreditsStartAsync: (peopleId) =>
    dispatch(fetchPeopleMovieCreditsStartAsync(peopleId)),
  fetchPeopleTVCreditsStartAsync: (peopleId) =>
    dispatch(fetchPeopleTVCreditsStartAsync(peopleId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails);
