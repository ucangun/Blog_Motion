import { useSelector } from "react-redux";
import BlogCard from "../components/Blogs/BlogCard";
import useBlogCall from "../hooks/useBlogCall";
import { RootState } from "../app/store";
import { useEffect } from "react";
import { Box, Grid2 } from "@mui/material";
import MuiPagination from "../components/Pagination";
import useUtilsCall from "../hooks/useUtilsCall";
import NewsSection from "../components/Blogs/NewsSection";

const Blogs = () => {
  const { getBlogData } = useBlogCall();
  const { getNewsData } = useUtilsCall();
  const { pagBlogs } = useSelector((state: RootState) => state.blog);

  useEffect(() => {
    getBlogData("blogs");
    getBlogData("categories");
    getNewsData();
  }, []);

  return (
    <Grid2
      container
      spacing={{ xs: 4, md: 2 }}
      sx={{
        display: "flex",
        padding: "1rem .3rem",
      }}
    >
      <Grid2
        size={{ xs: 12, md: 8 }}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        {pagBlogs.map((item) => (
          <Box display="flex" key={item._id}>
            <BlogCard item={item} />
          </Box>
        ))}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            marginTop: "1rem",
          }}
        >
          <MuiPagination />
        </Box>
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <NewsSection />
      </Grid2>
    </Grid2>
  );
};

export default Blogs;
