import { combineReducers } from 'redux';
import rowsReducer from './rows';

export default combineReducers({
  rows: rowsReducer,
});
