import { Box, CircularProgress, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BikeDetailsIndex = () => {
  const { id } = useParams<{ id: string }>();
  const [bike, setBike] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBikeDetails = async () => {
      try {
        const response = await axios.get(
          `https://bikeindex.org/api/v3/bikes/${id}`
        );
        console.log('response:::', response)
        setBike(response.data.bike);
      } catch (err) {
        setError("Failed to fetch bike details");
      } finally {
        setIsLoading(false);
      }
    };

    fetchBikeDetails();
  }, [id]);

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <Box>
      <Typography variant="h4">{bike?.title || "Unknown Title"}</Typography>
      <Typography variant="body1">
        {bike?.description || "No description available."}
      </Typography>
      <Typography variant="subtitle1">
        Location: {bike?.stolen_location || "Unknown"}
      </Typography>
      <Typography variant="subtitle1">
        Date Stolen: {bike?.date_stolen || "Unknown"}
      </Typography>
      {bike?.large_img && (
        <img
          src={bike.large_img}
          alt={bike.title}
          style={{ maxWidth: "100%" }}
        />
      )}
    </Box>
  );
};

export default BikeDetailsIndex;
