import { createTheme } from "@mui/material/styles";

const lightPalette = {
  primary: {
    light: "#14b8a6", // teal 500
    main: "#BBB2CD", // teal 600
    dark: "#0f766e", // teal 700
    contrastText: "#fff",
  },
  secondary: {
    light: "#f7fee7",
    main: "#fffbeb",
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
