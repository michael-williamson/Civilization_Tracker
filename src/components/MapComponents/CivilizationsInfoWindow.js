import React from "react";
import { Box } from "@mui/system";
import { ImageListComponent } from "../ReusableComponents/ImageListComponent";

export const CivilizationsInfoWindow = (props) => {
  const { item } = props;

  return (
    <Box>
      <Box sx={{ textAlign: "center" }}>
        <ImageListComponent item={item} />
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