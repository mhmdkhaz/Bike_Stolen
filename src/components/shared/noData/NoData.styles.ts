import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

// Styled Box component
export const StyledBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "24rem",
  width: "100%",
  position: "relative"
}));

// Styled Typography component
export const StyledTypography = styled(Typography)(() => ({
  fontSize: "15px",
  textAlign: "center",
  position: "absolute",
  left: "50%",
  color: "gray",
  transform: "translateX(-50%)",
}));
