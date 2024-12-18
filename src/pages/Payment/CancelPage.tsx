import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import paymentFail from "../../assets/images/paymentFail.png";

function CancelPage() {
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
          backgroundImage: `url(${paymentFail})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "60vh",
          borderRadius: "1rem 0 0 1rem",
        }}
      ></Box>
      <Typography variant="h4">⚠️ Payment Cancelled</Typography>
      <Typography variant="body1">
        It seems you cancelled the payment process.
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

export default CancelPage;
