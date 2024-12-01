import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import { RootState } from "../../app/store";

const CategoryBubbles = () => {
  const { categories } = useSelector((state: RootState) => state.blog);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "0.5rem",
        padding: "2rem 0",
      }}
    >
      {categories.map((category: { name: string }) => (
        <Box
          key={category.name}
          sx={{
            background: "#f0f0f0",
            fontSize: { xs: ".6rem", sm: ".7rem" },
            padding: "0.2rem 0.4rem",
            borderRadius: ".8rem",
            textTransform: "uppercase",
            display: "inline-block",
            fontWeight: 500,
            color: "#333",
            cursor: "pointer",
          }}
        >
          {category.name}
        </Box>
      ))}
    </Box>
  );
};

export default CategoryBubbles;
