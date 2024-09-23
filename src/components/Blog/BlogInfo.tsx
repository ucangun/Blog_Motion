import { Box, Typography } from "@mui/material";
import { CiRead } from "react-icons/ci";
import { FaHeart, FaRegComments, FaRegHeart } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import useBlogCall from "../../hooks/useBlogCall";

const BlogInfo: React.FC = () => {
  const { singleBlog } = useSelector((state: RootState) => state.blog);
  const { currentUser } = useSelector((state: RootState) => state.auth);
  const { addRemoveLike } = useBlogCall();

  const iconStyle = { fontSize: "1.2rem" };
  const userHasLiked = singleBlog?.likes.includes(
    currentUser ? currentUser?._id : ""
  );

  const handleLikeClick = () => {
    addRemoveLike(singleBlog ? singleBlog._id : "");
  };

  const metaData = [
    {
      icon: userHasLiked ? (
        <FaHeart style={iconStyle} color="red" />
      ) : (
        <FaRegHeart style={iconStyle} />
      ),
      value: singleBlog?.likes.length,
      onClick: () => handleLikeClick(),
    },
    {
      icon: <FaRegComments style={iconStyle} />,
      value: singleBlog?.comments.length,
    },
    { icon: <CiRead style={iconStyle} />, value: singleBlog?.countOfVisitors },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1.2rem",
        paddingRight: "1rem",
        cursor: "pointer",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: "0.3rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: ".6rem",
          }}
        >
          {metaData.map((item, index) => (
            <Box
              key={index}
              onClick={item.onClick}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: ".2rem",
              }}
            >
              {item.icon}
              <Typography variant="body2">{item.value}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default BlogInfo;
