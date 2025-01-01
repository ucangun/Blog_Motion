import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
  Box,
} from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const NewsSection = () => {
  let { data } = useSelector((state: RootState) => state.utils);

  // console.log(data);

  data = data.slice(0, 3);

  return (
    <Box
      sx={{
        display: { xs: "none", md: "block" },
      }}
    >
      <Typography
        variant="body1"
        component="h2"
        sx={{
          fontSize: "1.2rem",
          textAlign: "center",
          mb: "1rem",
        }}
      >
        Latest News
      </Typography>
      <Box
        sx={{
          width: "100%",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {data.map((item, index) => (
          <Card
            key={index}
            sx={{
              backgroundColor: "#f8f8f8",
              display: "flex",
              width: "100%",
              minHeight: "10rem",
              boxShadow: 0,
              "@media (max-width: 600px)": {
                minHeight: "8rem",
              },
            }}
          >
            <CardMedia
              component="img"
              sx={{
                objectFit: "cover",
                width: 130,
              }}
              image={
                item.image ||
                "https://licindia.in/documents/d/guest/no_image_news"
              }
              alt={item.title}
            />
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: ".6rem",
                alignItems: "flex-end",
              }}
            >
              <Typography
                variant="body1"
                component="div"
                sx={{
                  fontSize: ".8rem",
                  "@media (max-width: 1150px)": {
                    fontSize: ".75rem",
                  },
                }}
              >
                {item.title}
              </Typography>
              <Button
                variant="outlined"
                size="small"
                sx={{
                  mt: "1rem",
                  fontSize: ".6rem",
                  "@media (max-width: 600px)": {
                    fontSize: ".5rem",
                  },
                }}
                onClick={() => window.open(item.url, "_blank")}
              >
                View Article
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default NewsSection;
