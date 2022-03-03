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
