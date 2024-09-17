import { Container } from "@mui/material";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        padding: ".5rem ",
      }}
    >
      <Navbar />
    </Container>
  );
};

export default Home;
