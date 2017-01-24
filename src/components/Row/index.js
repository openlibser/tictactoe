import React from 'react';
import styles from './row.css';
import Cell from '../Cell';

function Row(props) {
  return (<div className={styles.row}>
    {
      props.cellsData.map(cell =>
        <Cell
          type={cell.type}
          state={cell.state}
        />,
      )
    }
  </div>);
}

Row.propTypes = {
  cellsData: React.PropTypes.array,
};

Row.defaultProps = {
  cellsData: [],
};

export default Row;
