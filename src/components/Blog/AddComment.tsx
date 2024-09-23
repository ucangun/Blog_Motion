import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { useState } from "react";
import useBlogCall from "../../hooks/useBlogCall";

const AddComment = () => {
  const { singleBlog } = useSelector((state: RootState) => state.blog);
  const { createComment } = useBlogCall();

  const initialValues: NewCommentType = {
    blogId: singleBlog ? singleBlog._id : "",
    comment: "",
  };

  const [commentData, setCommentData] = useState(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentData({
      ...commentData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createComment(commentData);
    setCommentData(initialValues);
  };

  return (
    <Paper elevation={3} sx={{ mt: 4, p: 2, borderRadius: 2 }}>
      <Typography variant="h6" component="h3" gutterBottom>
        Add a Comment
      </Typography>

      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="comment"
          name="comment"
          fullWidth
          label="Comment"
          variant="outlined"
          margin="normal"
          required
          multiline
          rows={4}
          onChange={handleChange}
          value={commentData.comment}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Post Comment
        </Button>
      </Box>
    </Paper>
  );
};

export default AddComment;
