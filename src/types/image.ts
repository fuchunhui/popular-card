export interface Story {
  special: boolean;
  image: string;
  text?: string;
  title?: string;
  x?: number;
  y?: number;
  max?: number;
  font?: string;
  color?: string;
  align?: string;
  direction?: string;
  blur?: number;
}

export interface FillText {
  x: number;
  y: number;
  max: number;
  font: string;
  color: string;
  align: string;
  direction: string;
  blur: number;
}

export interface Point {
  x: number;
  y: number;
}
