import { Cell } from "./Cell";
import { XFigure } from "./Figure";
import { Player1, Player2 } from "./player";

const SIZE_X = 3;
const SIZE_Y = 3;

export class Board {
  cells = [];
  sizeX = SIZE_X;
  sizeY = SIZE_Y;
  player = Player1;

  initCells() {
    for (let i = 0; i < this.sizeY; i++) {
      const row = [];

      for (let j = 0; j < this.sizeX; j++) {
        row.push(new Cell(j, i));
      }

      this.cells.push(row);
    }
  }

  makeTurn(target) {
    target.addFigure(this.player.figure);

    if (this.player === Player1) {
      this.player = Player2;
    } else {
      this.player = Player1;
    }
  }

  getCopyBoard() {
    const newBoard = new Board();
    newBoard.cells = this.cells;
    newBoard.player = this.player;

    return newBoard;
  }

  addFigure(target, figure) {
    const newFigure = new figure();

    target.addFigure(newFigure);
  }

  checkWinning() {
    // this.cells.map((cell, index))
  }
}
