import { createTheme } from "@mui/material/styles";

const googleFonts = {
  amatic: "Amatic SC",
  comfortaa: "Comfortaa",
  gloria: "Gloria Hallelujah",
  mosaic: "Palette Mosaic",
  marker: "Permanent Marker",
};

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
      light: "#fff",
    },
    secondary: {
      main: "#fff",
    },
    customColors: {
      lightBlue: "#7af3ff",
      bgBlue: "#56b0ff",
      navBar: "#9f71321c",
      civilizationDrawerBG: "#0c0c0c",
      titleBG: "rgb(20 20 20 / 16%)",
    },
  },
  fonts: {
    ...googleFonts,
  },
});

//primary.main for copy paste
// 1976d2

// font-family: 'Amatic SC', cursive;
// font-family: 'Comfortaa', cursive;
// font-family: 'Gloria Hallelujah', cursive;
// font-family: 'Palette Mosaic', cursive;
// font-family: 'Permanent Marker', cursive;
