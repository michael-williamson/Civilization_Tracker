import { imageScreenSizeObject } from "../../helperFunctions";

export const imageGridConfig1 = {
  ...{
    ...imageScreenSizeObject(
      "sm",
      { row: 2, col: 4 },
      { row: 2, col: 4 },
      { row: 2, col: 4 },
      { row: 2, col: 4 }
    ),
    ...imageScreenSizeObject(
      "md",
      { row: 4, col: 4 },
      { row: 4, col: 4 },
      { row: 4, col: 4 },
      { row: 4, col: 4 }
    ),
    ...imageScreenSizeObject(
      "lg",
      { row: 4, col: 4 },
      { row: 4, col: 4 },
      { row: 4, col: 4 },
      { row: 4, col: 4 }
    ),
  },
};

export const imageGridConfig2 = {
  ...{
    ...imageScreenSizeObject(
      "sm",
      { row: 2, col: 4 },
      { row: 2, col: 4 },
      { row: 2, col: 4 },
      { row: 2, col: 4 }
    ),
    ...imageScreenSizeObject(
      "md",
      { row: 4, col: 4 },
      { row: 4, col: 4 },
      { row: 4, col: 4 },
      { row: 4, col: 4 }
    ),
    ...imageScreenSizeObject(
      "lg",
      { row: 4, col: 2 },
      { row: 2, col: 2 },
      { row: 4, col: 2 },
      { row: 4, col: 2 }
    ),
  },
};
