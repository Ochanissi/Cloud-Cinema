import React from 'react';
import { connect } from 'react-redux';

import { getMoviesUpcoming } from '../redux/movie/movie.actions';

import Navbar from '../components/navbar/navbar.component';
import Header from '../components/header/header.component';
import Controller from '../components/controller/controller.component';
import Featured from '../components/featured/featured.component';
import Footer from '../components/footer/footer.component';

import './homepage.styles.scss';

require('dotenv').config();

class HomePage extends React.Component {
  componentDidMount() {
    this.handleMovieFetch();
  }

  // Fetches Movie Data
  handleMovieFetch = () => {
    console.log(process.env.REACT_APP_TMDB_API_KEY);
    // this.props.getMoviesUpcoming(
    //   `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
    // );
    // console.log(this.props.moviesUpcoming);

    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((x) => console.log(x));
  };

  render() {
    return (
      <div className='homepage'>
        <Navbar />
        <Header />
        <Controller />
        <Featured />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  // currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  getMoviesUpcoming: (url) => dispatch(getMoviesUpcoming(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
