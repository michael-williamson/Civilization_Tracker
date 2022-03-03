import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

// designed to display images from images on file or from fetching images via https protocol.

// there is a function in the main directory of src folder that allows this component to accept dynamic input
// in order to arrange images according to desired layout,  run the function in parent component of ImageListComponent
// and attach as a property to ImageListComponent.  See CivilizationComponent for example

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const configuration = (size, config, cols) => {
  //configuration for tiled image layout
  let configObject;
  const height = "initial";
  const rowHeight = 100;
  const { sm, md, lg } = config;
  switch (size) {
    case "sm":
      configObject = {
        imageListDimensions: {
          height: height,
          rowHeight: rowHeight,
          cols: cols,
        },
        imageTiling: {
          ...sm,
        },
      };
      break;
    case "md":
      configObject = {
        imageListDimensions: {
          height: height,
          rowHeight: rowHeight,
          cols: cols,
        },
        imageTiling: {
          ...md,
        },
      };
      break;
    case "lg":
      configObject = {
        imageListDimensions: {
          height: height,
          rowHeight: rowHeight,
          cols: cols,
        },
        imageTiling: {
          ...lg,
        },
      };
      break;
    default:
      configObject = {
        imageListDimensions: {
          height: height,
          rowHeight: rowHeight,
          cols: cols,
        },
        imageTiling: {
          ...lg,
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
    imageTiling: { first, second, third, fourth },
  } = configObject;

  return imagesArr.map((item, index) => {
    switch (index) {
      case 0:
        item.row = first.row;
        item.col = first.col;
        break;
      case 1:
        item.row = second.row;
        item.col = second.col;
        break;
      case 2:
        item.row = third.row;
        item.col = fourth.col;
        break;
      case 3:
        item.row = fourth.row;
        item.col = fourth.col;
        break;
      default:
        item.row = fourth.row;
        item.col = fourth.col;
    }

    return item;
  });
};

export const ImageListComponent = (props) => {
  const { item, onFile, onFileObject, size, config, cols } = props;
  const configObject = configuration(size, config, cols);
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
