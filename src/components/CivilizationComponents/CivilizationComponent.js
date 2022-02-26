import React from "react";
import { Box } from "@mui/system";

const findCivilization = (civilization, civilizationsJson) => {
  return civilizationsJson.find((item) => {
    if (item.name === civilization) {
      return item;
    } else {
      return null;
    }
  });
};

const commonStyles = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-around",
  color: "white",
  bgcolor: "primary.main",
  fontSize: 20,
  fontWeight: "bold",
  py: { xs: 4 },
  px: { xs: 4 },
  "& div:first-child": {
    color: "primary.main",
    background: "white",
    borderRadius: 1,
    px: { xs: 1 },
    py: { xs: 1 },
    fontSize: { xs: 30 },
  },
  "& div:nth-child(2)": { textAlign: "center", py: { xs: 1 } },
};

export const CivilizationComponent = (props) => {
  const { civilization, civilizationsJson } = props;
  let item = findCivilization(civilization, civilizationsJson);
  const {
    name,
    timePeriod,
    locationDescription,
    summary,
    language,
    timeMeasurement,
    cultureDescription,
    religion,
    cosmology,
    resources,
    trade,
    military,
  } = item;
  return (
    <Box sx={{ display: "grid", rowGap: 4 }}>
      <Box sx={{ ...commonStyles }}>
        <Box>Civilization Name:</Box> <Box>{name}</Box>
      </Box>
      <Box sx={{ ...commonStyles }}>
        <Box>Time Period:</Box> <Box>{timePeriod}</Box>
      </Box>
      <Box sx={{ ...commonStyles }}>
        <Box>Summary:</Box> <Box>{summary}</Box>
      </Box>
      <Box sx={{ ...commonStyles }}>
        <Box>Language Info:</Box> <Box>{language}</Box>
      </Box>
      <Box sx={{ ...commonStyles }}>
        <Box>Concept of Time:</Box> <Box>{timeMeasurement}</Box>
      </Box>
      <Box sx={{ ...commonStyles }}>
        <Box>Religion:</Box> <Box>{religion}</Box>
      </Box>
      <Box sx={{ ...commonStyles }}>
        <Box>Cosmology:</Box> <Box>{cosmology}</Box>
      </Box>
      <Box sx={{ ...commonStyles }}>
        <Box>Resources and Agriculture:</Box> <Box>{resources}</Box>
      </Box>
      <Box sx={{ ...commonStyles }}>
        <Box>Trade and Economy:</Box> <Box>{trade}</Box>
      </Box>
      <Box sx={{ ...commonStyles }}>
        <Box>Military</Box> <Box>{military}</Box>
      </Box>
      <Box sx={{ ...commonStyles }}>
        <Box>Geography:</Box> <Box>{locationDescription}</Box>
      </Box>
      <Box sx={{ ...commonStyles }}>
        <Box>Culture:</Box> <Box>{cultureDescription}</Box>
      </Box>
    </Box>
  );
};
