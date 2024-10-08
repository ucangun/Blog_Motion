import { Card, CardContent, CardMedia, Typography } from "@mui/material";

interface TopBlogCardType {
  blog: BlogPost;
  category: string;
}

const TopBlogWriterCard = ({ blog, category }: TopBlogCardType) => (
  <Card sx={{ display: "flex", marginBottom: 2 }}>
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

export default TopBlogWriterCard;
