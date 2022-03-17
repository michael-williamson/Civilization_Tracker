import React, { useState } from "react";
import { Box } from "@mui/system";
import { Header } from "./Header";
import { NavDrawer } from "./NavDrawer";
import {
  Map,
  List as ListIcon,
  BarChart,
  Fort,
  Home,
} from "@mui/icons-material";

const iconObjectFN = (iconObjectStyles) => {
  return {
    Welcome: <Home sx={iconObjectStyles} />,
    Map: <Map sx={iconObjectStyles} />,
    Civilizations: <Fort sx={iconObjectStyles} />,
    Glossary: <ListIcon sx={iconObjectStyles} />,
    Charts: <BarChart sx={iconObjectStyles} />,
  };
};

export const MainPage = () => {
  const [navWindow, setNavWindow] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setNavWindow(open);
  };
  return (
    <Box>
      <Header toggleDrawer={toggleDrawer} iconObjectFN={iconObjectFN} />
      <NavDrawer
        toggleDrawer={toggleDrawer}
        navWindow={navWindow}
        iconObjectFN={iconObjectFN}
      />
    </Box>
  );
};
