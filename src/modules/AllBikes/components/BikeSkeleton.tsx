import { Grid, Box, Skeleton } from "@mui/material";

const BikeSkeleton = () => {
  return (
    <>
      {Array.from(new Array(6)).map((_, index) => (
        <Grid item xs={12} sm={12} md={6} key={`skeleton-${index}`}>
          <Box sx={{ p: 2, boxShadow: 1, borderRadius: 2 }}>
            <Skeleton
              variant="rectangular"
              width="100%"
              height={200}
              sx={{ mb: 2 }}
            />
            <Skeleton variant="text" width="60%" height={40} />
            <Skeleton variant="text" width="80%" height={20} sx={{ mt: 1 }} />
            <Skeleton variant="text" width="80%" height={20} sx={{ mt: 1 }} />
            <Skeleton variant="text" width="50%" height={20} sx={{ mt: 1 }} />
          </Box>
        </Grid>
      ))}
    </>
  );
};

export default BikeSkeleton;
