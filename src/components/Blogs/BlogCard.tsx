import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { BlogPost } from "../../features/blogSlice";
import { CiHeart } from "react-icons/ci";
import { CiRead } from "react-icons/ci";
import { FaRegComments } from "react-icons/fa6";
import MyButton from "../Button";
import { formatDateTime } from "../../helpers/format";

interface BlogCardProps {
  item: BlogPost;
}

export default function BlogCard({ item }: BlogCardProps) {
  return (
    <Card
      sx={{
        display: "flex",
        minWidth: "30rem",
        maxWidth: "35rem",
        cursor: "pointer",
      }}
    >
      <CardMedia
        component="img"
        sx={{
          width: 170,
          objectFit: "cover",
          objectPosition: "center",
        }}
        image={item.image}
        alt={item.title}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="body2">
            Category
            {/* should in a category box , communication with backend via id  */}
          </Typography>
          <Typography
            component="div"
            variant="h6"
            sx={{
              display: "inline-block",
              width: "15rem",
            }}
          >
            {item.title}
            {/* should just style control  */}
          </Typography>
          <Typography component="div" variant="body2">
            {formatDateTime(new Date(item.createdAt), "DD/MM/YYYY HH:mm")}
          </Typography>

          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: "text.secondary" }}
          >
            username
            {/* should fake user name or placeholder for self-write backend  */}
          </Typography>
        </CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyConten: "flex-start",
              alignItems: "center",
              gap: "1rem",
              px: "1rem",
            }}
          >
            <IconButton>
              <CiHeart />
            </IconButton>
            <IconButton>
              <FaRegComments />
            </IconButton>
            <IconButton>
              <CiRead />
            </IconButton>
          </Box>
          <MyButton to="/blog" type="secondary">
            Read More &rarr;
          </MyButton>
        </Box>
      </Box>
    </Card>
  );
}
