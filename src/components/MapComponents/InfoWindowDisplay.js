import React from "react";
import { InfoWindow } from "@react-google-maps/api";
import sites from "../../data/sites.json";
import { Box } from "@mui/system";

const sharedStylingFieldContainer = { pb: { xs: 2, md: 2 } };

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
        <Box
          sx={{
            textAlign: "center",
            color: "primary.main",
            fontSize: { xs: 20, md: 40 },
            fontWeight: "bold",
          }}
        >
          {item.name}
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <img
            src={item.images[0].display}
            alt={item.name}
            style={{ border: "10px groove black" }}
          />
        </Box>
        <Box sx={{ py: { xs: 4 } }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              fontSize: { xs: 20, md: 30 },
              fontWeight: "bold",
              fontStyle: "italic",
              ...sharedStylingFieldContainer,
            }}
          >
            {/* <Box color="primary.main">Date: </Box>{" "} */}
            <Box sx={{ pl: { xs: 2, md: 4 }, color: "black" }}>
              {item.numbericDate} years ago
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              fontSize: { xs: 20, md: 30 },
              fontWeight: "bold",
              ...sharedStylingFieldContainer,
            }}
          >
            {/* <Box color="primary.main">Description: </Box> */}
            <Box
              sx={{
                fontSize: { xs: 20, md: 20 },
                px: { xs: 4 },
                textAlign: "center",
              }}
            >
              {item.description}
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              fontSize: { xs: 20, md: 30 },
              fontWeight: "bold",
              ...sharedStylingFieldContainer,
            }}
          >
            {/* <Box color="primary.main">Link to Info: </Box>{" "} */}
            <Box sx={{ pl: { xs: 2, md: 4 } }}>
              <a href={item.linkToInfo}>more info</a>
            </Box>
          </Box>
        </Box>
      </Box>
    </InfoWindow>
  );
};
