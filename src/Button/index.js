import React from 'react';

import './index.scss';

const Button = ({ onClick, className = '', children }) => {
  return (
    <button
      onClick={onClick}
      className={className}
      >
      {children}
    </button>
  );
};

export default Button;
