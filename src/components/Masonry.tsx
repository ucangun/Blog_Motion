import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";

const heights = [400, 195, 190];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "primary.main",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function HomeMasonry() {
  return (
    <Box maxWidth="xl" sx={{ width: "auto", minHeight: 393, mt: "3rem" }}>
      <Masonry columns={2} spacing={2}>
        {heights.map((height, index) => (
          <Item key={index} sx={{ height }}>
            {index + 1}
          </Item>
        ))}
      </Masonry>
    </Box>
  );
}
