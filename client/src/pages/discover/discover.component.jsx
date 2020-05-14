import React from 'react';

import './discover.styless.scss';

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
                See full review &rsaquo;
              </a>
            </span>
            <div className='discover__trends--movie--content'>Content</div>
          </div>
        </div>

        <div className='discover__featured'></div>

        <div className='discover__popular'></div>
      </div>
    );
  }
}

export default Discover;
