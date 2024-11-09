import React from "react";
import { Card, CardContent, Typography, Box, IconButton } from "@mui/material";
import { Edit } from "@mui/icons-material";

const ReminderCard: React.FC = () => {
  return (
    <Card
      sx={{
        width: "100%",
        height: 256,
        display: "flex",
        flexDirection: "column",
        borderRadius: 2,
        boxShadow: 1,
        p: 2,
        backgroundColor: "primary.main",
      }}
    >
      <CardContent>
        <Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              mb: 2,
            }}
          >
            13 things to work on
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              fontSize: "0.9rem",
            }}
          >
            Our interior design experts work with you to create the space that
            you have been dreaming about.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mt: 2,
          }}
        >
          <IconButton
            sx={{
              width: 32,
              height: 32,
              ml: "auto",
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
        </Box>
      </CardContent>
    </Card>
  );
};

export default ReminderCard;
