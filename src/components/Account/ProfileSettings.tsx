import {
  Avatar,
  Box,
  Button,
  Grid2,
  TextField,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { CurrentUserType } from "../../features/authSlice";
import { useState } from "react";
import useAuthCall from "../../hooks/useAuthCall";

const ProfileSettings = () => {
  const { currentUser } = useSelector((state: RootState) => state.auth);
  const { updateUser } = useAuthCall();

  const initialValues: CurrentUserType = {
    _id: currentUser?._id || "",
    password: "",
    username: currentUser?.username || "",
    firstName: currentUser?.firstName || "",
    lastName: currentUser?.lastName || "",
    email: currentUser?.email || "",
    image: "",
    city: "",
    bio: "",
  };

  const [userData, setUserData] = useState(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateUser(userData);
    setUserData(initialValues);
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      {/* ImageBox */}

      <Box sx={{ mb: 2 }}>
        <Typography variant="h5">Profile</Typography>
        <Box display="flex" alignItems="center" gap={2} mt={2}>
          <Typography variant="body2" fontWeight="bold">
            Avatar
          </Typography>
          <Avatar
            alt="Avatar"
            src={currentUser?.image}
            sx={{ width: 48, height: 48 }}
          />
          <Box>
            <TextField
              fullWidth
              name="image"
              label="Image"
              variant="outlined"
              value={userData?.image}
              placeholder="https://via.placeholder.com/300"
              onChange={handleChange}
            />
          </Box>
        </Box>
      </Box>

      {/* UserInfo Section */}

      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            name="firstName"
            label="First name"
            variant="outlined"
            disabled
            value={userData?.firstName}
            onChange={handleChange}
          />
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            name="lastName"
            label="Last name"
            variant="outlined"
            disabled
            value={userData?.lastName}
            onChange={handleChange}
          />
        </Grid2>
        <Grid2 size={{ xs: 12 }}>
          <TextField
            fullWidth
            name="email"
            label="Email"
            variant="outlined"
            disabled
            value={userData?.email}
            onChange={handleChange}
          />
        </Grid2>

        <Grid2 size={{ xs: 12 }}>
          <TextField
            fullWidth
            name="city"
            label="City"
            variant="outlined"
            value={userData?.city}
            onChange={handleChange}
          />
        </Grid2>
        <Grid2 size={{ xs: 12 }}>
          <TextField
            fullWidth
            name="bio"
            label="Add Bio"
            variant="outlined"
            value={userData?.bio}
            multiline
            rows={3}
            onChange={handleChange}
          />
        </Grid2>
        <Grid2 size={{ xs: 12 }}>
          <TextField
            fullWidth
            name="password"
            label="Password"
            variant="outlined"
            type="password"
            placeholder="Enter your password"
            helperText="Your password must have at least 8 characters, include one uppercase letter, one number, and one special character."
            onChange={handleChange}
            sx={{ mt: 2 }}
          />
        </Grid2>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Update User
        </Button>
      </Grid2>
    </Box>
  );
};

export default ProfileSettings;
