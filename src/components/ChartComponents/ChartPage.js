import React from "react";
import { Box } from "@mui/system";
import { EventsTimeline } from "./EventsTimeline";
import { ComponentHeader } from "../ReusableComponents/ComponentHeader";
import { componentHeaderStyles } from "../../helperFunctions";

export const ChartPage = () => {
  return (
    <Box
      sx={{
        display: "grid",

        justifyItems: "center",
        width: { xs: "100%", md: "70%" },
        mx: { md: "auto" },
        pb: { md: 8 },
      }}
    >
      <ComponentHeader text="Charts" {...componentHeaderStyles} />
      <EventsTimeline />
    </Box>
  );
};
