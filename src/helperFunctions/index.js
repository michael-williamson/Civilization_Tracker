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

console.log(theme, "outside object");

//component header styles object,  control from here for general changes
export const componentHeaderStyles = {
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
};
