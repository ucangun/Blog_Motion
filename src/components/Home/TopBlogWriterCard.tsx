import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface TopBlogCardType {
  blog: BlogPost;
  category: string;
}

const TopBlogWriterCard = ({ blog, category }: TopBlogCardType) => {
  const navigate = useNavigate(); // Hook doğru yerde tanımlandı

  return (
    <Card
      sx={{ display: "flex", marginBottom: 2, cursor: "pointer" }}
      onClick={() => {
        navigate(`/blog/${blog._id}`);
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={blog.image}
        alt="image"
      />
      <CardContent>
        <Typography variant="button">{category}</Typography>
        <Typography variant="body2" color="text.secondary">
          10 min read
        </Typography>
        <Typography variant="h6">{blog.title}</Typography>
      </CardContent>
    </Card>
  );
};

export default TopBlogWriterCard;
