import React from "react";
import { Box } from "@mui/system";
import { CardMedia } from "@mui/material";

export const GlossaryTerm = (props) => {
  const { name, image, definition } = props;
  return (
    <Box
      sx={{
        display: "flex",
        pb: { xs: 4 },
        width: { xs: "100%", md: "70%" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: { xs: "wrap", md: "nowrap" },
          justifyContent: "center",
          border: "solid 5px #dbdbdb",
          py: { xs: 2 },
          px: { xs: 4 },
        }}
      >
        <Box>
          <Box
            sx={{
              fontSize: { xs: 30 },
              fontWeight: 600,
              color: "primary.main",
              textAlign: "center",
              pr: { xs: 3 },
              backgroundColor: "#f4f4f4",
              fontFamily: (theme) => theme.fonts.comfortaa,
            }}
            id={name}
          >
            {name}
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <CardMedia
              component="img"
              src={image}
              sx={{
                width: { md: 140 },
                height: { md: 140 },
                borderRadius: 3,
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            fontSize: { xs: 26 },
            color: "primary.main",
            textAlign: "center",
            py: { xs: 3 },
            px: { xs: 2 },
            fontFamily: (theme) => theme.fonts.comfortaa,
          }}
        >
          {definition}
        </Box>
      </Box>
    </Box>
  );
};
