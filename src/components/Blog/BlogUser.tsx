import { Avatar, Box, Typography } from "@mui/material";
import { formatDateTime } from "../../helpers/format";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const BlogUser: React.FC = () => {
  const { singleBlog } = useSelector((state: RootState) => state.blog);

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
        <Typography
          variant="body2"
          sx={{ fontSize: { xs: ".8rem", md: ".9rem" } }}
        >
          {formatDateTime(new Date(singleBlog?.createdAt || ""), "DD/MM/YYYY ")}
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontSize: { xs: ".8rem", md: ".9rem" } }}
        >
          {singleBlog?.userId.username}
        </Typography>
      </Box>
      <Avatar
        alt="User Avatar"
        src={
          singleBlog?.userId?.image
            ? singleBlog?.userId?.image
            : "/static/images/avatar/1.jpg"
        }
      />
    </Box>
  );
};

export default BlogUser;
