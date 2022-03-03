import React, { useState } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import { MapMarkers } from "./MapMarkers";
import { InfoWindowDisplay } from "./InfoWindowDisplay";
import { civIcon, languageIcon } from "../../media/index";
import sites from "../../data/sites.json";
import civilizations from "../../data/civilizations.json";

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

const dataArr = {
  civilizations,
  sites,
};

function MapComponent(props) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: REACT_APP_GOOGLE_API,
  });

  const [jsonIndex, setJsonIndex] = useState(null);
  const [currentInfoWindow, setCurrentInfoWindow] = useState(null);

  const matchesMD = useMediaQuery("(min-width:600px)");
  const matchesLG = useMediaQuery("(min-width:1020px)");
  let size =
    (!matchesMD && !matchesLG && "sm") || (matchesMD && matchesLG)
      ? "lg"
      : "md";

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
        <MapMarkers
          setJsonIndex={setJsonIndex}
          dataArr={sites}
          markerRepresentation="sites"
          setCurrentInfoWindow={setCurrentInfoWindow}
          icon={civIcon}
        />
        <MapMarkers
          setJsonIndex={setJsonIndex}
          dataArr={civilizations}
          markerRepresentation="civilizations"
          setCurrentInfoWindow={setCurrentInfoWindow}
          icon={languageIcon}
        />
        {jsonIndex !== null && currentInfoWindow !== null && (
          <InfoWindowDisplay
            jsonIndex={jsonIndex}
            setJsonIndex={setJsonIndex}
            currentInfoWindow={currentInfoWindow}
            setCurrentInfoWindow={setCurrentInfoWindow}
            dataArr={dataArr[currentInfoWindow]}
            size={size}
          />
        )}
      </GoogleMap>
    );
  }
  return RenderMap(props);
}

export default React.memo(MapComponent);
