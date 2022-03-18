import React from "react";
import { ImageListComponent } from "../ReusableComponents/ImageListComponent";
import { Box } from "@mui/system";
import { CardMedia } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { expandArrow, onFile } from "../../media";
import { processTags } from "./termTagsFunctions";
import { CollapseComponent } from "../ReusableComponents/CollapseComponent";
import { imageGridConfig2, imageGridConfig1 } from "./imageGridObjects";
import { findCivilization } from "./helperFunctions";

//!! created a file termTagFunctions.js in CivilizationComponents folder because of crowding in this module
// this functionality identifies tagged words in text to create a pop up definition from glossary json
// also imageGridObject.js contains grid config objects for ImageListComponents

const commonStyles = {
  display: "flex",
  flexWrap: "nowrap",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
  py: { xs: 1, md: 2 },
  width: { xs: "93%", md: "90%" },
  borderRadius: 2,
  cursor: "pointer",
};

const labelStyles = {
  color: "primary.main",
  backgroundColor: (theme) => theme.palette.customColors.componentHeaderBG,
  fontFamily: (theme) => theme.fonts.marker,
  borderRadius: 1,
  px: { xs: 1 },
  py: { xs: 1 },
  fontSize: { xs: 20, md: 32 },
  fontWeight: "bold",
  borderBottom: "4px solid #1976d2",
  borderTop: "1px solid black",
  width: { xs: "100%" },
  position: "relative",
  "::after": {
    content: `url(${expandArrow})`,
    position: "absolute",
    right: { xs: "10%", md: "2%" },
  },
};

const textStyles = {
  textAlign: "center",
  py: { xs: 1 },
  fontSize: { xs: 20 },
  fontWeight: "bold",
  color: "primary.main",
};

// this object is used to insure a particular order of how json properties will be evaluated with accompanying UI labels
const propertyObject = {
  locationSummary: "Location",
  locationDescription: "Map",
  timePeriod: "Time Period",
  images: "Gallery",
  summary: "Summary",
  language: "Language Info",
  timeMeasurement: "Concept of Time",
  religion: "Religion",
  cosmology: "Cosmology",
  resources: "Resources and Agriculture",
  trade: "Trade and Economy",
  military: "Military",
  cultureDescription: "Culture",
};

const collapsableListItems = (json, size, name) => {
  const propArray = Object.keys(propertyObject);
  const listComponents = propArray.map((item) => {
    if (item === "locationDescription") {
      return (
        <CollapseComponent
          mainStyles={commonStyles}
          labelStyles={labelStyles}
          label={propertyObject[item]}
          component={
            <ImageListComponent
              item={json[item]}
              onFile={json[item].onFile}
              onFileObject={onFile}
              size={size}
              config={imageGridConfig1}
              cols={4}
              key={item}
            />
          }
          defaultExpanded={false}
          key={item}
        />
      );
    } else if (item === "images") {
      return (
        <CollapseComponent
          mainStyles={commonStyles}
          labelStyles={labelStyles}
          label={propertyObject[item]}
          component={
            <ImageListComponent
              item={json}
              size={size}
              config={imageGridConfig2}
              cols={4}
            />
          }
          defaultExpanded={false}
          key={item}
        />
      );
    }
    return (
      <CollapseComponent
        mainStyles={commonStyles}
        labelStyles={labelStyles}
        label={propertyObject[item]}
        component={<Box sx={{ ...textStyles }}>{json[item]}</Box>}
        defaultExpanded={false}
        key={item}
      />
    );
  });

  const cardMediaSrc = onFile[json.locationDescription.onFile].thumbnail;

  return (
    <Box
      sx={{
        display: "grid",
        justifyItems: "center",
      }}
    >
      <Box sx={{ ...commonStyles }}>
        <Box
          sx={{
            ...textStyles,
            fontSize: { xs: 56, md: 71 },
            fontFamily: (theme) => theme.fonts.amatic,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box sx={{ pr: { xs: 2, lg: 5 } }}>{name}</Box>
          <CardMedia
            component="img"
            src={cardMediaSrc}
            sx={{
              height: { xs: 100, md: 180 },
              borderRadius: 2,
            }}
          />
        </Box>
      </Box>
      {listComponents}
    </Box>
  );
};

export const CivilizationComponent = (props) => {
  const { civilization, civilizationsJson } = props;

  const matchesMD = useMediaQuery("(min-width:600px)");
  const matchesLG = useMediaQuery("(min-width:1020px)");
  if (!civilization) return <Box sx={{ height: "100vh" }}>Placeholder</Box>;
  let size = !matchesMD && !matchesLG ? "sm" : matchesMD ? "md" : "lg";

  let item = findCivilization(civilization, civilizationsJson);
  item = processTags(item);
  const { name } = item;
  return (
    <CollapseComponent
      mainStyles={{}}
      label={null}
      easing={{ enter: "liner", exit: "liner" }}
      timeout={1000}
      defaultExpanded={true}
      component={collapsableListItems(item, size, name)}
    />
  );
};
