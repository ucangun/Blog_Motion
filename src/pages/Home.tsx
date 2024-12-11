import { Container } from "@mui/material";
import HomeMasonry from "../components/Home/Masonry";
import useBlogCall from "../hooks/useBlogCall";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import PopularSection from "../components/Home/PopularSection";
import TopBlogWriter from "../components/Home/TopBlogWriter";
import Newsletter from "../components/Home/Newsletter";
import RecomendedSection from "../components/Home/RecommendedSection";
import Footer from "../components/Footer";

const Home = () => {
  const { getBlogData } = useBlogCall();
  const { blogs } = useSelector((state: RootState) => state.blog);
  const firstThreeBlogs = blogs.slice(2, 5);

  useEffect(() => {
    getBlogData("blogs");
  }, []);

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
      <HomeMasonry firstThreeBlogs={firstThreeBlogs} />
      <PopularSection />
      <TopBlogWriter />
      <RecomendedSection />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Home;
