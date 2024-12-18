import axios from "axios";
import { Box, Typography, TextField, Button } from "@mui/material";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");

  const makePayment = async () => {
    if (!email) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLISH_KEY);

      // API çağrısı
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}api/payment/create-checkout-session`,
        { email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Yanıtın işlenmesi
      const { sessionId } = response.data;

      if (sessionId) {
        await stripe?.redirectToCheckout({ sessionId });
      } else {
        alert("Failed to initiate payment.");
      }
    } catch (error) {
      console.error("Error in payment:", error);
      alert("An error occurred while processing payment.");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        backgroundColor: "#111",
        color: "#fff",
        textAlign: "center",
        padding: "4rem",
        borderRadius: ".5rem",
        cursor: "pointer",
      }}
    >
      <Typography variant="h4">
        Subscribe for <span style={{ color: "#17fc17" }}>updates</span> via
        newsletter
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#333",
          outline: "1px solid #fff",
          outlineOffset: ".5rem",
          borderRadius: ".3rem",
          overflow: "hidden",
        }}
      >
        <TextField
          placeholder="Email Address"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            width: "22ch",
            backgroundColor: "#333",
            borderRadius: ".4rem",
            input: {
              color: "#ccc",
              padding: ".6rem",
            },
            fieldset: { border: "none" },
          }}
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#C4A8F5",
            color: "#000",
            borderRadius: ".3rem",
            padding: ".5rem .6rem",
            "&:hover": {
              backgroundColor: "#B296E0",
            },
          }}
          onClick={makePayment}
        >
          SUBSCRIBE
        </Button>
      </Box>
    </Box>
  );
}

export default Newsletter;
