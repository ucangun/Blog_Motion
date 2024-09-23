import { Avatar, Box, Typography } from "@mui/material";
import { formatDateTime } from "../../helpers/format";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const BlogUser: React.FC = () => {
  const { singleBlog } = useSelector((state: RootState) => state.blog);
  const { currentUser } = useSelector((state: RootState) => state.auth);
  console.log(singleBlog);

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
          alignItems: "flex-end",
          flexDirection: "column",
        }}
      >
        <Typography variant="body2">
          {formatDateTime(new Date(singleBlog?.createdAt || ""), "DD/MM/YYYY ")}
        </Typography>
        <Typography variant="body2">{`${singleBlog?.userId.firstName} ${singleBlog?.userId.lastName} `}</Typography>
      </Box>
      <Avatar
        alt="User Avatar"
        src={currentUser?.image || "/static/images/avatar/1.jpg"}
      />
    </Box>
  );
};

export default BlogUser;
