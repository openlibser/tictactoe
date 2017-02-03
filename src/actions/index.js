export const toggleCell = cellId => ({
  type: 'TOGGLE_CELL',
  id: cellId,
});

export const changeType = cellId => ({
  type: 'CHANGE_CELL_TYPE',
  id: cellId,
});
