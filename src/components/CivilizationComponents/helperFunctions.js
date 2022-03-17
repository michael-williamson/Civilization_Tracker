//returns a single object from json related to civilization property passed down
export const findCivilization = (civilization, civilizationsJson) => {
  return civilizationsJson.find((item) => {
    if (item.name === civilization && item.name !== "") {
      return item;
    } else {
      return null;
    }
  });
};
