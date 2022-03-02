import React from "react";
import { ImageListComponent } from "../ReusableComponents/ImageListComponent";
import { Box } from "@mui/system";
import { useMediaQuery } from "@mui/material";
import { onFile } from "../../media";

const findCivilization = (civilization, civilizationsJson) => {
  return civilizationsJson.find((item) => {
    if (item.name === civilization) {
      return item;
    } else {
      return null;
    }
  });
};

const addTags = (arr, text, tags) => {
  let remainingText;
  let indexStart = -1;
  let tag = "";
  const tagFN = (tags) => {
    let currentIndex;
    for (const item of tags) {
      currentIndex = text.indexOf(item);
      if (currentIndex > -1 && indexStart === -1) {
        indexStart = currentIndex;
        tag = item;
      } else if (currentIndex > -1 && currentIndex < indexStart) {
        indexStart = currentIndex;
        tag = item;
      }
    }
  };

  tagFN(tags);

  if (indexStart === -1) {
    arr.push(<span>{text}</span>);
    return arr;
  }

  let length = tag.length;
  let string = text.substring(0, indexStart);
  let stringHtml = <span>{string}</span>;
  let tagAnchor = (
    <a href={`/Glossary`} style={{ color: "#7eff94" }}>
      {tag}
    </a>
  );
  arr.push(stringHtml);
  indexStart !== -1 && arr.push(tagAnchor);
  remainingText = text.substring(indexStart + length, text.length);

  return addTags(arr, remainingText, tags);
};

const processTags = (item) => {
  for (const prop in item.tags) {
    item[prop] = addTags([], item[prop], item.tags[prop]);
  }
  return item;
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
  "& div:first-of-type": {
    color: "primary.main",
    background: "white",
    borderRadius: 1,
    px: { xs: 1 },
    py: { xs: 1 },
    fontSize: { xs: 30 },
  },
  "& div:nth-of-type(2)": { textAlign: "center", py: { xs: 1 } },
};

export const CivilizationComponent = (props) => {
  const { civilization, civilizationsJson } = props;
  const matchesMD = useMediaQuery("(min-width:600px)");
  const matchesLG = useMediaQuery("(min-width:1020px)");
  let size =
    (!matchesMD && !matchesLG && "sm") || (matchesMD && matchesLG)
      ? "lg"
      : "md";
  let item = findCivilization(civilization, civilizationsJson);
  item = processTags(item);
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
        <Box>Location:</Box>
        <Box>{locationDescription.summary}</Box>
        <ImageListComponent
          item={locationDescription}
          onFile={locationDescription.onFile}
          onFileObject={onFile}
          size={size}
        />
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
        <Box>Culture:</Box> <Box>{cultureDescription}</Box>
      </Box>
    </Box>
  );
};
