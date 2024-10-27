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
  console.log(data);

  data = data.slice(0, 10);

  return (
    <>
      <Typography
        variant="body1"
        component="h2"
        sx={{
          fontSize: 24,
          textAlign: "center",
          mb: "1rem",
        }}
      >
        Latest News
      </Typography>
      <Box
        sx={{
          maxHeight: "70vh",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        {data.map((item) => (
          <Card
            key={item.title}
            sx={{
              backgroundColor: "#fcfcfc",
              display: "flex",
              minWidth: 275,
              maxWidth: "35rem",
              minHeight: "10rem",
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: 130 }}
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
              {/* <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mb: 0.5, fontSize: ".6rem" }}
            >
              {formatDateTime(new Date(item.publishedAt), "DD.MM.YYYY")}
            </Typography> */}
              <Typography
                variant="body1"
                component="div"
                sx={{ fontSize: ".9rem" }}
              >
                {item.title}
              </Typography>
              <Button
                variant="outlined"
                size="small"
                sx={{
                  mt: "1rem",
                  fontSize: ".6rem",
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
