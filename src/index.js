import React from 'react';
import ReactDOM from 'react-dom';
// import Cell from './components/Cell';
import Row from './components/Row';

ReactDOM.render(
  <div>
    <Row
      cellsData={[
        { type: 'x', state: 'full' },
        { type: 'o', state: 'full' },
        { type: 'x', state: 'empty' },
      ]}
    />
    <Row
      cellsData={[
        { type: 'x', state: 'full' },
        { type: 'o', state: 'full' },
        { type: 'x', state: 'empty' },
      ]}
    />
  </div>,
  document.getElementById('app-root'),
);
