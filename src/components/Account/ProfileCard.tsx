import {
  Card,
  CardContent,
  CardMedia,
  Avatar,
  Typography,
  Box,
  Button,
  Modal,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import { RootState } from "../../app/store";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import useBlogCall from "../../hooks/useBlogCall";
import SettingsContainer from "./SettingsContainer";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: "100%",
    sm: "80%",
    md: "60%",
  },
  maxWidth: "48rem",
  maxHeight: { xs: "80vh", sm: "100vh" },
  bgcolor: "background.paper",
  boxShadow: 24,
  padding: {
    xs: "1rem .8rem",
    sm: "2rem 4rem",
    lg: "2rem 6rem",
  },
  borderRadius: ".5rem",
  overflowY: "auto",
};

const ProfileCard: React.FC = () => {
  const { currentUser } = useSelector((state: RootState) => state.auth);
  const { userBlogs } = useSelector((state: RootState) => state.blog);
  const { getBlogByUserId } = useBlogCall();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    getBlogByUserId(currentUser?._id || "");
  }, []);

  return (
    <Card
      sx={{
        maxWidth: 500,
        borderRadius: 2,
        textAlign: "center",
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      <CardMedia
        component="img"
        image="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        alt="Mountain"
        sx={{
          height: "10rem",
        }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "-4rem",
        }}
      >
        <Avatar
          src={currentUser?.image}
          alt="user image"
          sx={{
            width: 124,
            height: 124,
            border: "1px solid white",
          }}
        />
      </Box>
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {currentUser?.username}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {currentUser?.bio}
        </Typography>

        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            justifyContent: "center",
            gap: "1.2rem",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: ".2rem" }}>
            <StarIcon sx={{ color: "primary.main" }} />
            <Typography variant="body2">5</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: ".2rem" }}>
            <ArticleOutlinedIcon sx={{ color: "primary.main" }} />
            <Typography variant="body2">{userBlogs.length}</Typography>
          </Box>
        </Box>
      </CardContent>

      <Box
        sx={{
          padding: ".5rem",
        }}
      >
        <Button
          variant="outlined"
          sx={{
            fontSize: ".8rem",
            padding: ".2rem .5rem",
            borderRadius: ".5rem",
          }}
          onClick={handleOpen}
        >
          Edit Profile
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <SettingsContainer />
          </Box>
        </Modal>
      </Box>
    </Card>
  );
};

export default ProfileCard;
