import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useBlogCall from "../hooks/useBlogCall";
import { Box, Container, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import MyButton from "../components/Button";
import BlogInfo from "../components/Blog/BlogInfo";
import BlogSkeleton from "../components/Blog/BlogSkeleton";
import OpenIconSpeedDial from "../components/Blog/OpenIconSpeedDial";
import BlogUser from "../components/Blog/BlogUser";

const Blog: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getSingleBlog } = useBlogCall();
  const { singleBlog, loading } = useSelector((state: RootState) => state.blog);
  const { currentUser } = useSelector((state: RootState) => state.auth);

  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    if (id) {
      getSingleBlog(id);
    }

    const minimumSkeletonTime = 300;
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, minimumSkeletonTime);

    return () => clearTimeout(timer);
  }, [id]);

  if (loading || showSkeleton) return <BlogSkeleton />;

  return (
    <Container>
      {/* image box */}
      <Box
        sx={{
          padding: "1rem .3rem ",
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
          padding: "1.2rem ",
        }}
      >
        <MyButton type="secondary" onClick={() => navigate(-1)}>
          &larr; Back all Blogs
        </MyButton>
      </Box>

      {/* blog post  first Box: general page settings,  second Box: title and BlogInfo(another component) Box  */}
      <Box
        sx={{
          padding: "1.6rem 1.2rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "2rem",
            flexWrap: "wrap",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "1.4rem", sm: "1.8rem", md: "2rem" },
            }}
          >
            {singleBlog?.title}
          </Typography>
          <BlogUser
            avatarUrl="/static/images/avatar/1.jpg"
            createdAt={singleBlog?.createdAt || ""}
          />
        </Box>

        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "1rem", sm: "1.1rem" },
            padding: "3rem 0",
          }}
        >
          {singleBlog?.content}
        </Typography>
      </Box>
      {singleBlog?.userId?._id === currentUser?._id && (
        <OpenIconSpeedDial blogId={singleBlog?._id} />
      )}
      <BlogInfo
        likes={singleBlog?.likes || []}
        comments={singleBlog?.comments.length || 0}
        visitors={singleBlog?.countOfVisitors || 0}
        id={singleBlog ? singleBlog._id : ""}
      />
    </Container>
  );
};

export default Blog;
