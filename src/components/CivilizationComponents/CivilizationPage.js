import React, { useState } from "react";
import { Box } from "@mui/system";
import civilizationsJson from "../../data/civilizations.json";
import { CivilizationComponent } from "./CivilizationComponent";

const civilizationsMenu = (setCivilization) => {
  return civilizationsJson.map((item) => (
    <>
      <Box
        sx={{
          bgcolor: "primary.main",
          px: { xs: 4 },
          py: { xs: 2 },
          borderRadius: 2,
          textAlign: "center",
          cursor: "pointer",
        }}
        onClick={() => setCivilization(item.name)}
        key={item.name}
      >
        <Box
          sx={{
            fontSize: { xs: 20 },
            color: "white",
            fontWeight: "bold",
            pb: { md: 1 },
          }}
        >
          {item.name}
        </Box>
        <Box>
          <img src={item.images[0].thumbnail} alt={item.name} width="100px" />
        </Box>
      </Box>
    </>
  ));
};

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
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          borderBottom: "6px solid #1976d2",
          pb: { md: 4 },
          width: { md: "100%" },
        }}
      >
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
