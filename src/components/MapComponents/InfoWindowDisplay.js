import React from "react";
import { InfoWindow } from "@react-google-maps/api";
import sites from "../../data/sites.json";
import { Box } from "@mui/system";

export const InfoWindowDisplay = (props) => {
  const { sitesIndex, setSitesIndex } = props;

  const item = sites[sitesIndex];
  return (
    <InfoWindow
      position={{
        lat: item.gpsCoordinates.lat,
        lng: item.gpsCoordinates.long,
      }}
      onCloseClick={() => setSitesIndex(null)}
    >
      <Box>
        <Box>
          <img src={item.images[0].thumbnail} alt={item.name} />
        </Box>
      </Box>
    </InfoWindow>
  );
};
