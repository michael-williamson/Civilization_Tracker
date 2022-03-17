import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CollapseComponent } from "../ReusableComponents/CollapseComponent";
import { Box } from "@mui/system";
import { CardMedia } from "@mui/material";
import { Button } from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

const mainStylesExpanded = {
  display: "grid",
  gridTemplateRows: "auto",
  gridTemplateColumns: "repeat(4,1fr)",
  alignItems: "center",
  borderBottom: "6px solid #1976d2",
  pb: { md: 0 },
  width: { xs: "100%" },
  "& .MuiCollapse-root": {
    gridColumn: { xs: "span 4", md: "span 3" },
  },
};

const mainStylesCollapsed = {
  display: "grid",
  gridTemplateRows: "auto",
  gridTemplateColumns: "repeat(4,1fr)",
  alignItems: "center",
  borderBottom: "6px solid #1976d2",
  pb: { md: 0 },
  width: { xs: "100%" },
  "& .MuiCollapse-root": {
    gridColumn: { xs: "span 4", md: "span 3" },
  },
};

const labelStylesExpanded = {
  color: "primary.main",
  gridColumn: { xs: "span 4", md: "span 1" },
  fontSize: { xs: 30 },
  width: { xs: "100%" },
  textAlign: "center",
  py: { xs: 1 },
  fontWeight: "bold",
};

const labelStylesCollapsed = {
  color: "primary.main",
  gridColumn: { xs: "span 4", md: "span 1" },
  width: { xs: "100%" },
  textAlign: "left",
  py: { xs: 1 },
};

const civilizationsMenu = (civilizationsJson) => {
  return civilizationsJson.map((item, index) => {
    if (item.name === "") return null;
    return (
      <Box key={index}>
        <Link
          sx={{
            px: { xs: 0 },
            py: { xs: 2 },
            borderRadius: 2,
            textAlign: "center",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          to={`/Civilizations/${item.name}`}
        >
          <Box
            sx={{
              fontSize: { xs: 20 },
              color: "primary.main",
              fontWeight: "bold",
              pb: { xs: 2 },
              textAlign: "center",
            }}
          >
            {item.name}
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CardMedia
              src={item.images[0].thumbnail}
              sx={{
                width: { xs: 60, md: 140 },
                height: { xs: 90, md: 140 },
                borderRadius: 3,
              }}
              component="img"
            />
          </Box>
        </Link>
      </Box>
    );
  });
};

export const CivilizationMenu = (props) => {
  const [secondaryChecked, setSecondaryChecked] = useState(null);
  const { civilizationsJson, civilization, timeout } = props;
  const labelStyles = civilization ? labelStylesCollapsed : labelStylesExpanded;
  const mainStyles = civilization ? mainStylesCollapsed : mainStylesExpanded;
  const handleClick = (bool) => (e) => {
    setSecondaryChecked(bool);
  };
  const label = secondaryChecked ? (
    <Button
      variant="contained"
      sx={{ fontWeight: "bold" }}
      endIcon={<KeyboardArrowUp />}
      onClick={handleClick(false)}
    >
      Hide Menu
    </Button>
  ) : (
    <Button
      variant="contained"
      sx={{ fontWeight: "bold" }}
      endIcon={<KeyboardArrowDown />}
      onClick={handleClick(true)}
    >
      Show Menu
    </Button>
  );

  return (
    <CollapseComponent
      mainStyles={mainStyles}
      labelStyles={labelStyles}
      label={label}
      timeout={timeout}
      component={
        <Box
          sx={{
            width: { xs: "100%" },
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          {civilizationsMenu(civilizationsJson)}
        </Box>
      }
      defaultExpanded={!civilization}
      secondaryChecked={civilization && !secondaryChecked}
    />
  );
};
