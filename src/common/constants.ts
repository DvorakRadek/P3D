export const COORDINATES = {
  rows: [1, 2, 3, 4],
  cols: [1, 2, 3, 4],
  levels: [1, 2, 3, 4],
};

const levels = [1, 2, 3, 4];

export const DIAGONAL_3D_COMBINATIONS = {
  victoryCombination1: [
    { row: 1, col: 1, level: 1 },
    { row: 2, col: 2, level: 2 },
    { row: 3, col: 3, level: 3 },
    { row: 4, col: 4, level: 4 },
  ],
  victoryCombination2: [
    { row: 1, col: 4, level: 1 },
    { row: 2, col: 3, level: 2 },
    { row: 3, col: 2, level: 3 },
    { row: 4, col: 1, level: 4 },
  ],
  victoryCombination3: [
    { row: 1, col: 1, level: 4 },
    { row: 2, col: 2, level: 3 },
    { row: 3, col: 3, level: 2 },
    { row: 4, col: 4, level: 1 },
  ],
  victoryCombination4: [
    { row: 1, col: 4, level: 4 },
    { row: 2, col: 3, level: 3 },
    { row: 3, col: 2, level: 2 },
    { row: 4, col: 1, level: 1 },
  ],
};

export const HIGHLIGHTED = ['text-green-400', 'font-bold', 'border-black'];

export const LASTMOVE = 'font-bold';

export const comb1 = () => {
  const result = [];
  for (let i = 0; i < levels.length; i++) {
    result.push({
      row: levels[i],
      col: levels[i],
      level: levels[i],
    });
  }
  console.log(result);
  return result;
};