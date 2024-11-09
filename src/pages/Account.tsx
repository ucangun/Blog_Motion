"use client";

import { Container, Grid2 } from "@mui/material";
import ProfileCard from "../components/Account/ProfileCard";
import LatestBlogCard from "../components/Account/UserLatestBlogs/LatestBlogCard";

function Account() {
  return (
    <Container
      sx={{
        py: 5,
        px: 1,
      }}
    >
      <Grid2 container spacing={{ xs: 6, md: 4 }}>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <ProfileCard />
        </Grid2>
        <Grid2
          size={{ xs: 12, md: 8 }}
          maxWidth="676px"
          width="100%"
          display="flex"
          flexDirection="column"
          gap={1}
        >
          <LatestBlogCard />
        </Grid2>
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
