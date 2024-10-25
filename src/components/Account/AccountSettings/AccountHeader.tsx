import { Box, Typography } from "@mui/material";

const AccountHeader = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 1 }}>
        Account Settings
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Update your profile and personal details here
      </Typography>
    </Box>
  );
};

export default AccountHeader;
