import {
  Card,
  CardContent,
  CardMedia,
  Avatar,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import GroupIcon from "@mui/icons-material/Group";
import WorkIcon from "@mui/icons-material/Work";

const ProfileCard: React.FC = () => {
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
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
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
          Sarah Smith
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Freelance Web Designer
        </Typography>
        <Grid container justifyContent="center" sx={{ marginTop: 2 }}>
          <Grid item xs={4} textAlign="center">
            <StarIcon sx={{ color: "primary.main" }} />
            <Typography variant="body2">2k</Typography>
          </Grid>
          <Grid item xs={4} textAlign="center">
            <GroupIcon sx={{ color: "primary.main" }} />
            <Typography variant="body2">10k</Typography>
          </Grid>
          <Grid item xs={4} textAlign="center">
            <WorkIcon sx={{ color: "primary.main" }} />
            <Typography variant="body2">15</Typography>
          </Grid>
        </Grid>
      </CardContent>
      {/* İsteğe bağlı Follow butonu */}
      {/* <Box sx={{ padding: 2, borderTop: '1px solid #e0e0e0' }}>
        <Button
          variant="contained"
          sx={{
            width: '50%',
            borderRadius: '50px',
            backgroundColor: '#424242',
            color: '#fff',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#333',
            },
          }}
        >
          Follow
        </Button>
      </Box> */}
    </Card>
  );
};

export default ProfileCard;
