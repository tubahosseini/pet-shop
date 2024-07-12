import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  typography: {
    fontFamily: "sans-serif", //!change it to inter!
  },
  palette: {
    primary: {
      main: "#FFFFFF", //white
      dark: "#A389FF", //purple
      light: "#F1AE4B", //orange
    },
  },
});

// Apply responsive font sizes
theme = responsiveFontSizes(theme);

export { theme };
