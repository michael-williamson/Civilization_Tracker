import React from "react";
import { Box } from "@mui/system";
import { theme } from "../../Theme";
import { EventsTimeline } from "./EventsTimeline";
import { ComponentHeader } from "../ReusableComponents/ComponentHeader";
import { componentHeaderStyles } from "../../helperFunctions";
import { chartsIcon } from "../../media";

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
      <ComponentHeader
        text="Charts"
        additionalTextStyles={{ px: { xs: 0, md: 3 } }}
        icon={true}
        iconProps={{ src: chartsIcon, iconWidthSM: 80, iconWidthLG: 70 }}
        {...componentHeaderStyles}
        {...{ display: "flex", alignItems: "center" }}
      />

      <EventsTimeline theme={theme} />
    </Box>
  );
};
