import React from 'react';

import './index.scss';

const Search = ({ value, onChange, onSubmit, children }) => {
  return(
    <form className="search" onSubmit={onSubmit}>
      <label>
       <span>{children}</span>
        <input
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>
      <button type="submit">
        {children}
      </button>
    </form>
  );
};

export default Search;
