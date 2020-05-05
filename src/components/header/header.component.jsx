import React from 'react';
import { connect } from 'react-redux';
import Swiper from 'swiper';

import 'swiper/css/swiper.css';

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

    // Initiates carousels
    (() => {
      // eslint-disable-next-line
      const swiper = new Swiper('.header', {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 0,
        observer: true,
        autoplay: {
          delay: 3000,
        },
        speed: 1000,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    })();

    return (
      <div className='header'>
        <div className='swiper-wrapper'>
          {backgroundItem.map((x, i) => {
            return (
              <div className='swiper-slide' key={x.id}>
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
                    {x.genre_ids || 'General'} | {x.vote_average * 10}% Rating
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className='swiper-pagination'></div>
      </div>
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
