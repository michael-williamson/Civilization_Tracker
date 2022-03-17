import React from "react";
import { Box } from "@mui/system";
import { EventsTimeline } from "./EventsTimeline";

export const ChartPage = () => {
  return (
    <div>
      <Box
        sx={{
          fontSize: { xs: 40 },
          color: "primary.main",
          fontWeight: "bold",
          textAlign: "center",
          py: { xs: 2 },
        }}
      >
        Charts
      </Box>
      <EventsTimeline />
    </div>
  );
};
