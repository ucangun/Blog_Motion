import React from "react";
import { Box, Typography } from "@mui/material";
import DecorativeGrid from "../components/About/DecorativeGrid";

const About: React.FC = () => {
  return (
    <Box
      sx={{
        padding: { xs: "2rem 1rem", sm: "4rem", md: "4rem 6rem" },
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={3}
          sx={{ textAlign: "center" }}
        >
          BlogMotion: Where Stories Find Motion
        </Typography>
        <Typography color="text.secondary">
          "At BlogMotion, we believe in the transformative power of stories. Our
          platform is designed to be a vibrant space where ideas flow freely,
          creativity knows no bounds, and connections are forged through the
          written word. Whether you’re here to share your thoughts, seek
          inspiration, or learn from others, BlogMotion is where your voice
          finds its audience and your story finds its motion."
        </Typography>

        <Typography color="text.secondary" mt={2}>
          "Dive into a world of diverse perspectives, thought-provoking blogs,
          and meaningful interactions. Join a community of storytellers,
          learners, and dreamers who are shaping the future one post at a time.
          BlogMotion isn’t just a blogging platform—it’s a movement that bridges
          gaps, fuels passions, and celebrates the art of storytelling. Let’s
          move forward together, one story at a time."
        </Typography>
      </Box>

      <DecorativeGrid />
    </Box>
  );
};

export default About;
