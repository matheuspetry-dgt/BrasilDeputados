import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PaginaBase } from "./components/PaginaBase";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#212121",
    },
    primary: {
      contrasteForte: '#3B82F6',
      main: '#4B7580',
      light: '#BACFD5',
      dark: '#0D2B33'
    },
  },
  typography: {
      fontFamily: "Inter",
    },
});

function AppRoutes() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<PaginaBase />}></Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default AppRoutes;
