import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import authSuccess from "../../assets/images/authSuccess.png";
import { useEffect } from "react";
import { toastSuccess } from "../../helpers/ToastNotify";
import { loginSuccess } from "../../features/authSlice";
import { useDispatch } from "react-redux";

function AuthSuccess() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const getDataFromUrl = async () => {
      const queryParams = new URLSearchParams(location.search);
      const userParam = queryParams.get("user");
      const parsedData = JSON.parse(decodeURIComponent(userParam ?? ""));
      dispatch(loginSuccess(parsedData));

      setTimeout(() => {
        toastSuccess(parsedData.message);
        navigate("/");
      }, 3000);
    };
    getDataFromUrl();
  }, []);

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
          backgroundImage: `url(${authSuccess})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "60vh",
          borderRadius: "1rem 0 0 1rem",
        }}
      ></Box>

      <Typography variant="body1">Redirecting...</Typography>
    </Box>
  );
}

export default AuthSuccess;
