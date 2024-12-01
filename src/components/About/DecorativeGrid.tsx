import Masonry from "@mui/lab/Masonry";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";

const images = [
  "  https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1506377170913-e1d634babf96?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1666264200711-9a06dbfb0fea?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1485217988980-11786ced9454?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1519205196298-7fc29cb73b3a?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  cursor: "pointer",
}));

const heights = [350, 650, 400, 270, 280];

export default function DecorativeGrid() {
  return (
    <Box
      maxWidth="lg"
      sx={{
        width: "auto",
        minHeight: 393,
      }}
    >
      <Masonry columns={3} spacing={1}>
        {images.map((img, index) => (
          <Item
            key={index}
            sx={{
              height: heights[index],
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Item>
        ))}
      </Masonry>
    </Box>
  );
}
