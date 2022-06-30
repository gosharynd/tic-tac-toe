import { XFigure, OFigure, Figure } from "./Figure";

export class Player {
  name;
  figure = new Figure();

  constructor(name, figure) {
    this.name = name;
    this.figure = figure;
  }

  getName() {
    return this.name;
  }
}

export const Player1 = new Player("Player 1", XFigure);
export const Player2 = new Player("Player 2", OFigure);
