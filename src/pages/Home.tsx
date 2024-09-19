import { Container } from "@mui/material";
import HomeMasonry from "../components/Home/Masonry";
import useBlogCall from "../hooks/useBlogCall";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import PopularSection from "../components/Home/PopularSection";

const Home = () => {
  const { getBlogs } = useBlogCall();
  const { blogs } = useSelector((state: RootState) => state.blog);
  const firstThreeBlogs = blogs.slice(0, 3);

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: ".5rem",
        padding: ".4rem 0.1rem",
      }}
    >
      <HomeMasonry firstThreeBlogs={firstThreeBlogs} />
      <PopularSection />
    </Container>
  );
};

export default Home;
