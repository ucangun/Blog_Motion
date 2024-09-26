import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid2,
  Box,
  Avatar,
  Button,
} from "@mui/material";
import { useEffect } from "react";
import useBlogCall from "../../hooks/useBlogCall";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import TopBlogWriterCard from "./TopBlogWriterCard";

const TopBlogWriter: React.FC = () => {
  const { currentUser } = useSelector((state: RootState) => state.auth);
  const { userBlogs } = useSelector((state: RootState) => state.blog);
  console.log(currentUser);
  const { getBlogByUserId } = useBlogCall();

  useEffect(() => {
    getBlogByUserId("66e89b0252415f1a693c86a4");
  }, []);

  return (
    <Grid2 container spacing={2}>
      {/* main article on left */}
      <Grid2 size={{ xs: 12, md: 6 }}>
        <Card sx={{ maxWidth: "100%" }}>
          <CardMedia
            component="img"
            height="400"
            image="https://via.placeholder.com/900x400"
            alt="Main article image"
          />

          {/* İçerik */}
          <CardContent sx={{ padding: 3 }}>
            {/* Category and time */}
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb={2}
            >
              <Typography
                variant="button"
                sx={{
                  background: "#f0f0f0",
                  padding: "0.2rem 0.6rem",
                  borderRadius: "12px",
                }}
              >
                Sport
              </Typography>
              <Typography variant="body2" color="text.secondary">
                4 Hours read
              </Typography>
            </Box>

            {/* Title */}
            <Typography variant="h4" gutterBottom>
              2022 NFL: Top 4 Quaterbacks selected
            </Typography>

            {/* Description */}
            <Typography variant="body2" color="text.secondary" paragraph>
              The social-media company is in discussions to sell itself to Elon,
              a dramatic turn of events just 11 days after the ...
            </Typography>

            {/* Author and Button */}
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              mt={3}
            >
              <Button variant="outlined" sx={{ textTransform: "none" }}>
                Read Article
              </Button>

              {/* Author */}
              <Box display="flex" alignItems="center">
                <Avatar
                  alt="Author's Avatar"
                  src="https://via.placeholder.com/40"
                  sx={{ width: 32, height: 32, mr: 1 }}
                />
                <Typography variant="body2">by Anastasia</Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid2>

      {/* Sağ tarafa küçük makaleler */}
      <Grid2 size={{ xs: 12, md: 6 }}>
        {userBlogs.map((blog: BlogPost, index) => (
          <TopBlogWriterCard key={index} blog={blog} />
        ))}
      </Grid2>
    </Grid2>
  );
};

export default TopBlogWriter;
