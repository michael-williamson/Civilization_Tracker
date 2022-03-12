import React from "react";
import { Box } from "@mui/system";
import { NavBarItem } from "./NavBarItem";
import { routesArray } from "../../routes";
import { Map, List as ListIcon, BarChart, Fort } from "@mui/icons-material";

const iconObjectStyles = {
  fontSize: { xs: 40, md: 40 },
};

const iconObject = {
  Map: <Map sx={iconObjectStyles} />,
  Civilizations: <Fort sx={iconObjectStyles} />,
  Glossary: <ListIcon sx={iconObjectStyles} />,
  Charts: <BarChart sx={iconObjectStyles} />,
};

const navItemsList = () => {
  return routesArray.map((item, index) => {
    return (
      <NavBarItem
        icon={iconObject[`${item}`]}
        text={item}
        key={item}
        lastItem={index === routesArray.length - 1 && true}
      />
    );
  });
};

export const NavBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "50%",
        margin: "0 auto",
      }}
    >
      {navItemsList()}
    </Box>
  );
};
