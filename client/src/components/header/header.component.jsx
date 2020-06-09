import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import MediaQuery from 'react-responsive';

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

    if (itemType === 'movie') {
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

    if (itemType === 'tv') {
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

  // handleImageSize = () => {
  //   const mediaLarge = useMediaQuery({ maxDeviceWidth: 1300 });
  //   const MediaMedium = useMediaQuery({ maxDeviceWidth: 800 });
  //   const mediaSmall = useMediaQuery({ maxDeviceWidth: 500 });

  //   const imageSize = mediaLarge
  //     ? 'w1280'
  //     : MediaMedium
  //     ? 'w780'
  //     : mediaSmall
  //     ? 'w300'
  //     : 'original';

  //   return imageSize;
  // };

  render() {
    const backgroundItem = this.handleBackgroundItem();
    const { itemType } = this.props;

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
          {backgroundItem.map((item, i) => {
            return (
              <Slide index={i} key={i}>
                <Link
                  key={item.id}
                  to={`/details/${itemType.toLowerCase()}/${item.id}`}
                  className='header__image-container'
                >
                  <MediaQuery minDeviceWidth={1301}>
                    <img
                      className='header__image-container--image'
                      alt='Header Background'
                      src={`https://image.tmdb.org/t/p/w1280${
                        item.backdrop_path || item.poster_path
                      }`}
                    />
                  </MediaQuery>
                  <MediaQuery maxDeviceWidth={1300}>
                    <img
                      className='header__image-container--image'
                      alt='Header Background'
                      src={`https://image.tmdb.org/t/p/w780${
                        item.backdrop_path || item.poster_path
                      }`}
                    />
                  </MediaQuery>
                  {/* <MediaQuery maxDeviceWidth={800}>
                    <img
                      className='header__image-container--image'
                      alt='Header Background'
                      src={`https://image.tmdb.org/t/p/w780${
                        item.backdrop_path || item.poster_path
                      }`}
                    />
                  </MediaQuery> */}
                  {/* <MediaQuery maxDeviceWidth={500}>
                    <img
                      className='header__image-container--image'
                      alt='Header Background'
                      src={`https://image.tmdb.org/t/p/w300${
                        item.backdrop_path || item.poster_path
                      }`}
                    />
                  </MediaQuery> */}
                  <div className='header__text'>
                    <span className='header__text--type'>Playing now</span>
                    <span className='header__text--title'>
                      {item.title || item.name}
                    </span>
                    <span className='header__text--subtitle'>
                      {item.genre_ids || 'Generic'} | {item.vote_average * 10}%
                      Rating
                    </span>
                  </div>
                </Link>
              </Slide>
            );
          })}
        </Slider>
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
