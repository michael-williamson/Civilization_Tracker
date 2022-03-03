import React from "react";
import { ImageListComponent } from "../ReusableComponents/ImageListComponent";
import { PopoverComponent } from "../ReusableComponents/PopoverComponent";
import { Box } from "@mui/system";
import { useMediaQuery } from "@mui/material";
import { onFile } from "../../media";
import { GlossaryTerm } from "../GlossaryComponents/GlossaryTerm";
import glossaryTerms from "../../data/glossaryTerms.json";

const findCivilization = (civilization, civilizationsJson) => {
  return civilizationsJson.find((item) => {
    if (item.name === civilization) {
      return item;
    } else {
      return null;
    }
  });
};

const glossaryTermObjectFN = (tag) => {
  return glossaryTerms.find(
    (item) => item.name.toLowerCase() === tag.toLowerCase()
  );
};

//used GlossaryTerm component within the popover but needed to override styles to suit the popover
const popoverStyles = {
  width: "70%",
  "& .MuiPaper-root .MuiBox-root": {
    width: { md: "100%", pb: { md: 0 } },
  },
};

const addTags = (arr, text, tags) => {
  // parses text finding glossary terms by order of precedence, wrapping them in a visible popup
  let remainingText;
  let indexStart = -1;
  let tag = "";
  //if multiple tags searches for the first occurring
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
    arr.push(<Box component="span">{text}</Box>);
    return arr;
  }

  let length = tag.length;
  let string = text.substring(0, indexStart);
  let stringHtml = <Box component="span">{string}</Box>;

  const glossaryTermObject = glossaryTermObjectFN(tag);
  const { name, image, definition } = glossaryTermObject;

  //feature allows a popover when hovering over term in text
  let tagAnchor = (
    <PopoverComponent
      tag={tag}
      displayComponent={
        <GlossaryTerm name={name} image={image} definition={definition} />
      }
      popoverStyles={popoverStyles}
    />
  );
  arr.push(stringHtml);
  indexStart !== -1 && arr.push(tagAnchor);
  remainingText = text.substring(indexStart + length, text.length);

  return addTags(arr, remainingText, tags);
};

//returns new item object with react component assembled for affected properties
const processTags = (item) => {
  for (const prop in item.tags) {
    item[prop] = addTags([], item[prop], item.tags[prop]);
  }
  return item;
};

const commonStyles = {
  display: "flex",
  flexWrap: "nowrap",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
  py: { xs: 4 },
  px: { xs: 4 },
  bgcolor: "primary.main",
  width: { md: "fit-content" },
  borderRadius: 2,
};

const labelStyles = {
  color: "primary.main",
  background: "white",
  borderRadius: 1,
  px: { xs: 1 },
  py: { xs: 1 },
  fontSize: { xs: 30 },
  fontWeight: "bold",
};

const textStyles = {
  textAlign: "center",
  py: { xs: 1 },
  fontSize: { xs: 20 },
  fontWeight: "bold",
  color: "white",
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
    <Box sx={{ display: "grid", rowGap: 4, justifyItems: "center" }}>
      <Box sx={{ ...commonStyles }}>
        <Box sx={{ ...labelStyles }}>Civilization Name:</Box>{" "}
        <Box sx={{ ...textStyles, fontSize: { md: 50 } }}>{name}</Box>
      </Box>
      <Box sx={{ ...commonStyles }}>
        <Box sx={{ ...labelStyles }}>Location:</Box>
        <Box sx={{ ...textStyles }}>{locationDescription.summary}</Box>
        <ImageListComponent
          item={locationDescription}
          onFile={locationDescription.onFile}
          onFileObject={onFile}
          size={size}
        />
      </Box>
      <Box sx={{ ...commonStyles }}>
        <Box sx={{ ...labelStyles }}>Time Period:</Box>{" "}
        <Box sx={{ ...textStyles }}>{timePeriod}</Box>
      </Box>
      <Box sx={{ ...commonStyles }}>
        <Box sx={{ ...labelStyles }}>Summary:</Box>{" "}
        <Box sx={{ ...textStyles }}>{summary}</Box>
      </Box>
      <Box sx={{ ...commonStyles }}>
        <Box sx={{ ...labelStyles }}>Language Info:</Box>{" "}
        <Box sx={{ ...textStyles }}>{language}</Box>
      </Box>
      <Box sx={{ ...commonStyles }}>
        <Box sx={{ ...labelStyles }}>Concept of Time:</Box>{" "}
        <Box sx={{ ...textStyles }}>{timeMeasurement}</Box>
      </Box>
      <Box sx={{ ...commonStyles }}>
        <Box sx={{ ...labelStyles }}>Religion:</Box>{" "}
        <Box sx={{ ...textStyles }}>{religion}</Box>
      </Box>
      <Box sx={{ ...commonStyles }}>
        <Box sx={{ ...labelStyles }}>Cosmology:</Box>{" "}
        <Box sx={{ ...textStyles }}>{cosmology}</Box>
      </Box>
      <Box sx={{ ...commonStyles }}>
        <Box sx={{ ...labelStyles }}>Resources and Agriculture:</Box>{" "}
        <Box sx={{ ...textStyles }}>{resources}</Box>
      </Box>
      <Box sx={{ ...commonStyles }}>
        <Box sx={{ ...labelStyles }}>Trade and Economy:</Box>{" "}
        <Box sx={{ ...textStyles }}>{trade}</Box>
      </Box>
      <Box sx={{ ...commonStyles }}>
        <Box sx={{ ...labelStyles }}>Military</Box>{" "}
        <Box sx={{ ...textStyles }}>{military}</Box>
      </Box>

      <Box sx={{ ...commonStyles }}>
        <Box sx={{ ...labelStyles }}>Culture:</Box>{" "}
        <Box sx={{ ...textStyles }}>{cultureDescription}</Box>
      </Box>
    </Box>
  );
};
