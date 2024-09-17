import { Container } from "@mui/material";
import Navbar from "../components/Navbar";
import HomeMasonry from "../components/Masonry";
import useBlogCall from "../hooks/useBlogCall";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

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
        padding: ".5rem ",
      }}
    >
      <Navbar />
      <HomeMasonry firstThreeBlogs={firstThreeBlogs} />
    </Container>
  );
};

export default Home;
