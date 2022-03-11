import React from "react";
import { Box } from "@mui/system";
import GoogleMap from "./GoogleMap";

export const MainMapComponent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pb: { xs: 6 },
        height: "100vh",
      }}
    >
      <Box
        sx={{
          fontSize: { xs: 30, lg: 44 },
          color: "secondary.main",
          bgcolor: "primary.main",
          fontWeight: "bold",
          my: { xs: 1, lg: 3 },
          borderRadius: 1,
          px: { xs: 3, lg: 6 },
        }}
      >
        Interactive Map
      </Box>
      <GoogleMap />
    </Box>
  );
};
