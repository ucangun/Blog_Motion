import React, { useEffect } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import useBlogCall from "../../../hooks/useBlogCall";
import { RootState } from "../../../app/store";
import { useSelector } from "react-redux";

const LatestBlogCard: React.FC = () => {
  const { getBlogByUserId, getBlogData } = useBlogCall();
  const { userBlogs, categories } = useSelector(
    (state: RootState) => state.blog
  );
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch blog and category data
    getBlogByUserId("671a412a6dd99d224acddb58");
    getBlogData("categories");
  }, []);

  const getCategoryName = (categoryId: string) => {
    const category = categories?.find((cat) => cat._id === categoryId);
    return category ? category.name : "Unknown Category";
  };

  return (
    <Box>
      {/* Latest Blogs Title */}
      <Typography
        variant="h5"
        sx={{
          marginBottom: 2,
          fontWeight: "bold",
          textAlign: "center",
          color: "primary.main",
        }}
      >
        Latest Blogs
      </Typography>

      {userBlogs.map((blog, index) => (
        <Card
          key={index}
          sx={{ display: "flex", marginBottom: 2, cursor: "pointer" }}
        >
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={blog.image}
            alt="Blog image"
          />
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  background: "#f0f0f0",
                  fontSize: ".7rem",
                  padding: "0.2rem 0.4rem",
                  borderRadius: ".8rem",
                  textTransform: "uppercase",
                }}
              >
                {getCategoryName(blog.categoryId)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                10 min read
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: "1rem",
              }}
            >
              {blog.title}
            </Typography>
            <Button
              size="small"
              sx={{ alignSelf: "flex-start" }}
              onClick={() => navigate(`/blog/${blog._id}`)}
            >
              Read More
            </Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default LatestBlogCard;
