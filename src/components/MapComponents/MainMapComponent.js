import React from "react";
import { Box } from "@mui/system";
import GoogleMap from "./GoogleMap";
import { SequentialTextEffect } from "../ReusableComponents/SequentialTextEffect";
import { ComponentHeader } from "../ReusableComponents/ComponentHeader";
import { componentHeaderStyles } from "../../helperFunctions";

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
      <ComponentHeader text="Interactive Map" {...componentHeaderStyles} />
      <Box
        sx={{
          fontSize: { xs: 30, lg: 44 },
          color: "secondary.main",
          bgcolor: "primary.main",
          fontWeight: "bold",
          my: { xs: 1, lg: 3 },
          borderRadius: 1,
          px: { xs: 3, lg: 6 },
          textAlign: "center",
          border: "19px groove white",
        }}
      >
        <SequentialTextEffect
          text="Map Guide"
          baseTimeInterval={200}
          startTime={1000}
          whiteSpaceWidth={10}
        />
        <Box
          sx={{
            fontFamily: "cursive",
            fontSize: { xs: 17, lg: 15 },
            color: "secondary.main",
          }}
        >
          "all that, that is civilized"
        </Box>
      </Box>
      <GoogleMap />
    </Box>
  );
};
