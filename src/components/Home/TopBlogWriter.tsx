import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid2,
  Box,
  Avatar,
  Button,
  CircularProgress,
} from "@mui/material";
import { useEffect } from "react";
import useBlogCall from "../../hooks/useBlogCall";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import TopBlogWriterCard from "./TopBlogWriterCard";
import { useNavigate } from "react-router-dom";
import useAuthCall from "../../hooks/useAuthCall";

const TopBlogWriter: React.FC = () => {
  const { userBlogs, loading, categories } = useSelector(
    (state: RootState) => state.blog
  );
  const { singleUser } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
  const { getSingleUser } = useAuthCall();
  const { getBlogByUserId, getBlogData } = useBlogCall();

  // Get the best blog after loading
  const bestBlog = userBlogs.length > 0 ? userBlogs[0] : null;
  const topWriterBlogs = userBlogs.slice(1, 5);

  useEffect(() => {
    // Fetch data
    getBlogByUserId("671a412a6dd99d224acddb58");
    getSingleUser("671a412a6dd99d224acddb58");
    getBlogData("categories");
  }, []);

  const getCategoryName = (categoryId: string) => {
    const category = categories?.find((cat) => cat._id === categoryId);
    return category ? category.name : "Unknown Category";
  };

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Grid2 container spacing={2}>
      {/* Main article on left */}
      <Grid2 size={{ xs: 12, md: 6 }}>
        {bestBlog && (
          <Card sx={{ maxWidth: "100%", cursor: "pointer" }}>
            <CardMedia
              component="img"
              height="400"
              image={bestBlog.image}
              alt="Main article image"
            />

            {/* Content */}
            <CardContent sx={{ padding: 3 }}>
              {/* Category and time */}
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={2}
              >
                <Typography
                  variant="button"
                  sx={{
                    background: "#f0f0f0",
                    padding: "0.2rem 0.6rem",
                    borderRadius: "12px",
                  }}
                >
                  {getCategoryName(bestBlog.categoryId)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  10 min read
                </Typography>
              </Box>

              {/* Title */}
              <Typography variant="h4" gutterBottom>
                {bestBlog?.title || "No Title"}
              </Typography>

              {/* Description */}
              <Typography variant="body2" color="text.secondary" paragraph>
                {bestBlog?.content
                  ? bestBlog.content.split(" ").slice(0, 15).join(" ") + "..."
                  : "No content available"}
              </Typography>

              {/* Author and Button */}
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                mt={3}
              >
                <Button
                  variant="outlined"
                  sx={{ textTransform: "none" }}
                  onClick={() => navigate(`/blog/${bestBlog._id}`)}
                >
                  Read Article
                </Button>

                {/* Author */}
                <Box display="flex" alignItems="center">
                  <Avatar
                    alt="Author's Avatar"
                    src={singleUser?.image}
                    sx={{ width: 32, height: 32, mr: 1 }}
                  />
                  <Typography variant="body2">
                    {singleUser?.username || "Unknown Author"}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        )}
      </Grid2>

      {/* Article cards on right side */}
      <Grid2 size={{ xs: 12, md: 6 }}>
        {topWriterBlogs.map((blog, index) => (
          <TopBlogWriterCard
            key={index}
            blog={blog}
            category={getCategoryName(blog.categoryId)} // category is passed here
          />
        ))}
      </Grid2>
    </Grid2>
  );
};

export default TopBlogWriter;
