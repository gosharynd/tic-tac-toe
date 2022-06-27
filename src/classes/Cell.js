export class Cell {
  x;
  y;
  figure;

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  getFigure() {
    return this.figure || null;
  }

  addFigure(newFigure) {
    this.figure = newFigure;
  }
}
