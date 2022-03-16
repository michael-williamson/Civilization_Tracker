import React from "react";
import { Box } from "@mui/system";
import { routes } from "../../routes";
import { Link } from "react-router-dom";

export const CivilizationsInfoWindow = (props) => {
  const { item } = props;
  const itemBGImage = item.images[0].display || null;
  return (
    <Box>
      <Box
        sx={{
          display: "grid",
          rowGap: 3,
          justifyItems: "center",
          py: { xs: 4 },
          isolation: "isolate",
          zIndex: 1,
          position: "relative",
          background: `url(${itemBGImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundAttachment: "fixed",
          "& ::after": {
            content: "''",
            backgroundColor: "black",
            inset: 0,
            position: "absolute",
            filter: "opacity(0.2)",
            zIndex: -1,
          },
        }}
      >
        <Box
          sx={{
            width: { xs: "30%" },
            color: "white",
            fontSize: { xs: 20, md: 40 },
            fontWeight: "bold",
            textAlign: "center",
            borderRadius: 1,
          }}
        >
          {item.name}
        </Box>
        <Box
          sx={{
            fontSize: { xs: 20, md: 30 },
            fontWeight: "bold",
            fontStyle: "italic",
            color: "secondary.main",
          }}
        >
          {item.numbericDate} years ago
        </Box>

        <Box sx={{ overflow: "scroll", height: { xs: 300 } }}>
          <Box
            sx={{
              fontSize: { xs: 12, md: 20 },
              px: { xs: 2, md: 1 },
              py: { xs: 2, md: 2 },
              borderRadius: 1,
              lineHeight: 3,
              fontWeight: 600,
              textAlign: "center",
              color: "white",
            }}
          >
            {item.summary}
          </Box>
          <Box
            sx={{
              fontSize: { xs: 20, md: 30 },
              fontWeight: "bold",
              textAlign: "center",
              //padding allows container to scroll past link for visibility
              pb: { xs: 12 },
            }}
          >
            <Link to={`${routes.Civilizations}/${item.name}`}>
              click here for more info
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
