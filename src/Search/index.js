import React, { Component } from 'react';

import './index.scss';

class Search extends Component {

  componentDidMount() {
    if(this.input) {
      this.input.focus();
    }
  }

  render() {
    const { value, onChange, onSubmit, children } = this.props;

    return(
      <form className="search" onSubmit={onSubmit}>
        <label>
          <span>{children}</span>
          <input
            type="text"
            value={value}
            onChange={onChange}
            ref={(el) => { this.input = el; } }
          />
        </label>
        <button type="submit">
          {children}
        </button>
      </form>
    );
  }
}


export default Search;
