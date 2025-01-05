import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import MyButton from "../Button";
import { formatDateTime } from "../../helpers/format";
import BlogIcons from "./BlogIcons";
import { calculateReadingTime } from "../../helpers/calculateReadingTime";

export interface BlogCardProps {
  item: BlogPost;
}

export default function BlogCard({ item }: BlogCardProps) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        width: "100%",
        // maxWidth: "40rem",
        minWidth: "20rem",
        cursor: "pointer",
        boxShadow: 0,
      }}
    >
      <CardMedia
        component="img"
        sx={{
          width: { xs: "100%", sm: 200 },
          height: { xs: "200px", sm: "auto" },
          objectFit: "cover",
          objectPosition: "center",
        }}
        image={item.image}
        alt={item.title}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flex: 1,
          padding: ".1rem .6rem",
        }}
      >
        <CardContent
          sx={{ flex: "1 0 auto", padding: { xs: "0.5rem", sm: "1rem" } }}
        >
          <Typography
            component="div"
            variant="body2"
            sx={{
              background: "#f0f0f0",
              fontSize: { xs: ".6rem", sm: ".7rem" },
              padding: "0.2rem 0.4rem",
              borderRadius: ".8rem",
              textTransform: "uppercase",
              display: "inline-block",
              marginBottom: "0.5rem",
            }}
          >
            {item.categoryId?.name}
          </Typography>

          <Typography
            component="div"
            variant="body1"
            sx={{
              fontSize: { xs: ".9rem", sm: "1rem" },
            }}
          >
            {item.title}
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "0.5rem",
              marginTop: { xs: "0.5rem", sm: ".6rem" },
            }}
          >
            <Typography
              component="div"
              variant="body2"
              sx={{
                fontSize: { xs: ".8rem", sm: "1rem" },
                marginBottom: "0.5rem",
              }}
            >
              {formatDateTime(new Date(item.createdAt), "DD/MM/YYYY")}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {calculateReadingTime(item.content)}
            </Typography>
          </Box>

          <Typography
            variant="subtitle1"
            component="p"
            sx={{
              color: "text.secondary",
              fontSize: { xs: ".8rem", sm: ".9rem" },
            }}
          >
            {item.userId?.author}
          </Typography>
        </CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "auto",
          }}
        >
          <BlogIcons item={item} />
          <MyButton to={`/blog/${item._id}`} type="secondary">
            Read More &rarr;
          </MyButton>
        </Box>
      </Box>
    </Card>
  );
}
