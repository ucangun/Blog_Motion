import { useEffect } from "react";
import useBlogCall from "../hooks/useBlogCall";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { Container, Grid2 } from "@mui/material";
import MyBlogCard from "../components/MyBlogs/MyBlogCard";

const MyBlog = () => {
  const { getBlogData } = useBlogCall();
  const { currentUser } = useSelector((state: RootState) => state.auth);
  const { userBlogs } = useSelector((state: RootState) => state.blog);

  // useEffect hook'unda currentUser değişkenini bağımlılıklar arasına ekledik
  useEffect(() => {
    if (currentUser && currentUser._id) {
      getBlogData("blogs", `author=${currentUser._id}`);
    }
  }, [currentUser]);

  // console.log(userBlogs);

  return (
    <Container
      sx={{
        padding: "2rem 1rem",
      }}
    >
      <Grid2 container spacing={3} justifyContent="center">
        {userBlogs?.length > 0 ? (
          userBlogs.map((blog: BlogPost) => (
            <Grid2
              display="flex"
              justifyContent="center"
              key={blog._id}
              size={{ xs: 12, md: 4, lg: 3 }}
            >
              <MyBlogCard blog={blog} />
            </Grid2>
          ))
        ) : (
          <p>No blogs found</p>
        )}
      </Grid2>
    </Container>
  );
};

export default MyBlog;
