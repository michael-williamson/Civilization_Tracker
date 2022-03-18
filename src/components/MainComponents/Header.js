import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { NavBar } from "./NavBar";
import { Box } from "@mui/system";
import { headerThumb } from "../../media";
import { CardMedia, IconButton } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { barleyIcon } from "../../media";

export const Header = (props) => {
  const { toggleDrawer, iconObjectFN } = props;
  const matches = useMediaQuery("(min-width:900px)");

  return (
    <Box
      sx={{
        backgroundImage: `url(${headerThumb})`,
        borderTop: "3px solid #212121",
        borderBottom: "3px solid #212121",
        position: "relative",
        isolation: "isolate",
        pt: { xs: 2, md: 2 },
        pb: { xs: 2, md: 0 },
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
          py: { xs: 1 },
          px: { xs: 1, lg: 2 },
          mb: { md: 3 },
          mx: { xs: "auto" },
          width: "min-content",
          whiteSpace: "nowrap",
          fontSize: { xs: 24, lg: 30 },
          fontStyle: "italic",
          textAlign: "center",
          border: "10px groove white",
          display: "flex",
          alignItems: "center",
          backgroundColor: (theme) => theme.palette.customColors.titleBG,
        }}
      >
        <CardMedia
          component="img"
          src={barleyIcon}
          sx={{ width: { xs: 40, lg: 70 } }}
        />
        <Box sx={{ pr: { lg: 2 }, pl: { lg: 3 } }}>Origins of Civilization</Box>
        <CardMedia
          component="img"
          src={barleyIcon}
          sx={{ width: { xs: 40, lg: 70 } }}
        />
      </Box>

      {matches ? (
        <NavBar iconObjectFN={iconObjectFN} />
      ) : (
        <Box sx={{ textAlign: "center", pt: { xs: 2 } }}>
          <IconButton
            onClick={toggleDrawer(true)}
            color="secondary"
            size="large"
            sx={{
              border: "4px solid white",
              background: "rgb(255 255 255 / 51%)",
              borderRadius: { xs: 3 },
            }}
          >
            <Menu size="large" />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};
