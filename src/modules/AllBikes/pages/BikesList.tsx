import { Container } from "@mui/material";
import BikeFilters from "../../../components/Filters/BikeFilter";
import { useBikeStore } from "../../../store/useBikeStore";
import AllBikes from "../components/AllBikes";
import useBikes from "../hooks/useBike";

const BikeList = () => {
  const { totalThefts, currentPage, setCurrentPage, setFilters } =
    useBikeStore();

  const { data, isLoading, isFetching } = useBikes();
  const dataBikes = data?.bikes?.bikes;

  const handleSearch = (searchQuery: string) => {
    setFilters({
      query: searchQuery,
    });
    setCurrentPage(1);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <Container>
        <BikeFilters onSearch={handleSearch} isLoading={isLoading} />
      </Container>
      <>
        <AllBikes
          bikes={dataBikes || []}
          results_count={totalThefts}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          isLoading={isLoading}
          isFetching={isFetching}
        />
      </>
    </div>
  );
};

export default BikeList;
