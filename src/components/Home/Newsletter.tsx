import { Box, Typography, TextField, Button } from "@mui/material";

function Newsletter() {
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
        padding: "3rem",
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
          backgroundColor: "#1A1A1A", // Arka plan rengi (siyah-gri tonlarında)
          border: "1px solid #fff", // Beyaz sınır çizgisi
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <TextField
          placeholder="Email Address"
          variant="outlined"
          sx={{
            // flex: 1,
            backgroundColor: "#333",
            input: {
              color: "#ccc",
              padding: "10px",
            },
            fieldset: { border: "none" }, // Sınırları kaldır
          }}
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#C4A8F5",
            color: "#000",
            borderRadius: 1,
            padding: ".6rem .8rem",
            "&:hover": {
              backgroundColor: "#B296E0",
            },
          }}
        >
          SUBSCRIBE
        </Button>
      </Box>
    </Box>
  );
}

export default Newsletter;
