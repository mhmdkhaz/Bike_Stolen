import { useQuery, UseQueryResult } from "react-query";
import { useBikeStore } from "../../../store/useBikeStore";
import { _BikesApi } from "../../../services/bikes/bikes.service";
import type { Theft } from "../../../types/Theft";

const useBikes = (): UseQueryResult<{
  bikes: Theft[];
  results_count: number;
}> => {
  const { currentPage, filters, setThefts, setError } = useBikeStore();

  return useQuery(
    ["bikes", currentPage, filters],
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
        setThefts(data.bikes.bikes, data.results_count);
      },
      onError: (error: any) => {
        console.error("Error fetching bikes:", error);
        setError(error.message || "Failed to fetch bikes");
      },
    }
  );
};

export default useBikes;
