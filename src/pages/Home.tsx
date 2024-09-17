import { Container } from "@mui/material";
import Navbar from "../components/Navbar";

import HomeMasonry from "../components/Masonry";

const Home = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        padding: ".5rem ",
      }}
    >
      <Navbar />
      <HomeMasonry />
    </Container>
  );
};

export default Home;
