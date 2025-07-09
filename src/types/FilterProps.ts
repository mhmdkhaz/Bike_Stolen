export interface FilterProps {
  onSearch: (
    query: string,
    filters: {
      location?: string;
      stolenness?: string;
    }
  ) => void;
}
