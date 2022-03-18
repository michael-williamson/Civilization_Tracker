import civIcon from "./map icons/castle.png";
import languageIcon from "./map icons/language.png";
import potteryIcon from "./map icons/pottery.png";
import hayIcon from "./map icons/hay.png";
import pyramidIcon from "./map icons/pyramid.png";
import searchIcon from "./map icons/search_icon.png";
import glossaryIcon from "./map icons/glossary_icon.png";
import chartsIcon from "./map icons/charts_icon.png";
import mapTitleIcon from "./map icons/title_map_icon.png";
import headerThumb from "./bgImages/headerThumb.jpg";
import sunriseAgriculture from "./bgImages/sunrise_agriculture.jpg";
import sumerMap from "./civilizationMap/sumerMap.png";
import indusValleyMap from "./civilizationMap/indus_valley_map.png";
import expandArrow from "./componentIcons/expand_arrow_40.png";
import barleyIcon from "./map icons/barley.png";

const onFile = {
  sumerMap: { display: sumerMap, thumbnail: sumerMap, alt: "Sumer" },
  indusValleyMap: {
    display: indusValleyMap,
    thumbnail: indusValleyMap,
    alt: "Indus Valley",
  },
};

export {
  civIcon,
  headerThumb,
  sunriseAgriculture,
  languageIcon,
  potteryIcon,
  hayIcon,
  pyramidIcon,
  searchIcon,
  glossaryIcon,
  mapTitleIcon,
  chartsIcon,
  barleyIcon,
  expandArrow,
  onFile,
};
