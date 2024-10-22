import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(0.5),
  textAlign: "center",
  cursor: "pointer",
}));

const heights = [400, 195, 195];

interface HomeMasonryProps {
  firstThreeBlogs: BlogPost[];
}

export default function HomeMasonry({ firstThreeBlogs }: HomeMasonryProps) {
  const navigate = useNavigate();
  return (
    <Box maxWidth="lg" sx={{ width: "auto", minHeight: 393 }}>
      <Masonry columns={2} spacing={1}>
        {firstThreeBlogs.map((blog, index) => (
          <Item
            key={blog._id}
            onClick={() => navigate(`/blog/${blog._id}`)}
            sx={{
              height: heights[index] || 200,
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url(${blog.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Box sx={{ color: "white", padding: 1 }}>{blog.title}</Box>
          </Item>
        ))}
      </Masonry>
    </Box>
  );
}
