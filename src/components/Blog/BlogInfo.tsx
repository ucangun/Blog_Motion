import { Box, Typography } from "@mui/material";
import { CiRead } from "react-icons/ci";
import { FaHeart, FaRegComments, FaRegHeart } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import useBlogCall from "../../hooks/useBlogCall";

interface BlogInfoProps {
  id: string;
  likes: string[];
  comments: number;
  visitors: number;
}

const BlogInfo: React.FC<BlogInfoProps> = ({
  id,
  likes,
  comments,
  visitors,
}) => {
  const { currentUser } = useSelector((state: RootState) => state.auth);
  const { addRemoveLike } = useBlogCall();

  const iconStyle = { fontSize: "1.2rem" };
  const userHasLiked = likes.includes(currentUser ? currentUser?._id : "");

  const handleLikeClick = () => {
    addRemoveLike(id);
  };

  const metaData = [
    {
      icon: userHasLiked ? (
        <FaHeart style={iconStyle} color="red" />
      ) : (
        <FaRegHeart style={iconStyle} />
      ),
      value: likes.length,
      onClick: () => handleLikeClick(),
    },
    { icon: <FaRegComments style={iconStyle} />, value: comments },
    { icon: <CiRead style={iconStyle} />, value: visitors },
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
