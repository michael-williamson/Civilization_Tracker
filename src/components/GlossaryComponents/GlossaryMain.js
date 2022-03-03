import React from "react";
import { Box } from "@mui/system";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import glossaryTerms from "../../data/glossaryTerms.json";
import { GlossaryTerm } from "./GlossaryTerm";
import { GlossaryTermList } from "./GlossaryTermList";
import { ExpandMore } from "@mui/icons-material";

const glossaryTermsList = () => {
  const sortedArray = glossaryTerms.sort(function (a, b) {
    let textA = a.name.toUpperCase();
    let textB = b.name.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  });

  return sortedArray.map((item) => {
    if (item.name === "") return null;
    return (
      <GlossaryTerm
        name={item.name}
        image={item.image}
        definition={item.definition}
        key={item.name}
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
      <Accordion sx={{ boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMore color="primary" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ borderBottom: "4px solid #1976d238", pd: { md: 2 } }}
        >
          <Box sx={{ color: "primary.main", fontWeight: "bold" }}>
            List of Terms
          </Box>
        </AccordionSummary>
        <AccordionDetails sx={{ border: 0 }}>
          <GlossaryTermList />
        </AccordionDetails>
      </Accordion>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 4 },
          pb: { xs: 4 },
        }}
      >
        {glossaryTermsList()}
      </Box>
    </Box>
  );
};
