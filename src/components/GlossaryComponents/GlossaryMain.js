import React from "react";
import { Box } from "@mui/system";
import glossaryTerms from "../../data/glossaryTerms.json";
import { GlossaryTerm } from "./GlossaryTerm";

const glossaryTermsList = () => {
  return glossaryTerms.map((item) => {
    return (
      <GlossaryTerm
        name={item.name}
        image={item.image}
        definition={item.definition}
      />
    );
  });
};

export const GlossaryMain = () => {
  return (
    <Box>
      <Box
        sx={{
          fontSize: { xs: 40 },
          color: "primary.main",
          fontWeight: "bold",
          textAlign: "center",
          py: { xs: 2 },
        }}
      >
        Glossary
      </Box>
      <Box>{glossaryTermsList()}</Box>
    </Box>
  );
};
