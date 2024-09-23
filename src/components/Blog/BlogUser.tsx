import { Avatar, Box, Typography } from "@mui/material";
import { formatDateTime } from "../../helpers/format";

interface BlogUserType {
  avatarUrl: string;
  createdAt: string;
}

const BlogUser: React.FC<BlogUserType> = ({ avatarUrl, createdAt }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="body2">
          {formatDateTime(new Date(createdAt), "DD/MM/YYYY HH:mm")}
        </Typography>
      </Box>
      <Avatar
        alt="User Avatar"
        src={avatarUrl || "/static/images/avatar/1.jpg"}
      />
    </Box>
  );
};

export default BlogUser;
