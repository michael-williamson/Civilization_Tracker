import React from "react";
import { Box } from "@mui/system";

export const ComponentHeader = (props) => {
  const {
    text = "Example",
    fontSize,
    fontFamily,
    color,
    fontWeight,
    textAlign,
    mb = 0,
    py,
    borderRadius = 0,
    border = "none",
    px = 0,
  } = props;
  return (
    <Box
      sx={{
        fontSize,
        fontFamily,
        color,
        fontWeight,
        textAlign,
        mb,
        py,
        borderRadius,
        border,
        px,
      }}
    >
      {text}
    </Box>
  );
};
