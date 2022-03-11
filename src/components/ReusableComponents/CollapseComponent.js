import React, { useState } from "react";
import { Box } from "@mui/system";
import { Collapse } from "@mui/material";

const checkedFN = (checked, secondaryChecked = undefined) => {
  if (secondaryChecked !== undefined) return !secondaryChecked && true;
  return checked;
};
export const CollapseComponent = (props) => {
  const {
    mainStyles,
    labelStyles,
    label,
    alternativeLabel,
    component,
    easing,
    timeout,
    defaultExpanded,
    secondaryChecked,
  } = props;
  const [checked, setChecked] = useState(defaultExpanded);
  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  //adds dynamic labeling if desired
  const alternativeLabelHandler = checked ? alternativeLabel : label;

  return (
    <Box sx={{ ...mainStyles }}>
      <Box sx={{ ...labelStyles, cursor: "pointer" }} onClick={handleChange}>
        {alternativeLabel ? alternativeLabelHandler : label}
      </Box>
      <Collapse
        in={checkedFN(checked, secondaryChecked)}
        easing={easing}
        timeout={timeout}
      >
        {component}
      </Collapse>
    </Box>
  );
};
