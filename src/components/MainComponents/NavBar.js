import React from "react";
import { Box } from "@mui/system";
import { NavBarItem } from "./NavBarItem";
import { routesArray } from "../../routes";

const iconObjectStyles = {
  fontSize: { xs: 40, md: 40 },
};

const navItemsList = (iconObjectFN) => {
  const iconObject = iconObjectFN(iconObjectStyles);
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

export const NavBar = (props) => {
  const { iconObjectFN } = props;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "50%",
        margin: "0 auto",
      }}
    >
      {navItemsList(iconObjectFN)}
    </Box>
  );
};
