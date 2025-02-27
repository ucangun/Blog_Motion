import {
  Container,
  Box,
  Typography,
  Avatar,
  // Button,
  Paper,
} from "@mui/material";
// import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import AddComment from "./AddComment";

const BlogComments = () => {
  const { singleBlog } = useSelector((state: RootState) => state.blog);

  return (
    <Box
      sx={{
        py: 8,
      }}
    >
      <Container>
        <Typography variant="h6" component="h2" gutterBottom fontWeight="bold">
          Comments
        </Typography>
        {singleBlog && singleBlog?.comments?.length > 0 ? (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {singleBlog?.comments.map((comment) => (
              <Paper
                key={comment._id}
                elevation={3}
                sx={{ p: 2, borderRadius: 2 }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Avatar
                    src={comment.userId?.image}
                    alt="User Avatar"
                    sx={{ width: 40, height: 40, mr: 2 }}
                  />
                  <Box>
                    <Typography fontWeight="bold">
                      {comment.userId?.firstName} {comment.userId?.lastName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {`Posted on ${new Date(
                        comment.createdAt || ""
                      ).toLocaleDateString("de-DE", {
                        day: "numeric",
                        month: "long",
                      })}`}
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body1" color="textPrimary">
                  {comment.comment}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                  {/* <Button
                    startIcon={<ThumbUpAltIcon />}
                    sx={{ color: "primary.main", mr: 2 }}
                  >
                    Like
                  </Button>
                  <Button sx={{ color: "grey.500" }}>Reply</Button> */}
                </Box>
              </Paper>
            ))}
          </Box>
        ) : (
          <Typography>No comments yet...</Typography>
        )}

        <AddComment />
      </Container>
    </Box>
  );
};
export default BlogComments;
