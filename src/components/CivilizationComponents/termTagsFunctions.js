import React from "react";
import { Box } from "@mui/system";
import { GlossaryTerm } from "../GlossaryComponents/GlossaryTerm";
import glossaryTerms from "../../data/glossaryTerms.json";
import { PopoverComponent } from "../ReusableComponents/PopoverComponent";

const glossaryTermObjectFN = (tag) => {
  return glossaryTerms.find((item) => {
    return item.name.toLowerCase() === tag.toLowerCase();
  });
};

//used GlossaryTerm component within the popover but needed to override styles to suit the popover
const popoverStyles = {
  width: "70%",
  "& .MuiPaper-root .MuiBox-root": {
    width: { md: "100%", pb: { md: 0 } },
  },
};

const addTags = (arr, text, tags, keyIndex) => {
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
    keyIndex += 1;
    arr.push(
      <Box component="span" key={keyIndex}>
        {text}
      </Box>
    );
    return arr;
  }

  let length = tag.length;
  let string = text.substring(0, indexStart);
  keyIndex += 1;
  let stringHtml = (
    <Box component="span" key={keyIndex}>
      {string}
    </Box>
  );

  const glossaryTermObject = glossaryTermObjectFN(tag);
  const { name, image, definition } = glossaryTermObject;

  //feature allows a popover when hovering over term in text
  keyIndex += 1;
  let tagAnchor = (
    <PopoverComponent
      key={keyIndex}
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

  return addTags(arr, remainingText, tags, keyIndex);
};

//returns new item object with react component assembled for affected properties
export const processTags = (item) => {
  for (const prop in item.tags) {
    if (item.tags[prop].length) {
      item[prop] = addTags([], item[prop], item.tags[prop], 0);
    }
  }
  return item;
};
