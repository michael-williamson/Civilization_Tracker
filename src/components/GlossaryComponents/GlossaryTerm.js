import React from "react";
import { Box } from "@mui/system";

export const GlossaryTerm = (props) => {
  const { name, image, definition } = props;
  return (
    <Box
      sx={{
        display: "flex",
        pb: { xs: 4 },
        width: { xs: "100%", md: "50%" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          border: "solid 5px #dbdbdb",
          py: { xs: 2 },
          px: { xs: 4 },
        }}
      >
        <Box>
          <Box
            sx={{
              fontSize: { xs: 30 },
              color: "primary.main",
              textAlign: "center",
              pr: { xs: 3 },
              backgroundColor: "#f4f4f4",
            }}
          >
            {name}:
          </Box>
          <Box>
            <img src={image} alt={name} />
          </Box>
        </Box>
        <Box
          sx={{
            fontSize: { xs: 26 },
            color: "primary.main",
            textAlign: "center",
            py: { xs: 3 },
            px: { xs: 2 },
          }}
        >
          {definition}
        </Box>
      </Box>
    </Box>
  );
};
