import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import paymentSuccess from "../../assets/images/paymentSuccess.png";

function SuccessPage() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${paymentSuccess})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "60vh",
          borderRadius: "1rem 0 0 1rem",
        }}
      ></Box>
      <Typography variant="h4">🎉 Payment Successful!</Typography>
      <Typography variant="body1">
        Thank you for subscribing to our newsletter.
      </Typography>
      <Button
        variant="contained"
        onClick={() => navigate("/")}
        sx={{ padding: ".3rem .6rem", fontSize: ".8rem" }}
      >
        Go to Home Page
      </Button>
    </Box>
  );
}

export default SuccessPage;
