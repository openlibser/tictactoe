import React from 'react';
import styles from './cell.css';

import xImg from './x.png';
import oImg from './o.png';
import emptyImg from './empty.png';

function Cell(props) {
  const typeToImg = {
    x: xImg,
    o: oImg,
  };

  const stateToImg = {
    empty: emptyImg,
    full: typeToImg[props.type],
  };

  return (<div className={styles.cell}>
    <img
      src={stateToImg[props.state]}
      alt="cell"
    />
  </div>);
}

Cell.propTypes = {
  state: React.PropTypes.string,
  type: React.PropTypes.string,
};

Cell.defaultProps = {
  state: 'empty',
  type: 'o',
};

export default Cell;
