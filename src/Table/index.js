import React from 'react';
import './index.scss'

import Button from '../Button';

const Table = ({ list, onDismiss }) => {
  return (
    <div className="table">
      {list.map( item =>
        <div key={item.objectID} className="list-item" className="table-row">
          <span className="title">
            <a href={item.url}>{item.title}</a>
          </span>
          <span className="author">{item.author}</span>
          <span className="comments">{item.num_comments}</span>
          <span className="points">{item.points}</span>
          <span className="dismiss">
            <Button
              onClick={() => onDismiss(item.objectID)}
              className="button-inline"
            >
              Dismiss
            </Button>
          </span>
        </div>
      )}
    </div>
  );
};

export default Table;
