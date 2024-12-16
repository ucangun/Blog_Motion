import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  TextField,
  Box,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import useAuthCall from "../../../hooks/useAuthCall";

const ReminderCard: React.FC = () => {
  const { currentUser, singleUser } = useSelector(
    (state: RootState) => state.auth
  );

  const { createNote, getSingleUser, deleteNote } = useAuthCall();

  useEffect(() => {
    getSingleUser(currentUser?._id || "");
  }, [currentUser?._id]);

  const [newNote, setNewNote] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleAddNote = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter" && newNote.trim() !== "") {
      await createNote({ content: newNote });
      setNewNote("");
      setIsEditing(false);
    }
  };

  const handleDeleteNote = async (noteId: string) => {
    await deleteNote(noteId);
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
          {singleUser?.notes?.map((note) => (
            <Box
              key={note?._id}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                color: "text.secondary",
                fontSize: "1rem",
                mb: ".5rem",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography sx={{ marginRight: 1 }}>•</Typography>
                <Typography sx={{ fontSize: "1rem" }}>
                  {note?.content}
                </Typography>
              </Box>

              <IconButton
                onClick={() => handleDeleteNote(note?._id || "")}
                aria-label="delete note"
              >
                <Delete sx={{ fontSize: 18 }} />
              </IconButton>
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
