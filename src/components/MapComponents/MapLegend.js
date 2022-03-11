import React from "react";
import { Box } from "@mui/system";
import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  CardMedia,
} from "@mui/material";
import { CollapseComponent } from "../ReusableComponents/CollapseComponent";
import { civIcon, languageIcon } from "../../media/index";
import civilizationJson from "../../data/civilizations.json";

export const MapLegend = (props) => {
  const { showItems, setShowItems, jsonIndex } = props;

  const label = {
    sx: { color: "secondary.main" },
  };

  const formGroupStyles = {
    formLabelContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    individualLabels: {
      sx: { pl: { xs: "20%" }, color: "secondary.main", fontFamily: "cursive" },
    },
    checkboxProps: { color: "secondary" },
  };

  const collapseComponentStyles = {
    labelStyles: {
      color: (theme) => {
        return theme.palette.customColors.lightBlue;
      },
      width: { xs: "min-content" },
      ml: { xs: "20%" },
      display: "flex",
      alignItems: "center",
    },
    minMaxIcon: { fontSize: { xs: 25 }, fontWeight: "bold" },
    filterText: { pl: { xs: 2, whiteSpace: "nowrap" } },
  };

  const handleChange =
    (itemKey, extendedObjectKey = null) =>
    (event) => {
      //extendObjectKey handles case in which individualCivilizations state Object is the event
      setShowItems((prev) => {
        extendedObjectKey
          ? (prev.individualCivilizations[extendedObjectKey] =
              !prev.individualCivilizations[extendedObjectKey])
          : (prev[itemKey] = !prev[itemKey]);
        return {
          ...prev,
        };
      });
    };

  const individualCivilizationsNameArr = Object.keys(
    showItems.individualCivilizations
  );

  const individualCivilizationCheckBoxGroup = () => {
    return individualCivilizationsNameArr.map((item) => {
      const civItem = civilizationJson.find((civItem) => civItem.name === item);
      return (
        <Box sx={formGroupStyles.formLabelContainer} key={item}>
          <FormControlLabel
            {...formGroupStyles.individualLabels}
            control={<Checkbox {...formGroupStyles.checkboxProps} />}
            label={item}
            componentsProps={{ typography: { sx: { fontFamily: "cursive" } } }}
            onChange={handleChange("individualCivilizations", item)}
            checked={showItems.individualCivilizations[item]}
          />
          <CardMedia
            src={civItem.images[0].thumbnail}
            sx={{
              width: { xs: 20, md: 30 },
              height: { xs: 20, md: 30 },
              borderRadius: 1,
            }}
            component="img"
          />
        </Box>
      );
    });
  };

  return (
    <Box
      sx={{
        position: "absolute",
        right: { xs: 5 },
        top: { xs: 100 },
        py: { xs: 1 },
        px: { xs: 2 },
        border: "5px solid #1976d2",
        backgroundColor: "#0b335b",
        borderRadius: 2,
        opacity: jsonIndex === null ? 1 : 0,
      }}
    >
      <Box
        sx={{
          color: "primary.main",
          bgcolor: "secondary.main",
          fontSize: { xs: 23 },
          textAlign: "center",
          pb: { xs: 1 },
          fontWeight: "500",
          borderRadius: 1,
        }}
      >
        Map Legend
      </Box>
      <Box>
        <FormGroup>
          <Box sx={formGroupStyles.formLabelContainer}>
            <FormControlLabel
              {...label}
              control={<Checkbox {...formGroupStyles.checkboxProps} />}
              label="Settlement Sites"
              onChange={handleChange("sites")}
              checked={showItems["sites"]}
            />
            <CardMedia
              src={civIcon}
              component="img"
              sx={{
                width: { xs: 20, md: 40 },
                height: { xs: 20, md: 40 },
                borderRadius: 3,
              }}
            />
          </Box>
          <Box sx={formGroupStyles.formLabelContainer}>
            <FormControlLabel
              {...label}
              control={<Checkbox {...formGroupStyles.checkboxProps} />}
              label="Civilizations"
              onChange={handleChange("civilizations")}
              checked={showItems["civilizations"]}
            />
            <CardMedia
              src={languageIcon}
              component="img"
              sx={{
                width: { xs: 20, md: 30 },
                height: { xs: 20, md: 30 },
                borderRadius: 3,
              }}
            />
          </Box>

          <CollapseComponent
            label={
              <>
                <Box sx={collapseComponentStyles.minMaxIcon}>+</Box>
                <Box sx={collapseComponentStyles.filterText}>
                  Filter By Civilization
                </Box>
              </>
            }
            labelStyles={collapseComponentStyles.labelStyles}
            alternativeLabel={
              <>
                <Box sx={collapseComponentStyles.minMaxIcon}>-</Box>
                <Box sx={collapseComponentStyles.filterText}>
                  Minimize Filter
                </Box>
              </>
            }
            component={
              <FormGroup>{individualCivilizationCheckBoxGroup()}</FormGroup>
            }
          />
        </FormGroup>
      </Box>
    </Box>
  );
};
