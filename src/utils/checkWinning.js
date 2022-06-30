export const checkWinning = (cells) => {
  return horizontalWin(cells) || verticalWin(cells) || diagonalWin(cells);
};

const horizontalWin = (cells) => {
  let isWin = false;

  for (let j = 0; j < cells.length; j++) {
    if (isWin) return true;

    const row = cells[j];
    const firstFigureId = row[0]?.getFigure()?.getId();

    if (firstFigureId) {
      isWin = row.every((cell) => {
        const figureId = cell?.getFigure()?.getId();
        if (firstFigureId === figureId) {
          return true;
        }
      });
    }
  }

  return isWin;
};

const verticalWin = (cells) => {
  let isWin = false;

  for (let j = 0; j < cells.length; j++) {
    const row = cells[j];
    let column = [];
    if (isWin) return true;
    for (let i = 0; i < row.length; i++) {
      const cell = cells[i][j];
      column.push(cell);
      const firstFigureId = column[0]?.getFigure()?.getId();

      if (cells.length === column.length && firstFigureId) {
        isWin = column.every((cell) => {
          const figureId = cell?.getFigure()?.getId();
          if (firstFigureId === figureId) {
            return true;
          }
        });
      }
    }
  }

  return isWin;
};

const diagonalWin = (cells) => {
  let isWin = false;
  let diagonal1 = [];
  let diagonal2 = [];

  for (let i = 0; i < cells.length; i++) {
    if (isWin) return true;

    const cell1 = cells[i][i];
    const cell2 = cells[i][cells.length - i - 1];

    diagonal1.push(cell1);
    diagonal2.push(cell2);
  }
  const firstFigureId1 = diagonal1[0]?.getFigure()?.getId();
  const firstFigureId2 = diagonal2[0]?.getFigure()?.getId();

  if (cells.length === diagonal1.length && firstFigureId1) {
    isWin =
      isWin ||
      diagonal1.every((cell) => {
        const figureId = cell?.getFigure()?.getId();
        if (firstFigureId1 === figureId) {
          return true;
        }
      });
  }

  if (cells.length === diagonal2.length && firstFigureId2) {
    isWin =
      isWin ||
      diagonal2.every((cell) => {
        const figureId = cell?.getFigure()?.getId();
        if (firstFigureId2 === figureId) {
          return true;
        }
      });
  }

  return isWin;
};
