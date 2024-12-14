import { Card, Grid2 } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useBlogCall from "../../hooks/useBlogCall";

const PopularCards = () => {
  const { getBlogData } = useBlogCall();
  const { popularBlogs } = useSelector((state: RootState) => state.blog);
  const navigate = useNavigate();

  useEffect(() => {
    const query = "sort[countOfVisitors]=desc&limit=3";
    getBlogData("blogs", query);
  }, []);

  return (
    <Grid2
      container
      spacing={2}
      justifyItems="center"
      sx={{
        mt: 6,
      }}
    >
      {popularBlogs.map((blog, index) => (
        <Grid2 key={index} size={{ xs: 12, md: 4 }}>
          <Card
            onClick={() => navigate(`/blog/${blog._id}`)}
            sx={{
              maxWidth: "auto",
              height: 200,
              color: "primary.text",
              textAlign: "center",
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)), url(${blog.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              padding: "1rem",
            }}
          >
            {blog.title}
          </Card>
        </Grid2>
      ))}
    </Grid2>
  );
};

export default PopularCards;
