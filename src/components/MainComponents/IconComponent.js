import React from "react";
import { Box } from "@mui/system";

export const IconComponent = (props) => {
  const { iconSrc, altText, height, width } = props;
  return (
    <Box>
      <img src={iconSrc} alt={altText} height={height} width={width} />
    </Box>
  );
};
