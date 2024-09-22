import { Box, IconButton, Typography } from "@mui/material";
import { CiRead } from "react-icons/ci";
import { FaHeart, FaRegComments, FaRegHeart } from "react-icons/fa6";
import useBlogCall from "../../hooks/useBlogCall";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { BlogCardProps } from "./BlogCard";

const BlogIcons = ({ item }: BlogCardProps) => {
  const { addRemoveLike } = useBlogCall();
  const { currentUser } = useSelector((state: RootState) => state.auth);

  const handleLikeClicked = () => {
    addRemoveLike(item._id);
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyConten: "flex-start",
        alignItems: "center",
        gap: "1rem",
        px: "1rem",
      }}
    >
      <IconButton onClick={handleLikeClicked}>
        {item.likes.includes(currentUser ? currentUser?._id : "") ? (
          <FaHeart color="red" />
        ) : (
          <FaRegHeart />
        )}
      </IconButton>

      <IconButton>
        <FaRegComments />
      </IconButton>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "0.3rem",
        }}
      >
        <CiRead style={{ fontSize: "1.2rem" }} />
        <Typography variant="body2">{item.countOfVisitors}</Typography>
      </Box>
    </Box>
  );
};

export default BlogIcons;
