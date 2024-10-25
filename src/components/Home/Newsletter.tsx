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
        >
          SUBSCRIBE
        </Button>
      </Box>
    </Box>
  );
}

export default Newsletter;
