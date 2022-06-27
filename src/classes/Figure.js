import X_Logo from "../assets/x.svg";
import O_Logo from "../assets/circle.svg";

export class Figure {
  logo;
  name = "FIGURE";
  id;

  constructor(name, logo) {
    this.name = name;
    this.logo = logo;
    this.id = Math.random();
  }

  getId() {
    return this.id || null;
  }
}

export const XFigure = new Figure("X_FIGURE", X_Logo);
export const OFigure = new Figure("O_FIGURE", O_Logo);
