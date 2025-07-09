import { create } from "zustand";
import type { TheftStore } from "../types/TheftStore";

export const useBikeStore = create<TheftStore>((set) => ({
  thefts: [],
  totalThefts: 0,
  error: null,
  currentPage: 1,
  filters: {
    query: "",
    stolenness: "stolen",
    location: "Munich",
  },

  setThefts: (thefts, total) => set({ thefts, totalThefts: total }),
  setError: (error) => set({ error }),

  setCurrentPage: (page) => set({ currentPage: page }),
  incrementPage: () =>
    set((state) => ({ currentPage: Math.min(state.currentPage + 1, 100) })),
  decrementPage: () =>
    set((state) => ({ currentPage: Math.max(state.currentPage - 1, 1) })),

  setFilters: (newFilters) =>
    set((state) => ({
      filters: {
        ...state.filters,
        ...newFilters,
      },
    })),
}));
