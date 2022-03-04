import React from "react";
import { CollapseComponent } from "../ReusableComponents/CollapseComponent";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";

const mainStylesExpanded = {
  display: "grid",
  gridTemplateRows: "auto",
  gridTemplateColumns: "repeat(4,1fr)",
  alignItems: "center",
  borderBottom: "6px solid #1976d2",
  pb: { md: 0 },
  width: { md: "100%" },
  "& .MuiCollapse-root": {
    gridColumn: "span 3",
  },
};

const mainStylesCollapsed = {
  display: "grid",
  gridTemplateRows: "auto",
  gridTemplateColumns: "repeat(4,1fr)",
  alignItems: "center",
  borderBottom: "6px solid #1976d2",
  pb: { md: 0 },
  width: { md: "100%" },
  "& .MuiCollapse-root": {
    gridColumn: "span 3",
  },
};

const labelStylesExpanded = {
  color: "primary.main",
  gridColumn: "span 1",
  fontSize: { xs: 30 },
  width: { xs: "100%" },
  textAlign: "center",
  py: { xs: 1 },
  fontWeight: "bold",
};

const labelStylesCollapsed = {
  color: "primary.main",
  width: { xs: "100%" },
  textAlign: "left",
  py: { xs: 1 },
};

const civilizationsMenu = (setCivilization, civilizationsJson) => {
  return civilizationsJson.map((item, index) => {
    if (item.name === "") return null;
    return (
      <Box key={index}>
        <Box
          sx={{
            px: { xs: 4 },
            py: { xs: 2 },
            borderRadius: 2,
            textAlign: "center",
            cursor: "pointer",
          }}
          onClick={() => setCivilization(item.name)}
        >
          <Box
            sx={{
              fontSize: { xs: 20 },
              color: "primary.main",
              fontWeight: "bold",
              pb: { md: 2 },
            }}
          >
            {item.name}
          </Box>
          <Box>
            <img
              src={item.images[0].thumbnail}
              alt={item.name}
              width="100px"
              height="140px"
              style={{ borderRadius: 21 }}
            />
          </Box>
        </Box>
      </Box>
    );
  });
};

export const CivilizationMenu = (props) => {
  const { civilizationsJson, setCivilization, civilization, timeout } = props;
  const labelStyles = civilization ? labelStylesCollapsed : labelStylesExpanded;
  const mainStyles = civilization ? mainStylesCollapsed : mainStylesExpanded;
  const handleClick = () => {
    setCivilization(null);
  };
  const label = civilization ? (
    <Button
      variant="contained"
      sx={{ fontWeight: "bold" }}
      endIcon={<KeyboardArrowDown />}
      onClick={handleClick}
    >
      Show Menu
    </Button>
  ) : (
    "Choose a Civilization:"
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
            width: { md: "50%", lg: "100%" },
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          {civilizationsMenu(setCivilization, civilizationsJson)}
        </Box>
      }
      defaultExpanded={true}
      secondaryChecked={civilization}
    />
  );
};
