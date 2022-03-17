import React from "react";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { routes } from "../../routes/index";

export const NavBarItem = (props) => {
  const { icon, text, lastItem } = props;
  const theme = useTheme();
  return (
    <NavLink
      key={text}
      to={`/${routes[text]}`}
      className={(isActive) => "nav-link" + (!isActive ? " unselected" : "")}
      style={(isActive) => ({
        color: isActive ? theme.palette.primary.main : "purple",
      })}
    >
      <Box
        sx={{
          backgroundColor: (theme) =>
            theme.palette.customColors.transparentBlue,
          color: "white",
          px: { md: 4 },
          py: { md: 1 },
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          borderRight: lastItem ? "none" : "1px solid white",
        }}
      >
        <Box sx={{ fontSize: { xs: 20 }, fontWeight: 600 }}>{text}</Box>
        <Box sx={{ fontSize: { xs: 40 }, pl: 2 }}>{icon}</Box>
      </Box>
    </NavLink>
  );
};
