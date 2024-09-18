import { Box, Typography } from "@mui/material";
import MyButton from "../Button";

const PopularSection = () => {
  return (
    <Box
      maxWidth="xl"
      sx={{
        backgroundColor: "primary.main",
        borderRadius: ".3rem",
        width: "auto",
        cursor: "pointer",
        padding: {
          xs: ".4rem .6rem",
          md: ".6rem 1.2rem",
        },
      }}
    >
      <Typography
        sx={{
          fontSize: {
            xs: "1.6rem",
            sm: "2.2rem",
            md: "2.8rem",
          },

          maxWidth: "22rem",
          padding: ".5rem 0",
          lineHeight: 1.1,
        }}
      >
        Our most popular articles
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: 2,
          flexWrap: "wrap",
          alignItems: "center",
          marginTop: ".5rem",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            maxWidth: "20rem",
            lineHeight: 1.5,
          }}
        >
          Our most popular articles, packed with insights and tips, are reader
          favorites!
        </Typography>
        <MyButton to="/" type="tertiary">
          Read All Blog
        </MyButton>
      </Box>
    </Box>
  );
};

export default PopularSection;
