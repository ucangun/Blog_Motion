import { useSelector } from "react-redux";
import BlogCard from "../components/Blogs/BlogCard";
import useBlogCall from "../hooks/useBlogCall";
import { RootState } from "../app/store";
import { useEffect } from "react";
import { Container, Grid2 } from "@mui/material";
import Navbar from "../components/Navbar";

const Blogs = () => {
  const { getBlogs } = useBlogCall();
  const { blog } = useSelector((state: RootState) => state.blog);

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <Container
      sx={{
        padding: ".4rem 0.1rem",
        display: "flex",
        flexDirection: "column",
        gap: "4rem",
      }}
    >
      <Navbar />
      <Grid2 container spacing={6} justifyContent="center" alignItems="center">
        {blog.map((item) => (
          <Grid2
            display="flex"
            justifyContent="center"
            key={item._id}
            size={12}
          >
            <BlogCard item={item} />
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default Blogs;
