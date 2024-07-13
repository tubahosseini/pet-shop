import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  typography: {
    fontFamily: "sans-serif", //!change it to inter!
  },
  palette: {
    primary: {
      main: "#A389FF", //purple
      dark: "#F1AE4B", //orange
      light: "#000", //white
    },
  },
});

// Apply responsive font sizes
theme = responsiveFontSizes(theme);

export { theme };
