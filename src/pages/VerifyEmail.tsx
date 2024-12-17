import { useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
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
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${verifyEmail})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "80%",
          height: "50rem",
          borderRadius: "1rem 0 0 1rem",
        }}
      ></Box>
      <Typography variant="body1">
        Please check your email to verify your account.
      </Typography>
    </Box>
  );
};

export default VerifyEmail;
