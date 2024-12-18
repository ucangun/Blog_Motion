import { useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import verifyEmail from "../assets/images/verifyEmail.png";

const VerifyEmail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // URL'den token'ı alıyoruz
  const token = new URLSearchParams(location.search).get("token");

  useEffect(() => {
    const verifyEmailToken = async () => {
      if (!token) {
        return;
      }

      const response = await axios.get(
        `http://127.0.0.1:8000/auth/verify-email`,
        {
          params: { token },
        }
      );

      if (response.status === 200) {
        navigate("/login");
      } else {
        navigate("/error");
      }
    };

    verifyEmailToken();
  }, [token, navigate]);

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
        Email Verification 🧐
      </Typography>

      <Typography variant="body1" sx={{ textAlign: "center" }}>
        Thank you for signing up! To complete your registration, please verify
        your email address by clicking the button below in the email we sent
        you.
      </Typography>

      <Typography
        variant="body2"
        sx={{ textAlign: "center", marginTop: "1rem" }}
      >
        If you didn't sign up for this account, please ignore this email.
      </Typography>
      <Button
        variant="contained"
        onClick={() => navigate("/login")}
        sx={{ padding: ".3rem .6rem", fontSize: ".8rem" }}
      >
        Go to Login Page
      </Button>
    </Box>
  );
};

export default VerifyEmail;
