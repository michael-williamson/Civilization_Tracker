import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import { CardMedia } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { ArrowForwardIos } from "@mui/icons-material";

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
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box
        sx={{
          color: "primary.main",
          fontSize: { md: 40 },
          fontWeight: { md: "bold", pt: { md: 8 }, textAlign: "center" },
        }}
      >
        Choose a Civilization:
      </Box>
      {civilizationsJson.map((item, index) => {
        if (item.name === "") return null;
        return (
          <Link
            sx={{
              px: { xs: 0 },
              py: { xs: 2 },
              borderRadius: 2,
              textAlign: "center",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
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
  );

  return (
    <Box sx={{ position: "absolute", left: 0 }}>
      <React.Fragment>
        <Button
          onClick={toggleDrawer("left", true)}
          variant="outlined"
          sx={{ fontWeight: "bold", mt: { md: 2 } }}
          endIcon={<ArrowForwardIos />}
        >
          Open Civilization Menu
        </Button>
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {civilizationsMenu("left", civilizationsJson)}
        </Drawer>
      </React.Fragment>
    </Box>
  );
};