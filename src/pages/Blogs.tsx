import { useSelector } from "react-redux";
import BlogCard from "../components/Blogs/BlogCard";
import useBlogCall from "../hooks/useBlogCall";
import { RootState } from "../app/store";
import { useEffect } from "react";
import { Container, Grid2 } from "@mui/material";
import MuiPagination from "../components/Pagination";
import useUtilsCall from "../hooks/useUtilsCall";

const Blogs = () => {
  const { getBlogData } = useBlogCall();
  const { getNewsData } = useUtilsCall();
  const { pagBlogs } = useSelector((state: RootState) => state.blog);
  const { data } = useSelector((state: RootState) => state.utils);

  useEffect(() => {
    getBlogData("blogs");
    getNewsData();
  }, []);

  console.log(data);

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
        {pagBlogs.map((item) => (
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
