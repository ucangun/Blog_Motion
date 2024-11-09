"use client";

import { Container, Grid2 } from "@mui/material";
import ProfileCard from "../components/Account/ProfileCard";
import LatestBlogCard from "../components/Account/UserLatestBlogs/LatestBlogCard";
import ReminderCard from "../components/Account/BlogReminder/ReminderCard";

function Account() {
  return (
    <Container
      sx={{
        py: 5,
        px: 1,
      }}
    >
      <Grid2 container spacing={{ xs: 6, md: 4 }}>
        <Grid2
          size={{ xs: 12, md: 4 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <ProfileCard />
          <ReminderCard />
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
