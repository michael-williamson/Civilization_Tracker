import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Routes, Route } from "react-router";
import { Box } from "@mui/system";
import civilizationsJson from "../../data/civilizations.json";
import { CivilizationComponent } from "./CivilizationComponent";
import { CivilizationMenu } from "./CivilizationMenu";
import { findCivilization } from "./helperFunctions";

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
        rowGap: 4,
        justifyItems: "center",
        width: { xs: "100%", md: "70%" },
        mx: { md: "auto" },
        pb: { md: 8 },
      }}
    >
      <Routes>
        <Route
          path=":id"
          element={
            <CivilizationMenu
              civilizationsJson={civilizationsJson}
              setCivilization={setCivilization}
              civilization={civilization}
              timeout={2000}
              easing={{ enter: "liner", exit: "liner" }}
            />
          }
        />
      </Routes>
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
      {/* <CivilizationMenu
            civilizationsJson={civilizationsJson}
            setCivilization={setCivilization}
            civilization={civilization}
            timeout={2000}
            easing={{ enter: "liner", exit: "liner" }}
          /> */}
      {/* <CollapseComponent
            mainStyles={{}}
            label={null}
            easing={{ enter: "liner", exit: "liner" }}
            timeout={1000}
            defaultExpanded={true}
            component={
              <CivilizationComponent
                civilization={civilization || "Sumer"}
                civilizationsJson={civilizationsJson}
              />
            }
          /> */}
    </Box>
  );
};
