import React from "react";
import { Box } from "@mui/system";
import { sunriseAgriculture } from "../../media";

export const WelcomeComponent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {/* <Box
        sx={{
          fontSize: { xs: 30 },
          color: "white",
          bgcolor: "primary.main",
          py: { xs: 1 },
          px: { xs: 2 },
          mt: { xs: 4 },
          mb: { xs: 2 },
          borderRadius: 2,
        }}
      >
        Welcome
      </Box> */}
      <Box
        sx={{
          fontSize: { xs: 20 },
          fontWeight: "bold",
          color: "white",
          bgcolor: "primary.main",
          py: { xs: 4 },
          px: { xs: 2 },
          mt: { xs: 4 },
          borderRadius: 2,
          textAlign: "center",
          width: "80%",
          backgroundImage: `url(${sunriseAgriculture})`,
          position: "relative",
          isolation: "isolate",
          "::after": {
            content: "''",
            inset: 0,
            backgroundColor: "#005c7b",
            position: "absolute",
            filter: "opacity(0.5)",
            zIndex: -1,
          },
        }}
      >
        Explore the beginnings of Human civilization by discovering the early
        ages of agriculture and the locations of its origins, the development of
        population centers, and development of advance trade and barter.
      </Box>
    </Box>
  );
};
