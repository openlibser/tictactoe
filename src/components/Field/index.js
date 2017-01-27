import React from 'react';
import styles from './field.css';
import Row from '../Row';

function Field({ rows, onCellClick }) {
  return (<div className={styles.field}>
    {
      rows.map(row =>
        <Row
          key={row.id}
          cellsData={row.cells}
          onCellClick
        />,
      )
    }
  </div>);
}

Field.propTypes = {
  rows: React.PropTypes.array.isRequired,
};

Field.defaultProps = {
  rows: [],
};

export default Field;
