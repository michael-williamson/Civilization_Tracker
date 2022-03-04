import React, { useState } from "react";
import { Box } from "@mui/system";
import civilizationsJson from "../../data/civilizations.json";
import { CivilizationComponent } from "./CivilizationComponent";

const civilizationsMenu = (setCivilization) => {
  return civilizationsJson.map((item, index) => {
    if (item.name === "") return null;
    return (
      <Box key={index}>
        <Box
          sx={{
            px: { xs: 4 },
            py: { xs: 2 },
            borderRadius: 2,
            textAlign: "center",
            cursor: "pointer",
          }}
          onClick={() => setCivilization(item.name)}
        >
          <Box
            sx={{
              fontSize: { xs: 20 },
              color: "primary.main",
              fontWeight: "bold",
              pb: { md: 2 },
            }}
          >
            {item.name}
          </Box>
          <Box>
            <img
              src={item.images[0].thumbnail}
              alt={item.name}
              width="100px"
              style={{ borderRadius: 21 }}
            />
          </Box>
        </Box>
      </Box>
    );
  });
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
            fontWeight: "bold",
          }}
        >
          Choose a Civilization:
        </Box>
        <Box
          sx={{
            width: { md: "50%" },
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          {civilizationsMenu(setCivilization)}
        </Box>
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
