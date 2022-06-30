import React from "react";
import { Board } from "../classes";
import { BoardComponent } from "./BoardComponent";

export const TicTacToe = () => {
  const [board, setBoard] = React.useState(new Board());

  React.useEffect(() => {
    restart();
  }, []);

  const restart = () => {
    const newBoard = new Board();
    newBoard.initCells();
    setBoard(newBoard);
  };

  const playerName = board?.winner?.getName();
  const isWin = board.checkWinning();
  const showRestartButton = isWin || board.checkGameOver();

  return (
    <>
      {isWin && <h3>{playerName} - WINS</h3>}
      <BoardComponent board={board} setBoard={setBoard} />
      {showRestartButton && <button onClick={restart}>Restart</button>}
    </>
  );
};
