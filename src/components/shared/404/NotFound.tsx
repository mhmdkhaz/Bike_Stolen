import notFoundImg from "../../../assets/images/notFound.png";

import { Box, Typography } from "@mui/material";
const NotFound = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          pb: "100px",
        }}
      >
        <Box>
          <img alt="not-found" src={notFoundImg} />
        </Box>
        <Typography sx={{ fontSize: "22px", fontWeight: "700" }}>
          Ooops! Page Not Found
        </Typography>
      </Box>
    </Box>
  );
};

export default NotFound;
