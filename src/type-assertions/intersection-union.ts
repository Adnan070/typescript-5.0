type Color = {
  color: string;
};

type Rectangle = {
  length: number;
  height: number;
};

type ColoredRectangle = Color & Rectangle;

const rectangleColored: ColoredRectangle = {
  color: "red",
  length: 10,
  height: 5,
};

export {};
