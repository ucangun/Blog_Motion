import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useBlogCall from "../hooks/useBlogCall";
import { Box, Container, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import MyButton from "../components/Button";
import BlogInfo from "../components/Blog/BlogInfo";
import BlogSkeleton from "../components/BlogSkeleton";

const Blog = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getSingleBlog } = useBlogCall();
  const { singleBlog, loading } = useSelector((state: RootState) => state.blog);

  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    if (id) {
      getSingleBlog(id);
    }

    const minimumSkeletonTime = 200;
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, minimumSkeletonTime);

    return () => clearTimeout(timer);
  }, [id]);

  if (loading || showSkeleton) return <BlogSkeleton />;

  return (
    <Container
      sx={{
        padding: ".4rem 0.1rem",
      }}
    >
      {/* image box */}
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

      {/* back button  */}
      <Box
        sx={{
          padding: "1rem 3rem",
        }}
      >
        <MyButton type="secondary" onClick={() => navigate(-1)}>
          &larr; Back all Blogs
        </MyButton>
      </Box>

      {/* blog post  first Box: general page settings,  second Box: title and BlogInfo(another component) Box  */}
      <Box
        sx={{
          padding: "2rem 3rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "2rem",
            flexWrap: "wrap",
            paddingRight: "1rem",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
            }}
          >
            {singleBlog?.title}
          </Typography>

          <BlogInfo
            createdAt={singleBlog?.createdAt || ""}
            likes={singleBlog?.likes.length || 0}
            comments={singleBlog?.comments.length || 0}
            visitors={singleBlog?.countOfVisitors || 0}
            avatarUrl="/static/images/avatar/1.jpg"
          />
        </Box>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: ".9rem", sm: "1rem", md: "1.1rem" },
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
