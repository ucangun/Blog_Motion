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

const TopBlogWriter: React.FC = () => {
  const { userBlogs, loading } = useSelector((state: RootState) => state.blog);
  const { getBlogData } = useBlogCall();
  const navigate = useNavigate();

  // Get the best blog after loading
  const bestBlog = userBlogs && userBlogs?.length > 0 ? userBlogs[0] : null;
  const topWriterBlogs =
    userBlogs && userBlogs?.length > 1 ? userBlogs.slice(1, 4) : [];

  useEffect(() => {
    // Fetch data
    getBlogData("blogs", "author=6757ffcfe5ac66a45aadba94");
  }, []);

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
          <Card sx={{ maxWidth: "100%" }}>
            <CardMedia
              component="img"
              image={bestBlog.image}
              sx={{
                height: { sx: "auto", sm: "20.5rem" },
                objectFit: "cover",
              }}
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
                  sx={{
                    background: "#f0f0f0",
                    fontSize: ".8rem",
                    padding: "0.2rem 0.6rem",
                    borderRadius: ".8rem",
                    textTransform: "uppercase",
                  }}
                >
                  {bestBlog.categoryId?.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  10 min read
                </Typography>
              </Box>

              {/* Title */}
              <Typography variant="h6" gutterBottom>
                {bestBlog?.title || "No Title"}
              </Typography>

              {/* Description */}
              <Typography
                variant="body2"
                color="text.secondary"
                dangerouslySetInnerHTML={{
                  __html: bestBlog?.content
                    ? bestBlog?.content.split(" ").slice(0, 25).join(" ") +
                      "..."
                    : "No content available",
                }}
              />

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
                    src={bestBlog?.userId?.image}
                    sx={{ width: 32, height: 32, mr: 1 }}
                  />
                  <Typography variant="body2">
                    {bestBlog?.userId?.username || "Unknown Author"}
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
            category={blog.categoryId?.name}
          />
        ))}
      </Grid2>
    </Grid2>
  );
};

export default TopBlogWriter;
