import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import Logo from "../../../assets/images/Logo.png";
import type { BikeCardProps } from "../../../types/BikeCardProps";

const BikeCard: React.FC<BikeCardProps> = ({
  title,
  description,
  theftDate,
  reportedDate,
  location,
  image,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    // rootMargin: "10px",
  });

  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <Card
      ref={ref}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        maxWidth: 600,
        margin: 1,
        boxShadow: 3,
        cursor: "pointer",
        minHeight: 300,
      }}
    >
      {inView ? (
        <CardMedia
          component="img"
          sx={{
            width: { xs: "100%", sm: 200 },
            height: { xs: 330, sm: 150 },
            objectFit: "cover",
            filter: imgLoaded ? "none" : "blur(10px)",
            transition: "filter 0.3s ease-out",
          }}
          image={image || Logo}
          alt={title}
          onLoad={() => setImgLoaded(true)}
        />
      ) : (
        <Box
          sx={{
            width: { xs: "100%", sm: 200 },
            height: { xs: 330, sm: 150 },
            backgroundColor: "#ccc",
          }}
        />
      )}

      <CardContent sx={{ flex: 1, textAlign: { xs: "center", sm: "left" } }}>
        <Typography gutterBottom variant="h5" component="div">
          {title || "Unknown Title"}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          mb={2}
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {description || "No description available."}
        </Typography>
        <Box>
          <Typography variant="subtitle2" color="text.secondary">
            <strong>Theft Date:</strong> {theftDate || "Unknown"}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            <strong>Reported Date:</strong> {reportedDate || "Unknown"}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            <strong>Location:</strong> {location || "Unknown"}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BikeCard;
