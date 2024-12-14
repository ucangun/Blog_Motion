import { Box, Grid2, Skeleton } from "@mui/material";

const BlogsSkeleton = () => {
  const skeletonCount = 5;

  return (
    <Grid2
      container
      spacing={1}
      sx={{
        padding: "1rem 0.5rem",
      }}
    >
      {/* CategoryBubbles Skeleton for Small Screens */}
      <Grid2
        size={{ xs: 12 }}
        sx={{
          display: { xs: "flex", md: "none" },
          flexWrap: "wrap",
          gap: "0.5rem",
          padding: "0.5rem 0",
        }}
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <Skeleton key={index} variant="circular" width={50} height={50} />
        ))}
      </Grid2>

      {/* Blogs Section Skeleton */}
      <Grid2
        size={{ xs: 12, md: 8 }}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        {Array.from({ length: skeletonCount }).map((_, index) => (
          <Skeleton
            key={index}
            variant="rectangular"
            width="100%"
            height={200}
            sx={{
              borderRadius: "0.5rem",
            }}
          />
        ))}

        {/* Pagination Skeleton */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1rem",
          }}
        >
          <Skeleton variant="rectangular" width={200} height={40} />
        </Box>
      </Grid2>

      {/* News Section Skeleton */}
      <Grid2
        size={{ xs: 12, md: 4 }}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: ".5rem",
        }}
      >
        {Array.from({ length: 3 }).map((_, index) => (
          <Skeleton
            key={index}
            variant="rectangular"
            width="100%"
            height={150}
            sx={{
              borderRadius: "0.5rem",
            }}
          />
        ))}

        {/* CategoryBubbles Skeleton for Medium+ Screens */}
        <Box
          sx={{
            display: { xs: "none", md: "block" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "0.5rem",
              flexWrap: "wrap",
            }}
          >
            {Array.from({ length: 10 }).map((_, index) => (
              <Skeleton
                key={index}
                variant="rectangular"
                sx={{ borderRadius: ".8rem" }}
                width={60}
                height={20}
              />
            ))}
          </Box>
        </Box>
      </Grid2>
    </Grid2>
  );
};

export default BlogsSkeleton;
