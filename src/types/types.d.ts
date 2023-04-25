export interface shadow {
  hOffset: number;
  vOffset: number;
  blur: number;
  spread: number;
  color: string;
  boxColor: string;
}

export interface color {
  color: string;
  stop: number;
}

export interface shadows {
  shadow: shadow;
  setShadow: any;
}

export interface collection {
  colors: color[];
  setColors: any;
  color: color;
  setColor: any;
}
