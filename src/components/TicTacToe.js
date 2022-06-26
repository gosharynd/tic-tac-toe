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

  return (
    <>
      <BoardComponent board={board} setBoard={setBoard} />

      <button onClick={restart}>Restart</button>
    </>
  );
};
