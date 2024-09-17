import { PersistGate } from "redux-persist/integration/react";
import AppRouter from "./router/AppRouter";
import { persistor, RootState } from "./app/store";
import { ThemeProvider } from "@mui/material/styles";

import { darkTheme } from "./theme.ts";
import { lightTheme } from "./theme.ts";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const { mode } = useSelector((state: RootState) => state.theme);

  useEffect(() => {
    const htmlElement = document.documentElement;

    if (mode === "dark") {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
  }, [mode]);

  return (
    <>
      <ThemeProvider theme={mode === "dark" ? darkTheme : lightTheme}>
        <PersistGate loading={null} persistor={persistor}>
          <AppRouter />
        </PersistGate>
      </ThemeProvider>
    </>
  );
}

export default App;
