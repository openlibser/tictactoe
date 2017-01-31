import React from 'react';
import styles from './field.css';
import Row from '../Row';

function Field({ rows, onCellClick }) {
  return (<div className={styles.field}>
    {
      rows.map(row =>
        <Row
          key={row.rowId}
          cells={row.cells}
          onCellClick={onCellClick}
        />,
      )
    }
  </div>);
}

Field.propTypes = {
  rows: React.PropTypes.array.isRequired,
  onCellClick: React.PropTypes.func.isRequired,
};

Field.defaultProps = {
  rows: [],
};

export default Field;
