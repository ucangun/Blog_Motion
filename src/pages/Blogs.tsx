import { useSelector } from "react-redux";
import BlogCard from "../components/Blogs/BlogCard";
import useBlogCall from "../hooks/useBlogCall";
import { RootState } from "../app/store";
import { useEffect } from "react";
import { Box, Grid2 } from "@mui/material";
import MuiPagination from "../components/Pagination";
import useUtilsCall from "../hooks/useUtilsCall";
import NewsSection from "../components/Blogs/NewsSection";
import CategoryBubbles from "../components/Blogs/CategoryBubbles";

const Blogs = () => {
  const { getBlogData } = useBlogCall();
  const { getNewsData } = useUtilsCall();
  const { pagBlogs } = useSelector((state: RootState) => state.blog);

  // Fetching blog and category data on component mount
  useEffect(() => {
    getBlogData("blogs");
    getBlogData("categories");
    getNewsData();
  }, []);

  return (
    <Grid2
      container
      spacing={{ xs: 4, md: 1 }}
      sx={{
        display: "flex",
        padding: "1rem .3rem",
        maxHeight: "120vh",
        overflow: "hidden",
      }}
    >
      {/* CategoryBubbles for Small Screens (xs and sm) */}
      <Grid2
        size={{ xs: 12 }}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        <CategoryBubbles />
      </Grid2>

      <Grid2
        size={{ xs: 12, md: 8 }}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          borderRight: "1px solid #f5f5f5",
          maxHeight: "calc(110vh - 1rem)",
          overflowY: "auto",
          position: "relative",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        }}
      >
        {/* Blogs section: Display each blog card */}
        {pagBlogs.map((item) => (
          <Box display="flex" key={item._id}>
            <BlogCard item={item} />
          </Box>
        ))}

        {/* Pagination for blog list */}
        <Box
          sx={{
            display: { xs: "flex", sm: "flex" },
            justifyContent: "center",
            width: "100%",
            marginTop: "1rem",
          }}
        >
          <MuiPagination />
        </Box>
      </Grid2>

      <Grid2
        size={{ xs: 12, md: 4 }}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          maxHeight: "calc(110vh - 1rem)",
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        }}
      >
        {/* News section: Display news articles */}
        <NewsSection />

        {/* CategoryBubbles for Medium+ Screens (md and above) */}
        <Box
          sx={{
            display: { xs: "none", md: "block" },
          }}
        >
          <CategoryBubbles />
        </Box>
      </Grid2>
    </Grid2>
  );
};

export default Blogs;
