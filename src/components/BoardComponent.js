import React from "react";
import { CellComponent } from "./CellComponent";

export const BoardComponent = ({ board, setBoard }) => {
  const [selectedCell, setSelectedCell] = React.useState(null);

  React.useEffect(() => {
    updateBoard();
  }, [selectedCell]);

  const updateBoard = () => {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  };

  const handleMakeTurn = (cell) => {
    board.makeTurn(cell);
    setSelectedCell(cell);
  };

  return (
    <div className="board">
      {board.cells.map((row, indexY) => {
        return (
          <div className="row" key={indexY}>
            {row.map((cell, indexX) => {
              return (
                <CellComponent
                  key={indexY + indexX}
                  cell={cell}
                  makeTurn={handleMakeTurn}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
