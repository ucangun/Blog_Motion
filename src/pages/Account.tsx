"use client";

import { Container, Grid2 } from "@mui/material";
import ProfileCard from "../components/Account/ProfileCard";
// import SettingsContainer from "../components/Account/SettingsContainer";

function Account() {
  return (
    <Container
      sx={{
        py: 6,
        px: 1,
      }}
    >
      <Grid2 container spacing={{ xs: 8, md: 2 }}>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <ProfileCard />
        </Grid2>
        {/* <Grid2
          size={{ xs: 12, md: 8 }}
          maxWidth="576px"
          width="100%"
          display="flex"
          flexDirection="column"
          gap={3}
        >
          <SettingsContainer />
        </Grid2> */}
      </Grid2>
    </Container>
  );
}

export default Account;

{
  /* Password Section */
}

{
  /* <Box>
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
        </Box> */
}
