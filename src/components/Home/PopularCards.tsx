import { Card, Grid2 } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const PopularCards = () => {
  const { blogs } = useSelector((state: RootState) => state.blog);
  const PopularBlogs = blogs.slice(3, 6);

  return (
    <Grid2
      container
      spacing={2}
      justifyItems="center"
      sx={{
        mt: 6,
      }}
    >
      {PopularBlogs.map((blog, index) => (
        <Grid2 key={index} size={{ xs: 12, md: 4 }}>
          <Card
            sx={{
              maxWidth: "auto",
              height: 200,
              color: "primary.text",
              textAlign: "center",
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url(${blog.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
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