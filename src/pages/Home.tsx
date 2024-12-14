import { Container } from "@mui/material";
import HomeMasonry from "../components/Home/Masonry";
import PopularSection from "../components/Home/PopularSection";
import TopBlogWriter from "../components/Home/TopBlogWriter";
import Newsletter from "../components/Home/Newsletter";
import RecomendedSection from "../components/Home/RecommendedSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: ".8rem",
        padding: "1rem 0.1rem",
      }}
    >
      <HomeMasonry />
      <PopularSection />
      <TopBlogWriter />
      <RecomendedSection />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Home;
