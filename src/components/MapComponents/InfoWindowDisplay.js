import React from "react";
import { InfoWindow } from "@react-google-maps/api";
import { SitesInfoWindow } from "./SitesInfoWindow";
import { CivilizationsInfoWindow } from "./CivilizationsInfoWindow";

export const InfoWindowDisplay = (props) => {
  const {
    jsonIndex,
    setJsonIndex,
    dataArr,
    currentInfoWindow,
    setCurrentInfoWindow,
  } = props;

  const item = dataArr[jsonIndex];
  const componentsObject = {
    sites: <SitesInfoWindow item={item} />,
    civilizations: <CivilizationsInfoWindow item={item} />,
  };
  return (
    <InfoWindow
      position={{
        lat: item.gpsCoordinates.lat,
        lng: item.gpsCoordinates.long,
      }}
      onCloseClick={() => {
        setJsonIndex(null);
        setCurrentInfoWindow(null);
      }}
    >
      {componentsObject[currentInfoWindow]}
    </InfoWindow>
  );
};
