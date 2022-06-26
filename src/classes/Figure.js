import X_Logo from "../assets/x.svg";
import O_Logo from "../assets/circle.svg";

export class Figure {
  logo;
  name = "FIGURE";

  constructor(name, logo) {
    this.name = name;
    this.logo = logo;
  }
}

export const XFigure = new Figure("X_FIGURE", X_Logo);
export const OFigure = new Figure("O_FIGURE", O_Logo);
