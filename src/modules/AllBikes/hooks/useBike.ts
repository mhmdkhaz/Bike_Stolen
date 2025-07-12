import { useQuery, UseQueryResult } from "react-query";
import { useBikeStore } from "../../../store/useBikeStore";
import { _BikesApi } from "../../../services/bikes/bikes.service";
import type { Theft } from "../../../types/Theft";

const useBikes = (): UseQueryResult<{
  bikes: {
    bikes: Theft[];
    total: number;
  };
  results_count: number;
}> => {
  const { currentPage, filters, setThefts, setError } = useBikeStore();
  // const { currentPage, filters, setError } = useBikeStore();

  return useQuery(
    ["bikes", currentPage, filters.query, filters.stolenness, filters.location],
    async () => {
      const bikes = await _BikesApi.index({
        page: currentPage,
        query: filters.query,
        filters,
      });

      const results_count = await _BikesApi.getCount({
        query: filters.query,
        filters: {
          location: filters.location,
          stolenness: filters.stolenness,
        },
      });

      return { bikes, results_count };
    },
    {
      onSuccess: (data: any) => {
        setThefts(data.results_count);
      },
      onError: (error: any) => {
        console.error("Error fetching bikes:", error);
        setError(error.message || "Failed to fetch bikes");
      },
      keepPreviousData: true,
    }
  );
};

export default useBikes;
