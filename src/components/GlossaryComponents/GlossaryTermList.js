import React from "react";
import { Box } from "@mui/system";
import glossaryTerms from "../../data/glossaryTerms.json";

const termList = () => {
  const sortedArray = glossaryTerms.sort(function (a, b) {
    let textA = a.name.toUpperCase();
    let textB = b.name.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  });

  return sortedArray.map((item) => {
    if (item.name === "") return null;
    return (
      <Box key={item.name} sx={{ color: "primary.main" }}>
        <a href={`#${item.name}`}>{item.name}</a>
      </Box>
    );
  });
};

export const GlossaryTermList = () => {
  return <Box sx={{ display: "grid", rowGap: 2 }}>{termList()}</Box>;
};
