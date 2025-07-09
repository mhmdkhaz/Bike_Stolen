// src/shared/components/PageWrapper.tsx
import { Box, Container } from "@mui/material";

const PageWrapper = ({ children }: any) => {
  return (
    <Box>
      <Container
        maxWidth={false} // This removes the maxWidth limitation and makes it full width
        sx={{
          marginTop: "3rem",
          marginBottom: "3rem",
          padding: {
            lg: "0 70px",
            xs: "0 5px",
          },
        }}
      >
        {children}
      </Container>
    </Box>
  );
};

export default PageWrapper;
