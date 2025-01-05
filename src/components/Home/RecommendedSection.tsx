import { Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import RecommendedCards from "./RecommmendedCards";

const RecomendedSection = () => {
  const navigate = useNavigate();

  return (
    <Box
      maxWidth="lg"
      sx={{
        paddingY: 4,
        backgroundColor: "#F5D1A1",
        borderRadius: ".3rem",
        padding: {
          xs: "1rem .9rem",
          md: "1.8rem 1.2rem",
        },
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        sx={{
          textAlign: "center",
          marginBottom: 3,
          fontWeight: "bold",
        }}
      >
        Explore What's Trending
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          textAlign: "center",
          marginBottom: 4,
          color: "#444",
        }}
      >
        Discover top blogs to inspire, inform, and entertain.
      </Typography>
      <RecommendedCards />
      <Box textAlign="center" sx={{ marginTop: 4 }}>
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#1A1A1A",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/blogs")}
        >
          View All Blogs
        </button>
      </Box>
    </Box>
  );
};

export default RecomendedSection;
