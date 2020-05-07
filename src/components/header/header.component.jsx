import React from 'react';
import { connect } from 'react-redux';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';

import { fetchMoviesGenreStartAsync } from '../../redux/movie/movie.actions';
import { fetchTVGenreStartAsync } from '../../redux/tv/tv.actions';

import './header.styles.scss';

class Header extends React.Component {
  componentDidMount() {
    const { fetchMoviesGenreStartAsync, fetchTVGenreStartAsync } = this.props;
    fetchMoviesGenreStartAsync();
    fetchTVGenreStartAsync();
  }

  handleBackgroundItem = () => {
    const {
      itemType,
      moviesNowPlaying,
      moviesGenre,
      TVOnTheAir,
      TVGenre,
    } = this.props;

    let backgroundItem;

    if (itemType === 'MOVIE') {
      backgroundItem = moviesNowPlaying.slice(0, 3) || [];

      if (backgroundItem && moviesGenre) {
        backgroundItem.forEach((item) => {
          item.genre_ids = moviesGenre
            .filter((x) => x.id === item.genre_ids[0])
            .map((x) => x.name);
        });
      }
      // console.log(backgroundItem);
    }

    if (itemType === 'TV') {
      backgroundItem = TVOnTheAir.slice(0, 3) || [];

      if (backgroundItem && TVGenre) {
        backgroundItem.forEach((item) => {
          item.genre_ids = TVGenre.filter(
            (x) => x.id === item.genre_ids[0]
          ).map((x) => x.name);
        });
      }
      // console.log(backgroundItem);
    }

    return backgroundItem;
  };

  render() {
    const backgroundItem = this.handleBackgroundItem();

    return (
      <CarouselProvider
        className='header'
        naturalSlideWidth={100}
        naturalSlideHeight={50}
        totalSlides={backgroundItem.length}
        isPlaying={true}
        infinite={true}
        // isIntrinsicHeight={true}
      >
        <Slider>
          {backgroundItem.map((x, i) => {
            return (
              <Slide index={i} key={i}>
                <a href='# ' className='header__image-container'>
                  <img
                    className='header__image-container--image'
                    alt='Header Background'
                    src={`https://image.tmdb.org/t/p/original${
                      x.backdrop_path || x.poster_path
                    }`}
                  />
                </a>
                <div className='header__text'>
                  <span className='header__text--type'>Playing now</span>
                  <span className='header__text--title'>
                    {x.title || x.name}
                  </span>
                  <span className='header__text--subtitle'>
                    {x.genre_ids || 'Generic'} | {x.vote_average * 10}% Rating
                  </span>
                </div>
              </Slide>
            );
          })}
        </Slider>

        <div className='swiper-pagination'></div>
      </CarouselProvider>
    );
  }
}

const mapStateToProps = (state) => ({
  itemType: state.user.itemType,

  ismoviesNowPlayingFetching: state.movie.ismoviesNowPlayingFetching,
  moviesNowPlaying: state.movie.moviesNowPlaying,
  moviesGenre: state.movie.moviesGenre,
  ismoviesGenreFetching: state.movie.ismoviesGenreFetching,

  isTVOnTheAirFetching: state.tv.isTVOnTheAirFetching,
  TVOnTheAir: state.tv.TVOnTheAir,
  TVGenre: state.tv.TVGenre,
  isTVGenreFetching: state.tv.isTVGenreFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMoviesGenreStartAsync: () => dispatch(fetchMoviesGenreStartAsync()),
  fetchTVGenreStartAsync: () => dispatch(fetchTVGenreStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
