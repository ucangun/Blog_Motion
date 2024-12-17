import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import notFound from "../assets/images/notFound.png";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${notFound})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "60vh",
          borderRadius: "1rem 0 0 1rem",
        }}
      ></Box>
      <Button
        variant="contained"
        onClick={() => navigate("/")}
        sx={{ padding: ".3rem .6rem", fontSize: ".8rem" }}
      >
        Go to Home Page
      </Button>
    </Box>
  );
};

export default NotFoundPage;
