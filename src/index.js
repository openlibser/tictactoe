import React from 'react';
import ReactDOM from 'react-dom';
// import Cell from './components/Cell';
// import Row from './components/Row';
import Field from './components/Field';

const data = [
  [
    { type: 'x', state: 'empty' },
    { type: 'o', state: 'full' },
    { type: 'x', state: 'full' },
  ],
  [
    { type: 'x', state: 'full' },
    { type: 'x', state: 'full' },
    { type: 'x', state: 'full' },
  ],
  [
    { type: 'x', state: 'full' },
    { type: 'o', state: 'empty' },
    { type: 'o', state: 'full' },
  ],
  [
    { type: 'x', state: 'full' },
    { type: 'x', state: 'full' },
    { type: 'x', state: 'empty' },
  ],
];

ReactDOM.render(
  <Field rowsData={data} />,
  document.getElementById('app-root'),
);
