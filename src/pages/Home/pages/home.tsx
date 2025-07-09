import { Box } from "@mui/material";
import MainLayout from "../../../layout/MainLayout.js";
import BikeList from "../../../modules/AllBikes/pages/BikesList.js";

const Home = () => {
  return (
    <>
      <MainLayout>
        <Box
          sx={{
            padding: {
              xs: "5px",
              sm: "10px",
            },
          }}
        >
          <BikeList />
        </Box>
      </MainLayout>
    </>
  );
};

export default Home;
