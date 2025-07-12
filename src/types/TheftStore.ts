import type { Theft } from "./Theft";

export interface TheftStore {
  // thefts: Theft[];
  totalThefts: number;
  error: string | null;
  currentPage: number;
  setThefts: (total: number) => void;
  setError: (error: string | null) => void;
  setCurrentPage: (page: number) => void;
  incrementPage: () => void;
  decrementPage: () => void;
  filters: {
    query: string;
    stolenness: string;
    location: string;
  };
  setFilters: (newFilters: Partial<TheftStore["filters"]>) => void;
}
