import React from 'react';

import errorBoundaryBackground from '../../assets/error-boundary.png';

import './error-boundary.styles.scss';

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <div className='error-boundary-overlay'>
          <img
            className='error-image-container'
            src={errorBoundaryBackground}
            alt='Error Boundary Background'
          />
          <div className='error-image-text'>This Page is a Ghost!</div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
