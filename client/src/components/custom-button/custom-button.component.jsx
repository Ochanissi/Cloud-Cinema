import React from 'react';
import { Link } from 'react-router-dom';

import './custom-button.styles.scss';

const CustomButton = ({ children, link, ...otherProps }) => {
  return link ? (
    <Link
      to={link}
      className='custom-button custom-button__inverted'
      {...otherProps}
    >
      {children}
    </Link>
  ) : (
    <button className='custom-button' {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
