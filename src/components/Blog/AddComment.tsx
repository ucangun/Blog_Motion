import { Box, Button, Paper, TextField, Typography } from "@mui/material";

const AddComment = () => {
  return (
    <Paper elevation={3} sx={{ mt: 4, p: 2, borderRadius: 2 }}>
      <Typography variant="h6" component="h3" gutterBottom>
        Add a Comment
      </Typography>
      <Box component="form" noValidate autoComplete="off">
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Comment"
          variant="outlined"
          margin="normal"
          required
          multiline
          rows={4}
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
