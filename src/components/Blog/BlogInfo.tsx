import { Box, Typography, Avatar } from "@mui/material";
import { CiHeart, CiRead } from "react-icons/ci";
import { FaRegComments } from "react-icons/fa6";
import { formatDateTime } from "../../helpers/format";

interface BlogInfoProps {
  createdAt: string;
  likes: number;
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
  const metaData = [
    { icon: <CiHeart />, value: likes },
    { icon: <FaRegComments />, value: comments },
    { icon: <CiRead />, value: visitors },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        gap: "1rem",
        paddingRight: "1rem",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.3rem",
        }}
      >
        <Typography variant="body1">
          {formatDateTime(new Date(createdAt), "DD/MM/YYYY HH:mm")}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: ".5rem",
          }}
        >
          {metaData.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: ".3rem",
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
