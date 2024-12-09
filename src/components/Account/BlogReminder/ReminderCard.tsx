import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  TextField,
  Box,
} from "@mui/material";
import { Edit } from "@mui/icons-material";

const ReminderCard: React.FC = () => {
  const [notes, setNotes] = useState<string[]>([]);
  const [newNote, setNewNote] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleAddNote = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && newNote.trim() !== "") {
      setNotes([...notes, newNote]);
      setNewNote("");
      setIsEditing(false);
    }
  };

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
            mb: 1,
          }}
        >
          Note Your Blog Ideas 📝
        </Typography>

        <Box>
          {notes.map((note, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                color: "text.secondary",
                fontSize: "1rem",
                mb: ".5rem",
              }}
            >
              <Typography sx={{ marginRight: 1 }}>•</Typography>
              <Typography sx={{ fontSize: "1rem" }}>{note}</Typography>
            </Box>
          ))}
        </Box>

        {isEditing ? (
          <TextField
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            onKeyDown={handleAddNote}
            onBlur={() => setIsEditing(false)}
            autoFocus
            variant="standard"
            sx={{
              width: "100%",
              marginTop: 1,
              backgroundColor: "primary.main",
              border: "1px solid #000",
              borderRadius: "4px",
              padding: "6px",
              "& .MuiInputBase-root": {
                border: "none",
              },
              "&:hover": {
                border: "1px solid #000",
              },
            }}
          />
        ) : null}
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
        onClick={() => setIsEditing(true)}
      >
        <Edit sx={{ fontSize: 18 }} />
      </IconButton>
    </Card>
  );
};

export default ReminderCard;
