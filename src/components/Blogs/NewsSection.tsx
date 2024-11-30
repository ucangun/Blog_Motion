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

  data = data.slice(0, 3);

  return (
    <>
      <Typography
        variant="body1"
        component="h2"
        sx={{
          fontSize: 24,
          textAlign: "center",
          mb: "1rem",
          "@media (max-width: 600px)": {
            fontSize: 18,
          },
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
        {data.map((item) => (
          <Card
            key={item.title}
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
                width: 130,
                "@media (max-width: 600px)": {
                  width: 100,
                },
              }}
              image={
                item.urlToImage ||
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
                  fontSize: ".9rem",
                  "@media (max-width: 600px)": {
                    fontSize: ".8rem",
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
    </>
  );
};

export default NewsSection;
