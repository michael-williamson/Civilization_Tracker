import React, { useState } from "react";
import { Box } from "@mui/system";
import { Collapse } from "@mui/material";

export const CollapseComponent = (props) => {
  const { mainStyles, labelStyles, textStyles, label, text, imageComponent } =
    props;
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  return (
    <Box sx={{ ...mainStyles }}>
      <Box sx={{ ...labelStyles }} onClick={handleChange}>
        {label}
      </Box>{" "}
      <Collapse in={checked}>
        {text && <Box sx={{ ...textStyles }}>{text}</Box>}
        {imageComponent && imageComponent}
      </Collapse>
    </Box>
  );
};
