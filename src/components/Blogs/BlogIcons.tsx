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

  const iconStyle = {
    fontSize: "1.2rem",
  };

  const boxStyle = {
    display: "flex",
    alignItems: "center",
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: ".3rem",
        px: "1rem",
      }}
    >
      <Box sx={boxStyle}>
        <IconButton onClick={handleLikeClicked}>
          {item.likes.includes(currentUser ? currentUser?._id : "") ? (
            <FaHeart style={iconStyle} color="red" />
          ) : (
            <FaRegHeart style={iconStyle} />
          )}
        </IconButton>
        <Typography variant="body2">{item.countInfo?.likesCount}</Typography>
      </Box>

      <Box sx={boxStyle}>
        <IconButton>
          <FaRegComments style={iconStyle} />
        </IconButton>
        <Typography variant="body2">{item.countInfo?.commentsCount}</Typography>
      </Box>

      <Box sx={boxStyle}>
        <IconButton>
          <CiRead style={iconStyle} />
        </IconButton>
        <Typography variant="body2">{item.countOfVisitors}</Typography>
      </Box>
    </Box>
  );
};

export default BlogIcons;
