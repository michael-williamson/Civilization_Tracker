import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { NavBar } from "./NavBar";
import { Box } from "@mui/system";
import { headerThumb } from "../../media";
import { IconButton } from "@mui/material";
import { Menu } from "@mui/icons-material";

export const Header = (props) => {
  const { toggleDrawer } = props;
  const matches = useMediaQuery("(min-width:900px)");

  return (
    <Box
      sx={{
        backgroundImage: `url(${headerThumb})`,
        borderTop: "3px solid #212121",
        borderBottom: "3px solid #212121",
        position: "relative",
        isolation: "isolate",
        "::after": {
          content: "''",
          inset: 0,
          backgroundColor: "black",
          position: "absolute",
          filter: "opacity(0.5)",
          zIndex: -1,
        },
      }}
    >
      <Box
        sx={{
          color: "primary.light",
          fontWeight: "bold",
          py: { xs: 3 },
          px: { lg: 2 },
          my: { md: 3 },
          mx: { xs: "auto" },
          width: "min-content",
          whiteSpace: "nowrap",
          fontSize: { xs: 24, lg: 40 },
          fontStyle: "italic",
          textAlign: "center",
          border: "10px groove #ffffff66 ",
          fontFamily: "monospace",
        }}
      >
        Origins of Civilization
      </Box>

      {matches ? (
        <NavBar />
      ) : (
        <Box sx={{ textAlign: "center", pb: { xs: 4 }, pt: { xs: 2 } }}>
          <IconButton
            onClick={toggleDrawer(true)}
            color="secondary"
            size="large"
            sx={{
              border: "4px solid white",
              background: "rgb(255 255 255 / 51%)",
            }}
          >
            <Menu size="large" />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};
