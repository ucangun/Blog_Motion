import { createTheme } from "@mui/material/styles";

const lightPalette = {
  primary: {
    green: "#44E57F",
    main: "#BBB2CD",
    dark: "#a8a0b9",
    text: "#fff",
  },
  secondary: {
    light: "#f7fee7",
    main: "#fff",
    dark: "#4d7c0f",
    contrastText: "#262626",
  },
};

const darkPalette = {
  primary: {
    light: "#475569", // slate 600
    main: "#020617", // slate 950
    dark: "#111827", // gray 900
    contrastText: "#fff",
  },
  secondary: {
    light: "#334155", // slate 700
    main: "#64748b", // slate 500
    dark: "#333",
    contrastText: "#fff",
  },
};

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    ...lightPalette,
  },
  components: {},
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    ...darkPalette,
  },
  typography: {},
  components: {},
});
