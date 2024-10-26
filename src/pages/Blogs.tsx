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
    getNewsData();
  }, []);

  return (
    <Grid2
      container
      spacing={{ xs: 6, md: 2 }}
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: "4rem .3rem",
      }}
    >
      <Grid2
        size={{ xs: 12, md: 7 }}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        {pagBlogs.map((item) => (
          <Box display="flex" key={item._id}>
            <BlogCard item={item} />
          </Box>
        ))}
        <MuiPagination />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 5 }}>
        <NewsSection />
      </Grid2>
    </Grid2>
  );
};

export default Blogs;
