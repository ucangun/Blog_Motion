import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useBlogCall from "../hooks/useBlogCall";
import { Box, Container, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import MyButton from "../components/Button";

const Blog = () => {
  const navigate = useNavigate();
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

      <Box
        sx={{
          padding: "1rem 3rem",
        }}
      >
        <MyButton type="secondary" onClick={() => navigate(-1)}>
          &larr; Back all Blogs
        </MyButton>
      </Box>

      <Box
        sx={{
          padding: "2rem 3rem",
        }}
      >
        <Box>
          <Typography variant="h4">{singleBlog?.title}</Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{
            padding: "3rem 0",
          }}
        >
          {singleBlog?.content}
        </Typography>
      </Box>
    </Container>
  );
};

export default Blog;
