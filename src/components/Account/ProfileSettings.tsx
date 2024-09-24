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

const ProfileSettings = () => {
  const { currentUser } = useSelector((state: RootState) => state.auth);
  return (
    <Box component="form">
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
              label="Image"
              variant="outlined"
              placeholder="https://via.placeholder.com/300"
            />
          </Box>
        </Box>
      </Box>

      {/* UserInfo Section */}

      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            label="First name"
            variant="outlined"
            disabled
            value={currentUser?.firstName}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
          />
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            label="Last name"
            variant="outlined"
            disabled
            value={currentUser?.lastName}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
          />
        </Grid2>
        <Grid2 size={{ xs: 12 }}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            disabled
            value={currentUser?.email}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
          />
        </Grid2>
        <Grid2 size={{ xs: 12 }}>
          <TextField
            fullWidth
            label="Add Bio"
            variant="outlined"
            value={currentUser?.bio}
            rows={4}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
          />
        </Grid2>
        <Grid2 size={{ xs: 12 }}>
          <TextField
            fullWidth
            label="City"
            variant="outlined"
            value={currentUser?.city}
            rows={4}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
          />
        </Grid2>

        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Update User
        </Button>
      </Grid2>
    </Box>
  );
};

export default ProfileSettings;
