import React from "react";
import { Box } from "@mui/system";
import { CardMedia } from "@mui/material";

//EXAMPLE COMPONENT HEADER FOR COPYPASTE
/* <ComponentHeader
text="Explore Civilizations"
iconProps={{src:searchIcon,iconWidthSM:20,iconWidthLG:40}}
{...{
  fontSize: { xs: 40 },
  color: "primary.main",
  fontWeight: "bold",
  textAlign: "center",
  py: { xs: 2 },
  px: { md: 3 },
  mb: { xs: 2 },
  borderRadius: { xs: 1 },
  border: `1px solid ${theme.palette.primary.main}`,
  fontFamily: theme.fonts.marker,
}}
/>  */

export const ComponentHeader = (props) => {
  const {
    text = "Example",
    additionalTextStyles = null,
    icon = null,
    iconProps = null,
    display,
    alignItems = null,
    fontSize,
    fontFamily,
    color,
    backgroundColor,
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
        display,
        alignItems,
        fontSize,
        fontFamily,
        color,
        backgroundColor,
        fontWeight,
        textAlign,
        mb,
        py,
        borderRadius,
        border,
        px,
      }}
    >
      {icon && (
        <CardMedia
          component="img"
          src={iconProps.src}
          sx={{
            width: { xs: iconProps.iconWidthSM, lg: iconProps.iconWidthLG },
          }}
        />
      )}
      <Box sx={{ ...additionalTextStyles }}>{text}</Box>
      {icon && (
        <CardMedia
          component="img"
          src={iconProps.src}
          sx={{
            width: { xs: iconProps.iconWidthSM, lg: iconProps.iconWidthLG },
          }}
        />
      )}
    </Box>
  );
};
