import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const Button = ({ onClick, className, children }) => {
  return (
    <button
      onClick={onClick}
      className={className}
      >
      {children}
    </button>
  );
};

Button.defaultProps = {
  className: '',
};

export default Button;
