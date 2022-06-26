export class Cell {
  x;
  y;
  figure;

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  addFigure(newFigure) {
    this.figure = newFigure;
  }
}
