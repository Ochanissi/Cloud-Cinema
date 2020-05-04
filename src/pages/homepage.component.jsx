import React from 'react';
import { connect } from 'react-redux';

// import { fetchMoviesUpcomingStartAsync } from '../redux/movie/movie.actions';

import Navbar from '../components/navbar/navbar.component';
import Header from '../components/header/header.component';
import Controller from '../components/controller/controller.component';
import Featured from '../components/featured/featured.component';
import Footer from '../components/footer/footer.component';

import './homepage.styles.scss';

class HomePage extends React.Component {
  componentDidMount() {
    // const { fetchMoviesUpcomingStartAsync } = this.props;
    // fetchMoviesUpcomingStartAsync();
    // console.log(this.props);
  }

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
  // isMoviesUpcomingFetching:
});

const mapDispatchToProps = (dispatch) => ({
  // fetchMoviesUpcomingStartAsync: () =>
  //   dispatch(fetchMoviesUpcomingStartAsync()),
  // getMoviesUpcoming: (url) => dispatch(getMoviesUpcoming(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
