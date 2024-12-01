import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import MyButton from "../Button";

interface TopBlogCardType {
  blog: BlogPost;
  category: string;
}

const TopBlogWriterCard = ({ blog, category }: TopBlogCardType) => {
  return (
    <Card sx={{ display: "flex", marginBottom: 2, cursor: "pointer" }}>
      <CardMedia
        component="img"
        sx={{
          width: 150,
          height: { xs: "auto", md: "11.5rem" },
          objectFit: "cover",
        }}
        image={blog.image}
        alt="image"
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
          }}
        >
          <Typography
            sx={{
              background: "#f0f0f0",
              fontSize: ".6rem",
              padding: "0.2rem 0.4rem",
              borderRadius: ".8rem",
              textTransform: "uppercase",
            }}
          >
            {category}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            10 min read
          </Typography>
        </Box>
        <Typography
          sx={{
            fontSize: { xs: ".9rem", lg: "1rem" },
          }}
        >
          {blog.title}
        </Typography>
        <MyButton to={`/blog/${blog._id}`} type="secondary">
          Read More &rarr;
        </MyButton>
      </CardContent>
    </Card>
  );
};

export default TopBlogWriterCard;
