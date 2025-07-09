import { Route, Routes } from "react-router-dom";
import AllBikesComponent from "./AllBikesComponent";
// import AllBikesIndex from "./components/AllBikes";

const AllBikesRouting = () => {
  return (
    <Routes>
      <Route element={<AllBikesComponent />}>
        {/* <Route path="/" element={<AllBikesIndex />} /> */}
      </Route>
      <Route path="*" element={<p>not found 404</p>} />
    </Routes>
  );
};

export default AllBikesRouting;
