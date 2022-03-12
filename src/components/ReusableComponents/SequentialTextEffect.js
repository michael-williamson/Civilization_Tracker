import React from "react";
import { Grow, Box } from "@mui/material";

const textArrayFN = (textProp) => {
  //two cases fn, checks to see if text argument contains spaces or not
  let finalArray = [];
  const spacesArray = textProp.split(" ");
  if (spacesArray.length > 1) {
    while (spacesArray.length > 0) {
      const arrayItem = spacesArray.shift();
      finalArray = [...finalArray, ...arrayItem.split("")];
      if (spacesArray.length > 0) {
        finalArray.push(" ");
      }
    }
  }

  return spacesArray.length > 1 ? finalArray : textProp.split("");
};

const textEffectEngine = (
  text = "place holder",
  baseTimeIntervalProp = 100,
  startTimeProp = 100,
  whiteSpaceWidthProp = 20
) => {
  //keep in mind that a white space in string will collapse div.  added a width property for space between words
  const textArray = textArrayFN(text);

  const baseTimeInterval = baseTimeIntervalProp;
  const startTime = startTimeProp;
  let accumulatedTime = startTime;
  return textArray.map((item, index) => {
    const textElement =
      item === " " ? (
        <Box sx={{ width: whiteSpaceWidthProp }}>{item}</Box>
      ) : (
        <Box>{item}</Box>
      );
    accumulatedTime =
      index === 0 ? startTime : accumulatedTime + baseTimeInterval;
    return (
      <Grow in={true} timeout={accumulatedTime} key={index}>
        <Box>{textElement}</Box>
      </Grow>
    );
  });
};

export const SequentialTextEffect = (props) => {
  const { text, baseTimeInterval, startTime, whiteSpaceWidth } = props;
  return (
    <Box sx={{ display: "flex" }}>
      {textEffectEngine(text, baseTimeInterval, startTime, whiteSpaceWidth)}
    </Box>
  );
};
