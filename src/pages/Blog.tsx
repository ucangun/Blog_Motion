import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useBlogCall from "../hooks/useBlogCall";
import { Box, Container } from "@mui/material";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

const Blog = () => {
  const { id } = useParams();
  const { getSingleBlog } = useBlogCall();
  const { singleBlog } = useSelector((state: RootState) => state.blog);
  console.log(singleBlog);

  useEffect(() => {
    if (id) {
      getSingleBlog(id);
    }
  }, [id]);

  return (
    <Container
      sx={{
        padding: ".4rem 0.1rem",
      }}
    >
      <Navbar />

      <Box
        sx={{
          padding: ".8rem .4rem ",
        }}
      >
        <img
          src={singleBlog?.image}
          alt={singleBlog?.title}
          style={{ borderRadius: ".5rem" }}
        />
      </Box>
    </Container>
  );
};

export default Blog;
