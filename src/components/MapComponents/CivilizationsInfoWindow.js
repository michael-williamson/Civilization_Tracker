import React from "react";
import { Box } from "@mui/system";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const imageArrFN = (item) => {
  return item.images.map((item, index) => {
    if (index === 0) {
      item.row = 2;
      item.col = 2;
    } else if (index > 0 && index < 3) {
      item.row = 0;
      item.col = 0;
    } else if (index >= 3) {
      item.row = 1;
      item.col = 2;
    }
    return item;
  });
};

export const CivilizationsInfoWindow = (props) => {
  const { item } = props;
  const imageArr = imageArrFN(item);
  return (
    <Box>
      <Box sx={{ textAlign: "center" }}>
        <ImageList
          sx={{ height: 450 }}
          variant="quilted"
          cols={4}
          rowHeight={256}
        >
          {imageArr.map((item, index) => (
            <ImageListItem
              key={index}
              cols={item.col || 1}
              rows={item.row || 1}
            >
              <img
                {...srcset(item.display, 256, item.row, item.col)}
                alt={item.name}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      <Box
        sx={{
          display: "grid",
          rowGap: 3,
          justifyItems: "center",
          py: { xs: 4 },
        }}
      >
        <Box
          sx={{
            width: { xs: "30%" },
            color: "white",
            bgcolor: "primary.main",
            fontSize: { xs: 20, md: 40 },
            fontWeight: "bold",
            textAlign: "center",
            borderRadius: 1,
          }}
        >
          {item.name}
        </Box>
        <Box
          sx={{
            fontSize: { xs: 20, md: 30 },
            fontWeight: "bold",
            fontStyle: "italic",
            color: "primary.main",
          }}
        >
          {item.numbericDate} years ago
        </Box>

        <Box
          sx={{
            fontSize: { xs: 20, md: 20 },
            px: { xs: 2, md: 1 },
            py: { xs: 2, md: 2 },
            borderRadius: 1,
            lineHeight: 3,
            fontWeight: 600,
            textAlign: "center",
            bgcolor: "primary.main",
            color: "white",
          }}
        >
          {item.description}
        </Box>
        <Box
          sx={{
            fontSize: { xs: 20, md: 30 },
            fontWeight: "bold",
          }}
        >
          <a href={item.linkToInfo}>click here for more info</a>
        </Box>
      </Box>
    </Box>
  );
};
