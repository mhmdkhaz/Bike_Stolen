import {
  Container,
  Grid,
  Typography,
  Box,
  Pagination,
  Skeleton,
} from "@mui/material";
import BikeCard from "../../BikeCard/pages/BikeCardIndex";
import type { Theft } from "../../../types/Theft";
import Logo from "../../../assets/images/Logo.png";
import NoData from "../../../components/shared/noData/NoData";
import Loader from "../../../components/shared/Loader";

const AllBikes = ({
  data = { bikes: [] },
  results_count,
  currentPage,
  onPageChange,
  isLoading = false,
}: {
  data: any;
  results_count: number;
  currentPage: number;
  onPageChange: (newPage: number) => void;
  isLoading?: boolean;
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

      <Grid container spacing={4} justifyContent="center">
        {isLoading ? (
          Array.from(new Array(6)).map((_, index) => (
            <Grid item xs={12} sm={12} md={6} key={`skeleton-${index}`}>
              <Box sx={{ p: 2, boxShadow: 1, borderRadius: 2 }}>
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height={200}
                  sx={{ mb: 2 }}
                />
                <Skeleton variant="text" width="60%" height={40} />
                <Skeleton
                  variant="text"
                  width="80%"
                  height={20}
                  sx={{ mt: 1 }}
                />
                <Skeleton
                  variant="text"
                  width="80%"
                  height={20}
                  sx={{ mt: 1 }}
                />
                <Skeleton
                  variant="text"
                  width="50%"
                  height={20}
                  sx={{ mt: 1 }}
                />
              </Box>
            </Grid>
          ))
        ) : data?.bikes?.length > 0 ? (
          data?.bikes?.map((bike: Theft) => (
            <Grid item xs={12} sm={12} md={6} key={bike.id}>
              <BikeCard
                title={bike.title}
                description={bike.description}
                theftDate={bike.date_stolen}
                reportedDate={bike.reportedDate}
                location={bike.stolen_location}
                image={bike.thumb !== null ? bike.thumb : Logo}
              />
            </Grid>
          ))
        ) : (
          <NoData text="No bike theft cases found." />
        )}
      </Grid>

      {results_count > 0 && !isLoading && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 4,
            py: 2,
            overflowX: "auto",
          }}
        >
          <Pagination
            page={currentPage}
            onChange={(_, page) => onPageChange(page)}
            count={totalPages}
            color="primary"
            siblingCount={1}
            boundaryCount={1}
            sx={{
              "& .MuiPaginationItem-root": {
                fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
                minWidth: { xs: "30px", sm: "35px", md: "40px" },
                height: { xs: "30px", sm: "35px", md: "40px" },
                margin: { xs: "0 2px", sm: "0 4px" },
              },
              "& .MuiPaginationItem-root.Mui-selected": {
                backgroundColor: "primary.main",
                color: "white",
                fontWeight: "bold",
              },
              "& .MuiPaginationItem-ellipsis": {
                height: { xs: "30px", sm: "35px", md: "40px" },
              },
            }}
          />
        </Box>
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
