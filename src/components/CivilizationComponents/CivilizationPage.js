import React, { useState } from "react";
import { Box } from "@mui/system";
import civilizationsJson from "../../data/civilizations.json";
import { CivilizationComponent } from "./CivilizationComponent";
import { CivilizationMenu } from "./CivilizationMenu";
import { CollapseComponent } from "../ReusableComponents/CollapseComponent";

export const CivilizationPage = () => {
  const [civilization, setCivilization] = useState(null);

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
      <CivilizationMenu
        civilizationsJson={civilizationsJson}
        setCivilization={setCivilization}
        civilization={civilization}
        timeout={2000}
        easing={{ enter: "liner", exit: "liner" }}
      />
      <CollapseComponent
        mainStyles={{}}
        label={null}
        easing={{ enter: "liner", exit: "liner" }}
        timeout={1000}
        component={
          <CivilizationComponent
            civilization={civilization || "Sumer"}
            civilizationsJson={civilizationsJson}
            defaultExpanded={false}
            secondaryChecked={!civilization}
          />
        }
        secondaryChecked={!civilization}
      />
    </Box>
  );
};
