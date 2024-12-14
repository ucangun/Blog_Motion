import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import { RootState } from "../../app/store";

interface Props {
  onCategoryClick: (category: string) => void;
}

const CategoryBubbles: React.FC<Props> = ({ onCategoryClick }) => {
  const { categories } = useSelector((state: RootState) => state.blog);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "0.5rem",
        padding: ".5rem 0",
      }}
    >
      {categories.map((category: { _id: string; name: string }) => (
        <Box
          key={category.name}
          sx={{
            background: "#f0f0f0",
            fontSize: { xs: ".8rem", md: ".7rem" },
            padding: "0.2rem 0.4rem",
            borderRadius: ".8rem",
            textTransform: "uppercase",
            display: "inline-block",
            fontWeight: 500,
            color: "#333",
            cursor: "pointer",
          }}
          onClick={() => onCategoryClick(category._id)}
        >
          {category.name}
        </Box>
      ))}
    </Box>
  );
};

export default CategoryBubbles;
