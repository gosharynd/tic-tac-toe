export const checkWinning = (cells) => {
  return horizontalWin(cells) || verticalWin(cells);
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

  // for (let j = 0; j < cells.length; j++) {
  //   const row = cells[j];
  //   let column = [];
  //   if (isWin) return true;
  //   for (let i = 0; i < row.length; i++) {
  //     const cell = cells[i][j];
  //     column.push(cell);
  //     const firstFigureId = column[0]?.getFigure()?.getId();

  //     if (cells.length === column.length && firstFigureId) {
  //       isWin = column.every((cell) => {
  //         const figureId = cell?.getFigure()?.getId();
  //         if (firstFigureId === figureId) {
  //           return true;
  //         }
  //       });
  //     }
  //   }
  // }

  return isWin;
};
