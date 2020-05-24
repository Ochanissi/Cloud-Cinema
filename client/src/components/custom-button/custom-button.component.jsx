import React from 'react';
import { Link } from 'react-router-dom';

import './custom-button.styles.scss';

const CustomButton = ({ children, link, profile, ...otherProps }) => {
  return link ? (
    <Link
      to={link}
      className={`custom-button custom-button__inverted ${
        profile ? 'custom-button__profile' : null
      }`}
      {...otherProps}
    >
      {children}
    </Link>
  ) : (
    <button
      className={`custom-button ${profile ? 'custom-button__profile' : null}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
