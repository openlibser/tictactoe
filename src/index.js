import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import Field from './containers/Field';

const store = createStore(reducer);
window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <Field />
  </Provider>,
  document.getElementById('app-root'),
);
