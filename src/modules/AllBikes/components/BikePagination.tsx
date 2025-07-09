import { Box, Pagination } from "@mui/material";

const BikePagination = ({
  totalPages,
  currentPage,
  onPageChange,
}: {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}) => {
  return (
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
  );
};

export default BikePagination;
