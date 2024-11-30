import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import MyButton from "../Button";
import { formatDateTime } from "../../helpers/format";
import BlogIcons from "./BlogIcons";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

export interface BlogCardProps {
  item: BlogPost;
}

export default function BlogCard({ item }: BlogCardProps) {
  const { categories } = useSelector((state: RootState) => state.blog);

  const getCategoryName = (categoryId: string) => {
    const category = categories?.find((cat) => cat._id === categoryId);
    return category ? category.name : "Unknown Category";
  };

  return (
    <Card
      sx={{
        display: "flex",
        width: "100%",
        maxWidth: "36rem",
        minWidth: "30rem",
        cursor: "pointer",
        boxShadow: 1,
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <CardMedia
        component="img"
        sx={{
          width: { xs: "100%", sm: 170 },
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
        <CardContent sx={{ flex: "1 0 auto" }}>
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
            {getCategoryName(item.categoryId)}{" "}
          </Typography>
          <Typography
            component="div"
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", sm: "1.1rem" },
              marginBottom: "0.5rem",
            }}
          >
            {item.title}
          </Typography>
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

          <Typography
            variant="subtitle1"
            component="p"
            sx={{
              color: "text.secondary",
              fontSize: { xs: ".8rem", sm: ".9rem" },
            }}
          >
            "Unknown Author"
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
