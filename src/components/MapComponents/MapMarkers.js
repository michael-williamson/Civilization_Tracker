import React from "react";
import { Marker } from "@react-google-maps/api";
import { Box } from "@mui/system";

export const MapMarkers = (props) => {
  const {
    setJsonIndex,
    dataArr,
    setCurrentInfoWindow,
    markerRepresentation,
    icon,
  } = props;
  const markers = dataArr.map((item, index) => {
    if (item.name === "") return null;
    return (
      <Marker
        animation={window.google.maps.Animation.DROP}
        key={index}
        position={{
          lat: item.gpsCoordinates.lat,
          lng: item.gpsCoordinates.long,
        }}
        onClick={() => {
          setJsonIndex(index);
          setCurrentInfoWindow(markerRepresentation);
        }}
        opacity={1}
        icon={{
          url: icon,
          scaledSize: new window.google.maps.Size(20, 20),
        }}
      />
    );
  });

  return <Box>{markers}</Box>;
};
