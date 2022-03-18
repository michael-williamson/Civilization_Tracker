import React from "react";
import { NavLink } from "react-router-dom";
import { Box } from "@mui/system";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { useTheme } from "@mui/material/styles";
import { routesArray, routes } from "../../routes";

export const NavDrawer = (props) => {
  const { toggleDrawer } = props;
  const { navWindow } = props;
  const { iconObjectFN } = props;
  const theme = useTheme();

  const iconObject = iconObjectFN({});

  const list = () => (
    <Box
      sx={{ backgroundColor: "#e7e7e7", height: "100vh" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box
        sx={{
          color: "primary.main",
          bgcolor: "primary.light",
          textAlign: "center",
          py: { xs: 4 },
          fontSize: { xs: 40 },
          fontWeight: "bold",
        }}
      >
        Go To
      </Box>

      {routesArray.map((text) => (
        <NavLink
          key={text}
          to={`/${routes[text]}`}
          className={(isActive) =>
            "nav-link" + (!isActive ? " unselected" : "")
          }
          style={(isActive) => ({
            color: isActive ? theme.palette.primary.main : "purple",
          })}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              py: { xs: 2 },
            }}
          >
            <Box sx={{ fontSize: { xs: 40 }, fontWeight: 600 }}>{text}</Box>
            <Box sx={{ fontSize: { xs: 40 }, pl: 2 }}>
              {iconObject[`${text}`]}
            </Box>
          </Box>
        </NavLink>
      ))}
    </Box>
  );

  return (
    <div>
      <SwipeableDrawer
        anchor={"left"}
        open={navWindow}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        //had to target classnames inside to expand width
        sx={{
          "& .MuiPaper-root.MuiDrawer-paper": {
            width: { xs: "75%" },
          },
        }}
      >
        {list()}
      </SwipeableDrawer>
    </div>
  );
};
