import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import { CardMedia, Drawer, Button } from "@mui/material";
import { Mouse } from "@mui/icons-material";

export const CivilizationDrawer = (props) => {
  const { civilizationsJson } = props;
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const civilizationsMenu = (anchor, civilizationsJson) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : "initial",
        display: "grid",
        rowGap: 3,
        py: { lg: 5 },
        background: (theme) => theme.palette.customColors.civilizationDrawerBG,
        height: "100vh",
        gridTemplateRows: "repeat(4,1fr)",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box
        sx={{
          color: "primary.main",
          fontSize: { md: 40 },
          fontWeight: { md: "bold", textAlign: "center" },
        }}
      >
        Choose a Civilization:
      </Box>
      <Box
        sx={{
          height: "100%",
          px: { lg: 5 },
        }}
      >
        {civilizationsJson.map((item, index) => {
          if (item.name === "") return null;
          return (
            <Link
              style={{
                display: "block",
                borderTop: "1px solid white",
                borderBottom: "1px solid white",
                padding: "24px 0",
                cursor: "pointer",
              }}
              to={`/Civilizations/${item.name}`}
              key={index}
            >
              <Box
                sx={{
                  fontSize: { xs: 20 },
                  color: "primary.main",
                  fontWeight: "bold",
                  pb: { xs: 2 },
                  textAlign: "center",
                }}
              >
                {item.name}
              </Box>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <CardMedia
                  src={item.images[0].thumbnail}
                  sx={{
                    width: { xs: 60, md: 140 },
                    height: { xs: 90, md: 140 },
                    borderRadius: 3,
                  }}
                  component="img"
                />
              </Box>
            </Link>
          );
        })}
      </Box>
    </Box>
  );

  return (
    <Box>
      <React.Fragment>
        <Button
          onClick={toggleDrawer("left", true)}
          variant="outlined"
          sx={{
            fontWeight: "bold",
            mt: { md: 2 },
            fontFamily: (theme) => theme.fonts.marker,
          }}
          endIcon={<Mouse />}
          size="large"
        >
          Open Civilizations Menu
        </Button>
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          sx={{
            "& .MuiPaper-root.MuiDrawer-paper": {
              width: { lg: "20%" },
              backgroundColor: "transparent",
            },
          }}
        >
          {civilizationsMenu("left", civilizationsJson)}
        </Drawer>
      </React.Fragment>
    </Box>
  );
};
