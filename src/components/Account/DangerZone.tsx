import { Alert, Box, Button, Typography } from "@mui/material";

const DangerZone = () => {
  return (
    <Box sx={{ cursor: "pointer" }}>
      <Typography variant="h5" color="error">
        Danger zone
      </Typography>
      <Alert
        severity="error"
        action={
          <Button color="inherit" size="small" variant="outlined">
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
