import { Container, Grid, Typography, Box, Skeleton } from "@mui/material";
import type { Theft } from "../../../types/Theft";
import NoData from "../../../components/shared/noData/NoData";
import Loader from "../../../components/shared/Loader";
import BikeSkeleton from "./BikeSkeleton";
import BikeList from "./BikeList";
import BikePagination from "./BikePagination";

const AllBikes = ({
  // data = { bikes: [] },
  bikes = [],
  results_count,
  currentPage,
  onPageChange,
  isLoading = false,
  isFetching = false,
}: {
  // data: { bikes: Theft[] };
  bikes: Theft[];
  results_count: number;
  currentPage: number;
  onPageChange: (newPage: number) => void;
  isLoading?: boolean;
  isFetching?: boolean;
}) => {
  const totalPages = Math.ceil(results_count / 10);

  return (
    <Container sx={{ py: 4 }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        textAlign="left"
        color="#2C3971"
        sx={{ fontWeight: 600, mb: 4 }}
      >
        Stolen bikes
        {!isLoading ? (
          results_count
        ) : (
          <>
            <Skeleton width={40} />
            <Loader />
          </>
        )}
      </Typography>
      {/* 
      <Grid container spacing={4} justifyContent="center">
        {isLoading ? (
          <BikeSkeleton />
        ) : bikes?.length > 0 ? (
          <BikeList bikes={bikes} />
        ) : (
          <NoData text="No bike theft cases found." />
        )}
      </Grid> */}
      <Grid container spacing={4} justifyContent="center">
        {isLoading || isFetching ? (
          <BikeSkeleton />
        ) : bikes?.length > 0 ? (
          <>
            <BikeList bikes={bikes} />
            {isFetching && (
              <Box sx={{ width: "100%", mt: 2 }}>
                <Skeleton variant="rectangular" height={20} />
              </Box>
            )}
          </>
        ) : (
          <NoData text="No bike theft cases found." />
        )}
      </Grid>

      {!isLoading && results_count > 0 && (
        <BikePagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      )}

      {isLoading && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Skeleton variant="rectangular" width={200} height={40} />
        </Box>
      )}
    </Container>
  );
};

export default AllBikes;
