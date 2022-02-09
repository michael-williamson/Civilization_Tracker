import React, { useState } from "react";
import { Box } from "@mui/system";
import { Header } from "./Header";
import { NavDrawer } from "./NavDrawer";

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
      <Header toggleDrawer={toggleDrawer} />
      <NavDrawer toggleDrawer={toggleDrawer} navWindow={navWindow} />
    </Box>
  );
};
