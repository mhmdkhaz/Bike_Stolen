import { Route, Routes } from "react-router-dom";
import BikeCardComponent from "./BikeCardComponent";
import BikeCardIndex from "./pages/BikeCardIndex";

const BikeCardRouting = () => {
  return (
    <Routes>
      <Route element={<BikeCardComponent />}>
        <Route path="/" element={<BikeCardIndex />} />
      </Route>
      <Route path="*" element={<p>not found 404</p>} />
    </Routes>
  );
};

export default BikeCardRouting;
