import React, { useState } from "react";
import { MapLegend } from "./MapLegend";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

import { Skeleton, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { MapMarkers } from "./MapMarkers";
import { InfoWindowDisplay } from "./InfoWindowDisplay";
import { civIcon, languageIcon } from "../../media/index";
import sites from "../../data/sites.json";
import civilizations from "../../data/civilizations.json";

const containerStyle = (matchesLG) => {
  return {
    width: matchesLG ? "80%" : "100%",
    height: "60vh",
    border: "5px solid #1976d2",
  };
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

const individualCivilizationsFN = () => {
  const individualCivObject = {};
  dataArr.civilizations.forEach((item) => {
    if (!item.name) return;
    individualCivObject[item.name] = true;
  });
  return individualCivObject;
};

function MapComponent(props) {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: REACT_APP_GOOGLE_API,
  });

  const [jsonIndex, setJsonIndex] = useState(null);
  const [currentInfoWindow, setCurrentInfoWindow] = useState(null);
  const [showItems, setShowItems] = useState({
    sites: true,
    civilizations: true,
    individualCivilizations: individualCivilizationsFN(),
  });
  const [showMapLegend, setShowMapLegend] = useState(true);

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
    return (
      <Box
        sx={{
          height: "60vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Skeleton variant="rectangular" sx={{ width: "80%", height: "100%" }} />
      </Box>
    );
  }

  function RenderMap(props) {
    return (
      <GoogleMap
        mapContainerStyle={containerStyle(matchesLG)}
        center={center}
        zoom={2.5}
        options={options}
      >
        {/* Child components, such as markers, info windows, etc. */}
        {showItems.sites && (
          <MapMarkers
            setJsonIndex={setJsonIndex}
            dataArr={sites}
            markerRepresentation="sites"
            setCurrentInfoWindow={setCurrentInfoWindow}
            icon={civIcon}
            labelShow={false}
          />
        )}
        {showItems.civilizations && (
          <MapMarkers
            setJsonIndex={setJsonIndex}
            dataArr={civilizations}
            markerRepresentation="civilizations"
            setCurrentInfoWindow={setCurrentInfoWindow}
            icon={languageIcon}
            labelShow={true}
            showItems={showItems.individualCivilizations}
          />
        )}
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
        <Button
          variant="outlined"
          color="secondary"
          sx={{
            position: "absolute",
            right: { xs: 70 },
            top: 5,
            fontSize: 10,
            display: "flex",
            flexDirection: "column",
          }}
          onClick={() => setShowMapLegend(!showMapLegend)}
        >
          <Box>{showMapLegend ? "Hide" : "Show"}</Box>
          <Box>Legend</Box>
        </Button>
        {showMapLegend && (
          <MapLegend
            showItems={showItems}
            setShowItems={setShowItems}
            jsonIndex={jsonIndex}
          />
        )}
      </GoogleMap>
    );
  }
  return RenderMap(props);
}

export default React.memo(MapComponent);
