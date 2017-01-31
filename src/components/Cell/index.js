import React from 'react';
import styles from './cell.css';

import xImg from './x.png';
import oImg from './o.png';
import emptyImg from './empty.png';

const typeToImg = {
  x: xImg,
  o: oImg,
};

function Cell({ type, state, onClick }) {
  const stateToImg = {
    empty: emptyImg,
    full: typeToImg[type],
  };

  const style = {
    backgroundImage: `url(${stateToImg[state]})`,
  };

  return (<button
    className={styles.cell}
    onClick={onClick}
    style={style}
  />);
}

Cell.propTypes = {
  state: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired,
};

Cell.defaultProps = {
  state: 'empty',
  type: 'o',
};

export default Cell;
