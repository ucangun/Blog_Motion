import { Container } from "@mui/material";
import Navbar from "../components/Navbar";
import HomeMasonry from "../components/Masonry";
import useBlogCall from "../hooks/useBlogCall";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import PopularSection from "../components/Home/PopularSection";

const Home = () => {
  const { getBlogs } = useBlogCall();
  const { blog } = useSelector((state: RootState) => state.blog);
  const firstThreeBlogs = blog.slice(0, 3);

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: ".5rem",
        padding: ".5rem ",
      }}
    >
      <Navbar />
      <HomeMasonry firstThreeBlogs={firstThreeBlogs} />
      <PopularSection />
    </Container>
  );
};

export default Home;
