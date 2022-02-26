import React, { useState } from "react";
import { Box } from "@mui/system";
import civilizationsJson from "../../data/civilizations.json";
import { CivilizationComponent } from "./CivilizationComponent";

const civilizationsMenu = (setCivilization) => {
  return civilizationsJson.map((item) => (
    <Box
      sx={{
        fontSize: { xs: 20 },
        px: { xs: 4 },
        py: { xs: 2 },
        borderRadius: 2,
        color: "white",
        bgcolor: "primary.main",
        cursor: "pointer",
        fontWeight: "bold",
      }}
      onClick={() => setCivilization(item.name)}
      key={item.name}
    >
      {item.name}
    </Box>
  ));
};

export const CivilizationPage = () => {
  const [civilization, setCivilization] = useState(null);

  return (
    <Box sx={{ display: "grid", rowGap: 4 }}>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        <Box
          sx={{
            color: "primary.main",
            fontSize: { xs: 30 },
            width: { xs: "100%" },
            textAlign: "center",
            py: { xs: 4 },
          }}
        >
          Choose a Civilization:
        </Box>
        {civilizationsMenu(setCivilization)}
      </Box>
      {civilization && (
        <CivilizationComponent
          civilization={civilization}
          civilizationsJson={civilizationsJson}
        />
      )}
    </Box>
  );
};
