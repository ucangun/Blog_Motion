import { Container } from "@mui/material";
import HomeMasonry from "../components/Home/Masonry";
import useBlogCall from "../hooks/useBlogCall";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import PopularSection from "../components/Home/PopularSection";
import ArticleList from "../components/Home/TopBlogWriter";

const Home = () => {
  const { getBlogData } = useBlogCall();
  const { blogs } = useSelector((state: RootState) => state.blog);
  const firstThreeBlogs = blogs.slice(0, 3);

  useEffect(() => {
    getBlogData("blogs");
  }, []);

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "1rem 0.1rem",
      }}
    >
      <HomeMasonry firstThreeBlogs={firstThreeBlogs} />
      <PopularSection />
      <ArticleList />
    </Container>
  );
};

export default Home;
