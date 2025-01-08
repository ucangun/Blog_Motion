import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

interface MyBlogCardProps {
  blog: BlogPost;
}

const MyBlogCard = ({ blog }: MyBlogCardProps) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 345, cursor: "pointer" }}>
      <CardMedia sx={{ height: 160 }} image={blog.image} title={blog.title} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {blog.title}
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: "text.secondary" }}
          dangerouslySetInnerHTML={{
            __html: blog?.content
              ? blog.content.split(" ").slice(0, 30).join(" ") + "..."
              : "No content available",
          }}
        />
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button> */}
        <Button
          size="small"
          sx={{ ml: "auto" }}
          onClick={() => navigate(`/blog/${blog._id}`)}
        >
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};

export default MyBlogCard;
