const cell = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_CELL':
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        state: 'full',
      };
    default:
      return state;
  }
};

const initState = [
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
];

const rows = (state = initState, action) => {
  switch (action.type) {
    case 'TOGGLE_CELL':
      return state.map(row => ({
        ...row,
        cells: row.cells.map(cellState => cell(cellState, action)),
      }));
    default:
      return state;
  }
};

export default rows;
