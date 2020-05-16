import React from 'react';
import { connect } from 'react-redux';

import { fetchMoviesTrendingStartAsync } from '../../redux/movie/movie.actions';
import {
  fetchTVTrendingStartAsync,
  fetchTVTrendingTodayStartAsync,
} from '../../redux/tv/tv.actions';

import DiscoverFeaturedItem from '../../components/discover-featured-item/discover-featured-item.component';
import DiscoverTrendsItem from '../../components/discover-trends-item/discover-trends-item.component';

import './discover.styless.scss';

class Discover extends React.Component {
  componentDidMount() {
    const {
      fetchMoviesTrendingStartAsync,
      fetchTVTrendingStartAsync,
      fetchTVTrendingTodayStartAsync,
    } = this.props;

    fetchMoviesTrendingStartAsync();
    fetchTVTrendingStartAsync();
    fetchTVTrendingTodayStartAsync();
  }

  render() {
    const { moviesTrending, TVTrending, TVTrendingToday } = this.props;

    return (
      <div className='discover'>
        <div className='discover__trends'>
          <DiscoverTrendsItem
            itemTitle={'Movies Trending This Week'}
            itemType={'movie'}
            itemContent={moviesTrending}
          />
          <DiscoverTrendsItem
            itemTitle={'TV Shows Trending This Week'}
            itemType={'tv'}
            itemContent={TVTrending}
          />
        </div>

        <div className='discover__featured'>
          <DiscoverFeaturedItem
            name={'Upcoming Movies'}
            icon={'time'}
            image={'/ww7eC3BqSbFsyE5H5qMde8WkxJ2.jpg'}
          />
          <DiscoverFeaturedItem
            name={'Popular Movies'}
            icon={'trending-up'}
            image={'/ocUrMYbdjknu2TwzMHKT9PBBQRw.jpg'}
          />
          <DiscoverFeaturedItem
            name={'Now Playing Movies'}
            icon={'play'}
            image={'/9sXHqZTet3Zg5tgcc0hCDo8Tn35.jpg'}
          />
          <DiscoverFeaturedItem
            name={'Top Rated Movies'}
            icon={'trophy'}
            image={'/7VrRna8S3x6xbijooeBmxqvHXiu.jpg'}
          />
          <DiscoverFeaturedItem
            name={'Airing Today TV Shows'}
            icon={'play'}
            image={'/8YWQ1JrA4fihMwf9kYvGtd6mSe0.jpg'}
          />
          <DiscoverFeaturedItem
            name={'Popular TV Shows'}
            icon={'trending-up'}
            image={'/jC1KqsFx8ZyqJyQa2Ohi7xgL7XC.jpg'}
          />
          <DiscoverFeaturedItem
            name={'On The Air TV Shows'}
            icon={'time'}
            image={'/eV3XnUul4UfIivz3kxgeIozeo50.jpg'}
          />
          <DiscoverFeaturedItem
            name={'Top Rated TV Shows'}
            icon={'trophy'}
            image={'/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg'}
          />
        </div>

        <div className='discover__popular'>
          <DiscoverTrendsItem
            itemTitle={'TV Shows Trending Today'}
            itemType={'tv'}
            popular={true}
            itemContent={TVTrendingToday}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  moviesTrending: state.movie.moviesTrending,
  TVTrending: state.tv.TVTrending,
  TVTrendingToday: state.tv.TVTrendingToday,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMoviesTrendingStartAsync: () =>
    dispatch(fetchMoviesTrendingStartAsync()),
  fetchTVTrendingStartAsync: () => dispatch(fetchTVTrendingStartAsync()),
  fetchTVTrendingTodayStartAsync: () =>
    dispatch(fetchTVTrendingTodayStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Discover);
