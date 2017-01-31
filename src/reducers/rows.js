const cell = (state, action) => {
  console.log('cell action')
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

const rows = (state, action) => {
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
