import { theme } from "../Theme";

export const imageScreenSizeObject = (
  screenSize,
  firstImage,
  secondImage,
  thirdImage,
  fourthImage
) => {
  return {
    [`${screenSize}`]: {
      first: { ...firstImage },
      second: { ...secondImage },
      third: { ...thirdImage },
      fourth: { ...fourthImage },
    },
  };
};

//component header styles object,  control from here for general changes
export const componentHeaderStyles = {
  fontSize: { xs: 27, md: 40 },
  color: "primary.main",
  backgroundColor: theme.palette.customColors.componentHeaderBG,
  fontWeight: "bold",
  textAlign: "center",
  py: { xs: 2 },
  px: { xs: 0, md: 3 },
  mb: { xs: 2 },
  borderRadius: { xs: 4 },
  border: `3px solid ${theme.palette.primary.main}`,
  fontFamily: theme.fonts.marker,
};
