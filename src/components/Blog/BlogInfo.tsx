import { Box, Typography, Avatar } from "@mui/material";
import { CiRead } from "react-icons/ci";
import { FaHeart, FaRegComments, FaRegHeart } from "react-icons/fa6";
import { formatDateTime } from "../../helpers/format";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

interface BlogInfoProps {
  createdAt: string;
  likes: string[];
  comments: number;
  visitors: number;
  avatarUrl?: string;
}

const BlogInfo: React.FC<BlogInfoProps> = ({
  createdAt,
  likes,
  comments,
  visitors,
  avatarUrl,
}) => {
  const { currentUser } = useSelector((state: RootState) => state.auth);

  const iconStyle = { fontSize: "1.2rem" };

  const userHasLiked = likes.includes(currentUser ? currentUser?._id : "");

  const metaData = [
    {
      icon: userHasLiked ? (
        <FaHeart style={iconStyle} color="red" />
      ) : (
        <FaRegHeart style={iconStyle} />
      ),
      value: likes.length,
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
        <Typography variant="body2">
          {formatDateTime(new Date(createdAt), "DD/MM/YYYY HH:mm")}
        </Typography>
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
      <Avatar
        alt="User Avatar"
        src={avatarUrl || "/static/images/avatar/1.jpg"}
      />
    </Box>
  );
};

export default BlogInfo;
