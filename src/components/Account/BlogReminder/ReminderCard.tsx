import React from "react";
import { Card, CardContent, Typography, IconButton } from "@mui/material";
import { Edit } from "@mui/icons-material";

const ReminderCard: React.FC = () => {
  return (
    <Card
      sx={{
        width: "100%",
        height: 256,
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: 2,
        boxShadow: 1,
        px: 1,
        py: 2,
        backgroundColor: "primary.main",
        position: "relative",
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            mb: 2,
          }}
        >
          Remember Card
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            fontSize: "0.9rem",
          }}
        >
          Add Your upcoming blog ideas 🙃
        </Typography>
      </CardContent>

      <IconButton
        sx={{
          position: "absolute",
          bottom: 16,
          right: 16,
          width: 32,
          height: 32,
          backgroundColor: "gray",
          color: "white",
          borderRadius: "50%",
          "&:hover": {
            backgroundColor: "black",
          },
        }}
        aria-label="edit note"
      >
        <Edit sx={{ fontSize: 18 }} />
      </IconButton>
    </Card>
  );
};

export default ReminderCard;
