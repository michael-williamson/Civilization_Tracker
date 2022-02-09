import React from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { Box } from "@mui/system";
import { MapMarkers } from "./MapMarkers";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const center = {
  lat: 28.751911,
  lng: 23.4010213,
};

const { REACT_APP_GOOGLE_API } = process.env;

const options = { mapTypeId: "satellite", gestureHandling: "auto" };

function MapComponent(props) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: REACT_APP_GOOGLE_API,
  });

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>;
  }

  if (!isLoaded) {
    return <Box>waiting</Box>;
  }

  function RenderMap(props) {
    return (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={2.5}
        options={options}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <MapMarkers />
      </GoogleMap>
    );
  }
  return RenderMap(props);
}

export default React.memo(MapComponent);
