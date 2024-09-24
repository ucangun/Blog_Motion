"use client";

import { Box, Button, Typography, Divider, Alert } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import AccountHeader from "../components/Account/AccountHeader";
import ProfileSettings from "../components/Account/ProfileSettings";

function Account() {
  const { currentUser } = useSelector((state: RootState) => state.auth);
  console.log(currentUser);
  return (
    <Box
      flexGrow={1}
      display="flex"
      flexDirection="column"
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

        {/* Danger Zone */}
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
      </Box>
    </Box>
  );
}

export default Account;
