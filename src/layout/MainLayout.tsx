import { Box } from "@mui/material";
import Header from "../components/layout/Header/Header";
import ContentWrapper from "../components/styled/ContentWrapper";
import PageWrapper from "../components/styled/PageWrapper";

const MainLayout = ({ headerComponent, children }: any) => {
  return (
    <>
      <Header />
      <PageWrapper>
        {headerComponent && headerComponent}

        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <ContentWrapper>{children}</ContentWrapper>
        </Box>
      </PageWrapper>
    </>
  );
};

export default MainLayout;
