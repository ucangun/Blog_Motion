import { useSelector } from "react-redux";
import BlogCard from "../components/Blogs/BlogCard";
import useBlogCall from "../hooks/useBlogCall";
import { RootState } from "../app/store";
import { useEffect } from "react";
import { Container, Grid2 } from "@mui/material";
import MuiPagination from "../components/Pagination";
import { getBlogSuccess } from "../features/blogSlice";

const Blogs = () => {
  const { getBlogData } = useBlogCall();
  const { blogs, currentPage, itemsPerPage } = useSelector(
    (state: RootState) => state.blog
  );

  useEffect(() => {
    getBlogData("blogs", getBlogSuccess);
  }, []);

  const indexOfLastBlog = currentPage * itemsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - itemsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "4rem",
        padding: "3rem 0.1rem",
      }}
    >
      <Grid2 container spacing={2} justifyContent="center" alignItems="center">
        {currentBlogs.map((item) => (
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
      <MuiPagination />
    </Container>
  );
};

export default Blogs;
