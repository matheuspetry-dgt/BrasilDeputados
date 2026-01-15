import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Container } from "@mui/material";

export const PaginaBase = () => {
  return (
    <Container>
      <Header />

      <Outlet />
    </Container>
  );
};
