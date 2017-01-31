import rowsReducer from './rows';

const defaultState = {
  rows: [
    {
      rowId: 1,
      cells: [
        { id: 11, type: 'x', state: 'empty' },
        { id: 12, type: 'o', state: 'empty' },
        { id: 13, type: 'x', state: 'empty' },
      ],
    },
    {
      rowId: 2,
      cells: [
        { id: 21, type: 'o', state: 'empty' },
        { id: 22, type: 'x', state: 'empty' },
        { id: 23, type: 'x', state: 'empty' },
      ],
    },
    {
      rowId: 3,
      cells: [
        { id: 31, type: 'o', state: 'empty' },
        { id: 32, type: 'x', state: 'empty' },
        { id: 33, type: 'x', state: 'empty' },
      ],
    },
  ],
};

export default (state = defaultState, action) => {
  console.log(action);
  switch (action.type) {
    case 'TOGGLE_CELL':
      return {
        ...state,
        rows: rowsReducer(state.rows, action),
      };
    default:
      return state;
  }
};
