import { QueryClient } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // refetchOnWindowFocus: true,
      retry: 0,
      // staleTime: 0,
      // cacheTime: 10 * (60 * 1000),
      staleTime: 5 * 60 * 1000,
      cacheTime: 10 * 60 * 1000,
    },
  },
});

export default queryClient;
