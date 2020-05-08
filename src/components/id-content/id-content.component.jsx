import React from 'react';

import './id-content.styles.scss';

const IDContent = () => (
  <div className='id-content'>
    <div className='id-content__summary'>
      <h2 className='id-content__title'>Summary</h2>
      <p className='id-content__summary--content'>
        All unemployed, Ki-taek's family takes peculiar interest in the wealthy
        and glamorous Parks for their livelihood until they get entangled in an
        unexpected incident.
      </p>
    </div>

    <div className='id-content__cast'>
      <h2 className='id-content__title'>Cast</h2>
      <div className='id-content__content'>cast</div>
      <div>cast</div>
      <div>cast</div>
    </div>
    <div className='id-content__trailers'>
      <h2 className='id-content__title'>Trailers</h2>
      <div className='id-content__trailers--content'>
        <p>content</p>
        <p>content</p>
        <p>content</p>
      </div>
    </div>
    <div className='id-content__reviews'>
      <h2 className='id-content__title'>Reviews</h2>
      <div className='id-content__reviews--content'>
        <p>bla bla</p>
        <p>bla bla</p>
        <p>bla bla</p>
        <p>bla bla</p>
      </div>
    </div>
  </div>
);

export default IDContent;
