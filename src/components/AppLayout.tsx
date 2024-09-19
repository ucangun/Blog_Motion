import { Container } from "@mui/material";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <Container
      sx={{
        padding: ".4rem 0.1rem",
      }}
    >
      <Navbar />
      <Outlet />
    </Container>
  );
};

export default AppLayout;
