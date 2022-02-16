import React from "react";
import { Marker } from "@react-google-maps/api";
import sites from "../../data/sites.json";
import { Box } from "@mui/system";
import { civIcon } from "../../media";

export const MapMarkers = (props) => {
  const { setSitesIndex } = props;
  const markers = sites.map((item, index) => {
    return (
      <>
        <Marker
          animation={window.google.maps.Animation.DROP}
          key={index}
          position={{
            lat: item.gpsCoordinates.lat,
            lng: item.gpsCoordinates.long,
          }}
          onClick={() => {
            setSitesIndex(index);
          }}
          opacity={1}
          icon={{
            url: civIcon,
            scaledSize: new window.google.maps.Size(30, 30),
          }}
        />
      </>
    );
  });

  return <Box>{markers}</Box>;
};
