import axios from "axios";

const BASE_URL = "https://bikeindex.org/api/v3";

const buildUrlWithFilters = (
  endpoint: string,
  {
    query = "",
    filters = {},
  }: {
    query?: string;
    filters?: {
      stolenness?: string;
      location?: string;
    };
  }
): string => {
  const { stolenness = "all", location = "Munich" } = filters;

  let url = `${BASE_URL}/${endpoint}?location=${encodeURIComponent(
    location
  )}&stolenness=${stolenness}`;

  if (query) {
    url += `&query=${encodeURIComponent(query)}`;
  }

  return url;
};

export const _BikesApi = {
  getCount: async ({
    query = "",
    filters = {},
  }: {
    query?: string;
    filters?: {
      stolenness?: string;
      location?: string;
    };
  }) => {
    const url = buildUrlWithFilters("search/count", { query, filters });

    try {
      const response = await axios.get(url);
      return response?.data?.stolen || 0;
    } catch (err) {
      console.error("Error fetching bike count:", err);
      throw err;
    }
  },

  index: async ({
    page = 1,
    query = "",
    filters = {},
  }: {
    page?: number;
    query?: string;
    filters?: {
      stolenness?: string;
      location?: string;
    };
  }) => {
    const url =
      buildUrlWithFilters("search", { query, filters }) +
      `&page=${page}&per_page=10`;

    try {
      const response = await axios.get(url);
      return {
        bikes: response?.data?.bikes || [],
        total: response?.data?.total || 0,
      };
    } catch (err) {
      console.error("Error fetching bikes:", err);
      throw err;
    }
  },
};
