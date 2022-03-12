import React, { useState } from "react";
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

const listSingleTerm = (currentTerm) => {
  const item = glossaryTerms.find((item) => item.name === currentTerm);
  return (
    <GlossaryTerm
      name={item.name}
      image={item.image}
      definition={item.definition}
      key={item.name}
    />
  );
};

export const GlossaryMain = () => {
  const [currentTerm, setCurrentTerm] = useState("Alluvium");
  const [listForm, setListForm] = useState(false);
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
          <GlossaryTermList setCurrentTerm={setCurrentTerm} />
        </AccordionDetails>
      </Accordion>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          mt: { lg: 3 },
        }}
      >
        <Box
          sx={{
            fontSize: { lg: 30 },
            textAlign: "center",
            color: "primary.main",
            py: { xs: 2 },
          }}
        >
          Display Options:
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              py: { xs: 1, lg: 1 },
              px: { xs: 1, lg: 2 },
              bgcolor: "primary.main",
              color: "secondary.main",
              fontWeight: "bold",
              borderRadius: 2,
              mx: { xs: 2, lg: 2 },
              cursor: "pointer",
            }}
            onClick={() => setListForm(false)}
          >
            Single Term
          </Box>
          <Box
            sx={{
              py: { xs: 1, lg: 1 },
              px: { xs: 1, lg: 2 },
              bgcolor: "primary.main",
              color: "secondary.main",
              fontWeight: "bold",
              borderRadius: 2,
              mx: { xs: 2, lg: 2 },
              cursor: "pointer",
            }}
            onClick={() => setListForm(true)}
          >
            List All Terms
          </Box>
        </Box>
      </Box>
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
        {listForm ? glossaryTermsList() : listSingleTerm(currentTerm)}
      </Box>
    </Box>
  );
};
