import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import authFail from "../../assets/images/fail.png";
import { useEffect } from "react";

function AuthFail() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

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
          backgroundImage: `url(${authFail})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "60vh",
          borderRadius: "1rem 0 0 1rem",
        }}
      ></Box>

      <Typography variant="body1">
        Authentication Failed! Redirecting to Homepage...
      </Typography>
    </Box>
  );
}

export default AuthFail;
