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
    size,
  } = props;

  const handleClick = () => {
    setJsonIndex(null);
    setCurrentInfoWindow(null);
  };

  const item = dataArr[jsonIndex];
  const componentsObject = {
    sites: (
      <SitesInfoWindow item={item} size={size} handleClick={handleClick} />
    ),
    civilizations: (
      <CivilizationsInfoWindow
        item={item}
        size={size}
        handleClick={handleClick}
      />
    ),
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
