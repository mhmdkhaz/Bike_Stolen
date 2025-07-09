import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { TextField, Button, Box, Grid } from "@mui/material";
import { useBikeStore } from "../../store/useBikeStore";

const BikeFilters: React.FC<{ onSearch: Function; isLoading: boolean }> = ({
  onSearch,
  isLoading,
}) => {
  const { filters: initialFilters, setCurrentPage } = useBikeStore();

  const [localFilters, setLocalFilters] = useState({
    query: initialFilters.query || "",
    location: initialFilters.location || "",
    stolenness: initialFilters.stolenness || "all",
  });

  const handleInputChange = (field: string, value: any) => {
    setLocalFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSearch = () => {
    useBikeStore.setState({
      filters: {
        ...localFilters,
      },
    });

    setCurrentPage(1);
    onSearch(localFilters.query, {
      location: localFilters.location,
      stolenness: localFilters.stolenness,
    });
  };

  return (
    <Box display="flex" justifyContent="center" mb={2} ml={1}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            label="title or year"
            variant="outlined"
            value={localFilters.query}
            fullWidth
            onChange={(e) => handleInputChange("query", e.target.value)}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <TextField
            label="Location"
            variant="outlined"
            value={localFilters.location}
            fullWidth
            onChange={(e) => handleInputChange("location", e.target.value)}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSearch}
            fullWidth
            disabled={isLoading}
            startIcon={<SearchIcon />}
            sx={{
              backgroundColor: "#2C3971",
              height: "100%",
              fontSize: "1rem",
            }}
          >
            {isLoading ? "Loading..." : "Search"}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BikeFilters;
