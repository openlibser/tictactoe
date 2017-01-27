import React from 'react';
import styles from './row.css';
import Cell from '../Cell';

function Row({ cells, onCellClick }) {
  return (<div className={styles.row}>
    {
      cells.map(cell =>
        <Cell
          key={cell.id}
          type={cell.type}
          state={cell.state}
          onclick={onCellClick}
        />,
      )
    }
  </div>);
}

Row.propTypes = {
  cells: React.PropTypes.array.isRequired,
};

Row.defaultProps = {
  cells: [],
};

export default Row;
