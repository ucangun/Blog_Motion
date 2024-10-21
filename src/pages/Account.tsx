"use client";

import { Box, Divider } from "@mui/material";
import AccountHeader from "../components/Account/AccountHeader";
import ProfileSettings from "../components/Account/ProfileSettings";
import DangerZone from "../components/Account/DangerZone";

function Account() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ py: 6, px: 3 }}
    >
      <Box
        maxWidth="576px"
        width="100%"
        display="flex"
        flexDirection="column"
        gap={3}
      >
        <AccountHeader />

        <ProfileSettings />

        {/* Password Section */}

        {/* <Box>
          <Typography variant="h5">Password</Typography>
          <TextField
            fullWidth
            label="New password"
            variant="outlined"
            type="password"
            placeholder="Enter new password"
            helperText="Your password must have at least 8 characters, include one uppercase letter, one number, and one special character."
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
            sx={{ mt: 2 }}
          />

          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Change password
          </Button>
        </Box> */}

        <Divider />

        <DangerZone />
      </Box>
    </Box>
  );
}

export default Account;
