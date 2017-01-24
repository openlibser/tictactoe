import React from 'react';
import styles from './field.css';
import Row from '../Row';

function Field(props) {
  return (<div className={styles.field}>
    {
      props.rowsData.map(row =>
        <Row cellsData={row} />,
      )
    }
  </div>);
}

Field.propTypes = {
  rowsData: React.PropTypes.array,
};

Field.defaultProps = {
  rowsData: [],
};

export default Field;
