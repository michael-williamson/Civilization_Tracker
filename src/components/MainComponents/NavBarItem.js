import React from "react";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

export const NavBarItem = (props) => {
  const { icon, text } = props;
  const theme = useTheme();
  return (
    <NavLink
      key={text}
      to={`/${text}`}
      className={(isActive) => "nav-link" + (!isActive ? " unselected" : "")}
      style={(isActive) => ({
        color: isActive ? theme.palette.primary.main : "purple",
      })}
    >
      <Box
        sx={{
          backgroundColor: "transparent",
          color: "white",
          px: { md: 4 },
          py: { md: 1 },
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box sx={{ fontSize: { xs: 20 }, fontWeight: 600 }}>{text}</Box>
        <Box sx={{ fontSize: { xs: 40 }, pl: 2 }}>{icon}</Box>
      </Box>
    </NavLink>
  );
};
