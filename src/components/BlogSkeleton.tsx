import { Box, Skeleton } from "@mui/material";

const BlogSkeleton = () => {
  const skeletonCount = 10;

  return (
    <Box
      sx={{
        padding: "1rem 0.4rem",
      }}
    >
      {/* Image Skeleton */}
      <Box
        sx={{
          padding: ".8rem .4rem ",
        }}
      >
        <Skeleton variant="rectangular" width="100%" height={350} />
      </Box>

      {/* Back Button Skeleton */}
      <Box
        sx={{
          padding: "1rem 3rem",
        }}
      >
        <Skeleton variant="rectangular" width={150} height={40} />
      </Box>

      {/* Blog Post Skeleton */}
      <Box
        sx={{
          padding: "2rem 3rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "2rem",
            flexWrap: "wrap",
            paddingRight: "1rem",
          }}
        >
          <Skeleton variant="text" sx={{ fontSize: "2rem", width: "60%" }} />
          <Skeleton variant="text" sx={{ fontSize: "1rem", width: "30%" }} />
        </Box>

        {/* Reusable Skeletons */}
        <Box
          sx={{
            padding: "3rem 0",
          }}
        >
          {Array.from({ length: skeletonCount }).map((_, index) => (
            <Skeleton
              key={index}
              variant="text"
              sx={{
                fontSize: "1.1rem",
                width: index % 2 === 0 ? "100%" : "80%",
                height: 20,
                marginBottom: "1rem",
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default BlogSkeleton;
