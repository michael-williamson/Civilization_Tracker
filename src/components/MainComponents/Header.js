import React from "react";
import { Box } from "@mui/system";

export const Header = () => {
  return (
    <Box sx={{ bgcolor: "primary.main" }}>
      <Box
        sx={{
          color: "primary.light",
          fontWeight: "bold",
          py: { xs: 6 },
          fontSize: { xs: 40 },
        }}
      >
        Civilization Tracker
      </Box>
    </Box>
  );
};
