import React from "react";
import { Box } from "@mui/system";
import glossaryTerms from "../../data/glossaryTerms.json";

const termList = (setCurrentTerm) => {
  const sortedArray = glossaryTerms.sort(function (a, b) {
    let textA = a.name.toUpperCase();
    let textB = b.name.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  });

  return sortedArray.map((item) => {
    if (item.name === "") return null;
    return (
      <Box
        key={item.name}
        sx={{ color: "primary.main", cursor: "pointer" }}
        onClick={() => setCurrentTerm(item.name)}
      >
        {item.name}
      </Box>
    );
  });
};

export const GlossaryTermList = (props) => {
  const { setCurrentTerm } = props;
  return (
    <Box
      sx={{
        display: "grid",
        rowGap: 2,
        gridTemplateColumns: "auto auto auto auto",
      }}
    >
      {termList(setCurrentTerm)}
    </Box>
  );
};
