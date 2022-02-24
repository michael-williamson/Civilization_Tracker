import React from "react";
import { Box } from "@mui/system";

const sharedStylingFieldContainer = { pb: { xs: 2, md: 2 } };

export const SitesInfoWindow = (props) => {
  const { item } = props;
  return (
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
            justifyContent: "center",
            fontSize: { xs: 20, md: 30 },
            fontWeight: "bold",
            ...sharedStylingFieldContainer,
          }}
        >
          {/* <Box color="primary.main">Link to Info: </Box>{" "} */}
          <Box
            sx={{
              pl: { xs: 2, md: 4 },
            }}
          >
            <a href={item.linkToInfo}>click here for more info</a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
