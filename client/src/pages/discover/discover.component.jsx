import React from 'react';

import './discover.styless.scss';

import DiscoverFeaturedItem from '../../components/discover-featured-item/discover-featured-item.component';

class Discover extends React.Component {
  render() {
    return (
      <div className='discover'>
        <div className='discover__trends'>
          <div className='discover__trends--movie'>
            <img
              className='discover__trends--movie--image'
              alt='Discover Background'
              src={'https://wallpaperaccess.com/full/1290120.jpg'}
            />
            <span className='discover__trends--movie--title'>
              Top TV Shows Last Week
            </span>
            <span className='discover__trends--movie--more'>
              <a
                className=''
                href=' #'
                target='_blank'
                rel='noopener noreferrer'
              >
                <span>See full review</span>
                <ion-icon name='chevron-forward-circle-outline'></ion-icon>
              </a>
            </span>
            <div className='discover__trends--movie--content'>Content</div>
          </div>

          <div className='discover__trends--tv'>
            <img
              className='discover__trends--movie--image'
              alt='Discover Background'
              src={'https://wallpaperaccess.com/full/1290120.jpg'}
            />
            <span className='discover__trends--movie--title'>
              Top TV Shows Last Week
            </span>
            <span className='discover__trends--movie--more'>
              <a
                className=''
                href=' #'
                target='_blank'
                rel='noopener noreferrer'
              >
                <span>See full review</span>
                <ion-icon name='chevron-forward-circle-outline'></ion-icon>
              </a>
            </span>
            <div className='discover__trends--movie--content'>Content</div>
          </div>
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

        <div className='discover__popular'></div>
      </div>
    );
  }
}

export default Discover;
