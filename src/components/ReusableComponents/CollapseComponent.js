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
  return (
    <Box sx={{ ...mainStyles }}>
      <Box sx={{ ...labelStyles }} onClick={handleChange}>
        {label}
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
