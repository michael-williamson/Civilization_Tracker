import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Routes, Route } from "react-router";
import { Box } from "@mui/system";
import civilizationsJson from "../../data/civilizations.json";
import { CivilizationComponent } from "./CivilizationComponent";
import { findCivilization } from "./helperFunctions";
import { CivilizationDrawer } from "./CivilizationDrawer";
import { ComponentHeader } from "../ReusableComponents/ComponentHeader";
import { componentHeaderStyles } from "../../helperFunctions";

export const CivilizationPage = () => {
  const [civilization, setCivilization] = useState(null);

  const params = useParams();
  const paramsSelectAll = params["*"];
  useEffect(() => {
    //check to see if url param matches existing data
    const item = findCivilization(paramsSelectAll, civilizationsJson);
    if (item) {
      setCivilization(paramsSelectAll);
    }
  }, [paramsSelectAll]);

  return (
    <Box
      sx={{
        display: "grid",

        justifyItems: "center",
        width: { xs: "100%", md: "70%" },
        mx: { md: "auto" },
        pb: { md: 8 },
      }}
    >
      <ComponentHeader
        text="Explore Civilizations"
        {...componentHeaderStyles}
      />
      <CivilizationDrawer civilizationsJson={civilizationsJson} />
      <Routes>
        <Route
          path=":id"
          element={
            <CivilizationComponent
              civilization={civilization || "Sumer"}
              civilizationsJson={civilizationsJson}
            />
          }
        />
      </Routes>
    </Box>
  );
};
