import React from 'react';
import { sortBy } from 'lodash';
import classNames from 'classnames';
import './index.scss'

import Button from '../Button';


const SORTS = {
  NONE: list => list,
  TITLE: list => sortBy(list, 'title'),
  AUTHOR: list => sortBy(list, 'author'),
  COMMENTS: list => sortBy(list, 'num_comments').reverse(),
  POINTS: list => sortBy(list, 'points').reverse()
};

const Sort = ({ sortKey, onSort, activeSortKey, children }) => {
  const sortClass = classNames(
    'button-inline',
    { 'button-active': sortKey === activeSortKey }
  );

  return (
    <Button
      className={sortClass}
      onClick={() => onSort(sortKey)}>
    {children}
    </Button>
  );
};

const Table = ({ list, sortKey, onSort, isSortReverse, onDismiss }) => {
  const sortedList = SORTS[sortKey](list);
  const reverseSortedList = isSortReverse ? sortedList.reverse() : sortedList;

  return (
    <div className="table">
      <div className="table-header">
        <span className="title">
          <Sort
            sortKey={'TITLE'}
            onSort={onSort}
            activeSortKey={sortKey}
          >
          Title
          </Sort>
        </span>
        <span className="author">
          <Sort
            sortKey={'AUTHOR'}
            onSort={onSort}
            activeSortKey={sortKey}
          >
          Author
          </Sort>
        </span>
        <span className="comments">
          <Sort
            sortKey={'COMMENTS'}
            onSort={onSort}
            activeSortKey={sortKey}
          >
          Comments
          </Sort>
        </span>
        <span className="points">
          <Sort
            sortKey={'POINTS'}
            onSort={onSort}
            activeSortKey={sortKey}
          >
          Points
          </Sort>
        </span>
        <span className="dismiss">Archive</span>
      </div>
      {reverseSortedList.map( item =>
        <div key={item.objectID} className="list-item table-row">
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
