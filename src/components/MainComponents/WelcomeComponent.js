import React from "react";
import { Box } from "@mui/system";
import { IconComponent } from "./IconComponent";
import { pyramidIcon, potteryIcon, hayIcon } from "../../media/index";
import { ComponentHeader } from "../ReusableComponents/ComponentHeader";
import { componentHeaderStyles } from "../../helperFunctions/index";

export const WelcomeComponent = () => {
  return (
    <Box
      sx={{
        display: "grid",
        justifyItems: "center",
        rowGap: 3,
      }}
    >
      <ComponentHeader
        text="Welcome to Origins of Civilization"
        {...componentHeaderStyles}
      />
      <Box
        sx={{
          fontSize: { xs: 30 },
          fontStyle: "italic",
          textAlign: "center",
          color: "primary.main",
          py: { xs: 1 },
          px: { md: 2 },
        }}
      >
        "A Discovery of our societal Beginnings"
      </Box>
      <Box
        sx={{
          display: "grid",
          justifyItems: "center",
          rowGap: { xs: 5 },
          border: (theme) => `1px solid ${theme.palette.primary.main}`,
          py: { xs: 3 },
          px: { xs: 3 },
          borderRadius: 2,
          width: "80%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-evenly",
            backgroundColor: "azure",
            width: { xs: "100%" },
          }}
        >
          <IconComponent
            iconSrc={pyramidIcon}
            altText="pyramid"
            height="inherit"
            width="inherit"
          />
          <IconComponent
            iconSrc={potteryIcon}
            altText="pottery"
            height="inherit"
            width="inherit"
          />
          <Box
            sx={{
              width: {
                xs: "100%",
              },
              fontStyle: "italic",
              color: "primary.main",
              textAlign: "center",
            }}
          >
            "megalith construction and pottery creation"
          </Box>
        </Box>
        <Box
          sx={{
            fontSize: { xs: 20 },
            fontFamily: "cursive",
            textAlign: "center",
            color: "primary.main",
            borderTop: "7px double rgb(0 0 0 / 41%)",
            borderBottom: "7px double rgb(0 0 0 / 41%)",
            py: { xs: 1 },
          }}
        >
          Explore the beginnings of Human civilization by discovering the early
          ages of agriculture and the locations of its origins, the development
          of population centers, and development of advanced trade and barter.
        </Box>
        <Box
          sx={{
            display: "flex",

            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-evenly",
            backgroundColor: "azure",
            width: { xs: "100%" },
          }}
        >
          <IconComponent
            iconSrc={hayIcon}
            altText="hay"
            height="inherit"
            width="inherit"
          />
          <Box
            sx={{
              width: {
                xs: "100%",
              },
              fontStyle: "italic",
              color: "primary.main",
              textAlign: "center",
            }}
          >
            "domestication of wild grains for farming"
          </Box>
        </Box>
        <Box
          sx={{
            fontSize: { xs: 20 },
            fontFamily: "cursive",
            textAlign: "center",
            color: "primary.main",
            borderTop: "7px double rgb(0 0 0 / 41%)",
            borderBottom: "7px double rgb(0 0 0 / 41%)",
            py: { xs: 1 },
          }}
        >
          This journey takes us into the mysterious as well as the magnificent,
          from the ancient Sumerians to the far east "". Marvel at the
          ingenuity, artistry, and sheer will of those who built the first
          blocks of what would become our modern world.
        </Box>
      </Box>
    </Box>
  );
};
