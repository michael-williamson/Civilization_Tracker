import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

// designed to display images from images on file or from fetching images via https protocol.

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const configuration = (size) => {
  //configuration for tiled image layout
  let configObject;
  const height = 450;
  const rowHeight = 100;
  const cols = 2;
  switch (size) {
    case "sm":
      configObject = {
        imageListDimensions: {
          height: height,
          rowHeight: rowHeight,
          cols: cols,
        },
        imageTiling: {
          first: { row: 2, col: 2 },
          second: { row: 0, col: 0 },
          remaining: { row: 1, col: 2 },
        },
      };
      break;
    case "md":
      configObject = {
        imageListDimensions: {
          height: height,
          rowHeight: rowHeight,
          cols: cols + 2,
        },
        imageTiling: {
          first: { row: 4, col: 4 },
          second: { row: 2, col: 4 },
          remaining: { row: 1, col: 2 },
        },
      };
      break;
    case "lg":
      configObject = {
        imageListDimensions: {
          height: height,
          rowHeight: rowHeight,
          cols: cols + 2,
        },
        imageTiling: {
          first: { row: 4, col: 2 },
          second: { row: 4, col: 2 },
          remaining: { row: 1, col: 2 },
        },
      };
      break;
    default:
      configObject = {
        imageListDimensions: {
          height: height,
          rowHeight: rowHeight,
          cols: cols + 2,
        },
        imageTiling: {
          first: { row: 4, col: 4 },
          second: { row: 1, col: 4 },
          remaining: { row: 1, col: 2 },
        },
      };
  }
  return configObject;
};

const imageArrFN = (item, onFile = null, onFileObject = null, configObject) => {
  //returns an array of objects with images and properties from either onfile or fetched, includes row and col grid configuration based on screen size.
  const imagesArr = [...item.images];

  onFile &&
    imagesArr.unshift({
      display: onFileObject[`${onFile}`].display,
      name: onFileObject[`${onFile}`].alt,
    });

  const {
    imageTiling: { first, second, remaining },
  } = configObject;
  return imagesArr.map((item, index) => {
    if (index === 0) {
      item.row = first.row;
      item.col = first.col;
    } else if (index > 0 && index < 3) {
      item.row = second.row;
      item.col = second.col;
    } else if (index >= 3) {
      item.row = remaining.row;
      item.col = remaining.col;
    }
    return item;
  });
};

export const ImageListComponent = (props) => {
  const { item, onFile, onFileObject, size } = props;
  const configObject = configuration(size);
  const imageArr = imageArrFN(item, onFile, onFileObject, configObject);
  return (
    <ImageList
      sx={{
        height: {
          xs: configObject.imageListDimensions.height,
          md: configObject.imageListDimensions.height,
        },
        width: { lg: "100%" },
      }}
      variant="quilted"
      rowHeight={configObject.imageListDimensions.rowHeight}
      cols={configObject.imageListDimensions.cols}
    >
      {imageArr.map((item, index) => (
        <ImageListItem key={index} cols={item.col || 1} rows={item.row || 1}>
          <img
            {...srcset(
              item.display,
              configObject.imageListDimensions.rowHeight,
              item.row,
              item.col
            )}
            alt={item.name}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
