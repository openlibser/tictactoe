export const toggleCell = cellId => ({
  type: 'TOGGLE_CELL',
  id: cellId,
});

export const changeType = cellId => ({
  type: 'CHANGE_CELL_TYPE',
  id: cellId,
});

export const setType = (cellId, cellType) => {
  if (cellType !== 'x' && cellType !== 'y') {
    throw new Error('invalid cellType');
  }

  return {
    type: 'SET_CELL_TYPE',
    id: cellId,
    cellType,
  };
};
