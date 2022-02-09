import React from "react";
import { Box } from "@mui/system";

export const GlossaryTerm = (props) => {
  const { name, image, definition } = props;
  return (
    <Box sx={{ pb: { xs: 4 } }}>
      <Box sx={{ display: "flex", border: "solid 5px #dbdbdb" }}>
        <Box
          sx={{
            fontSize: { xs: 30 },
            color: "primary.main",
            display: "flex",
            alignItems: "center",
            pr: { xs: 3 },
            backgroundColor: "#f4f4f4",
          }}
        >
          {name}:
        </Box>
        <Box
          sx={{
            fontSize: { xs: 26 },
            color: "primary.main",
            textAlign: "center",
            py: { xs: 3 },
          }}
        >
          {definition}
        </Box>
      </Box>
      <Box>
        <img src={image} alt={name} style={{ width: "100%", height: 240 }} />
      </Box>
    </Box>
  );
};
