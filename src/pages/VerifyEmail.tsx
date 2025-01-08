import { useState, useEffect } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { Box, Button, Typography, CircularProgress } from "@mui/material";
import verifyEmail from "../assets/images/verifyEmail.png";

const VerifyEmail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const queryParams = new URLSearchParams(location.search);
  const statusParam = queryParams.get("status");

  useEffect(() => {
    const handleStatus = () => {
      setLoading(true);

      switch (statusParam) {
        case "missing-token":
          setStatusMessage("Token is missing! Please check the link.");
          break;
        case "invalid-token":
          setStatusMessage("Invalid token! Please check the link.");
          break;
        case "user-not-found":
          setStatusMessage("User not found! Please check the link.");
          break;
        case "already-verified":
          setStatusMessage("Your email is already verified.");
          break;
        case "success":
          setStatusMessage("Email successfully verified! Redirecting...");
          setTimeout(() => {
            navigate("/login");
          }, 2000);
          break;
        default:
          setStatusMessage("Verifying your email... Please wait.");
          break;
      }

      setLoading(false);
    };

    handleStatus();
  }, [statusParam, navigate]);

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
          backgroundImage: `url(${verifyEmail})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "60vh",
          borderRadius: "1rem 0 0 1rem",
        }}
      ></Box>

      <Typography variant="h4" sx={{ textAlign: "center" }}>
        Email Verification
      </Typography>

      {/* Durum mesajı */}
      <Typography variant="body1" sx={{ textAlign: "center" }}>
        {statusMessage || "Verifying your email... Please wait."}
      </Typography>

      <Typography
        variant="body2"
        sx={{ textAlign: "center", marginTop: "1rem" }}
      >
        If you didn't sign up for this account, please ignore this email.
      </Typography>

      {loading ? (
        <CircularProgress />
      ) : (
        <Button
          variant="contained"
          onClick={() => navigate("/login")}
          sx={{ padding: ".3rem .6rem", fontSize: ".8rem" }}
        >
          Go to Login Page
        </Button>
      )}
    </Box>
  );
};

export default VerifyEmail;
