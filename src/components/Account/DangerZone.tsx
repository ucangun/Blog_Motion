import { Alert, Box, Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import useAuthCall from "../../hooks/useAuthCall";

const DangerZone = () => {
  const { currentUser } = useSelector((state: RootState) => state.auth);
  const { deleteUser } = useAuthCall();

  const handleDelete = () => {
    deleteUser(currentUser?._id || "");
  };

  return (
    <Box sx={{ cursor: "pointer" }}>
      <Typography variant="h5" color="error">
        Danger zone
      </Typography>
      <Alert
        severity="error"
        action={
          <Button
            color="inherit"
            size="small"
            variant="outlined"
            onClick={handleDelete}
          >
            Delete account
          </Button>
        }
        sx={{ mt: 2 }}
      >
        Permanently remove your account. This action is not reversible.
      </Alert>
    </Box>
  );
};

export default DangerZone;
