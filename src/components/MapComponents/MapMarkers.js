import React from "react";
import { Marker } from "@react-google-maps/api";
import { Box } from "@mui/system";

export const MapMarkers = (props) => {
  //showItems prop is added to filter out individuals from list
  const {
    setJsonIndex,
    dataArr,
    setCurrentInfoWindow,
    markerRepresentation,
    icon,
    labelShow,
    showItems,
  } = props;
  const markers = dataArr.map((item, index) => {
    if (item.name === "") return null;
    if (showItems) {
      if (!showItems[item.name]) return null;
    }
    return (
      <Marker
        animation={window.google.maps.Animation.DROP}
        key={index}
        label={
          labelShow
            ? {
                text: item.name,
                className: "civilizationIconLabel",
                color: "white",
                fontSize: "20px",
                fontWeight: "bold",
                fontFamily: "cursive",
              }
            : null
        }
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
