import { useSelector } from "react-redux";
import BlogCard from "../components/Blogs/BlogCard";
import useBlogCall from "../hooks/useBlogCall";
import { RootState } from "../app/store";
import { useEffect, useState } from "react";
import { Box, Grid2 } from "@mui/material";
import MuiPagination from "../components/Pagination";
import useUtilsCall from "../hooks/useUtilsCall";
import NewsSection from "../components/Blogs/NewsSection";
import CategoryBubbles from "../components/Blogs/CategoryBubbles";
import BlogsSkeleton from "../components/Blogs/BlogsSkeleton";
const Blogs = () => {
  const { getBlogData } = useBlogCall();
  const { getNewsData } = useUtilsCall();
  const { pagBlogs, filteredBlogs, loading } = useSelector(
    (state: RootState) => state.blog
  );

  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    Promise.all([
      getBlogData("blogs"),
      getBlogData("categories"),
      getNewsData(),
    ]).then(() => {
      setTimeout(() => {
        setShowSkeleton(false);
      }, 200);
    });
  }, []);

  const handleCategoryClick = (category: string) => {
    const query = `category=${category}`;
    getBlogData("blogs", query);
  };

  const displayedBlogs = filteredBlogs.length > 0 ? filteredBlogs : pagBlogs;

  if (showSkeleton) {
    return <BlogsSkeleton />;
  }

  return (
    <Grid2
      container
      spacing={{ xs: 4, md: 1 }}
      sx={{
        display: "flex",
        padding: "1rem .3rem",
        maxHeight: { xs: "unset", md: "120vh" }, // Only apply maxHeight from md and above
        overflow: { xs: "unset", md: "hidden" }, // Disable overflow and scrollbar for xs/sm
      }}
    >
      {/* CategoryBubbles for Small Screens (xs and sm) */}
      <Grid2
        size={{ xs: 12 }}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        <CategoryBubbles onCategoryClick={handleCategoryClick} />
      </Grid2>

      <Grid2
        size={{ xs: 12, md: 8 }}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          borderRight: "1px solid #f5f5f5",
          maxHeight: { xs: "unset", md: "calc(100vh - 2rem)" }, // Only apply maxHeight on md and above
          overflowY: { xs: "unset", md: "auto" }, // Enable scroll only on md and above
          position: "relative",
          "&::-webkit-scrollbar": {
            display: "none", // Hide scrollbar for md and above
          },
          msOverflowStyle: "none", // Hide scrollbar for Internet Explorer
          scrollbarWidth: "none", // Hide scrollbar for Firefox
        }}
      >
        {/* Blogs section: Display each blog card */}
        {displayedBlogs.map((item) => (
          <Box display="flex" key={item._id}>
            <BlogCard item={item} />
          </Box>
        ))}

        {/* Pagination for blog list */}
        <Box
          sx={{
            // display: { xs: "flex", sm: "flex" },
            display: loading ? "none" : "flex",
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
          maxHeight: { xs: "unset", md: "calc(100vh - 2rem)" }, // Only apply maxHeight on md and above
          overflowY: { xs: "unset", md: "auto" }, // Enable scroll only on md and above
          "&::-webkit-scrollbar": {
            display: "none", // Hide scrollbar for md and above
          },
          msOverflowStyle: "none", // Hide scrollbar for Internet Explorer
          scrollbarWidth: "none", // Hide scrollbar for Firefox
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
          <CategoryBubbles onCategoryClick={handleCategoryClick} />
        </Box>
      </Grid2>
    </Grid2>
  );
};

export default Blogs;
