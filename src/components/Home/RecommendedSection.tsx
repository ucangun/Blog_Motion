import { Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const RecomendedSection = () => {
  const navigate = useNavigate();

  return (
    <Box
      maxWidth="lg"
      sx={{ paddingY: 4, backgroundColor: "#F5D1A1", borderRadius: ".3rem" }}
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
        Recommended for You by Category
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          textAlign: "center",
          marginBottom: 4,
          color: "#444",
        }}
      >
        The latest news, tips, and advice to help you run your business with
        ease.
      </Typography>
      {/* <RecommendedCards/> */}
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
