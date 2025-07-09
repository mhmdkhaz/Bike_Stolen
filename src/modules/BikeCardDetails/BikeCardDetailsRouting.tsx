import { Route, Routes } from "react-router-dom";
import BikeCardDetailsComponent from "./BikeCardDetailsComponent";
import BikeCardDetailsIndex from "./pages/BikeCardDetailsIndex";

const BikeCardDetailsRouting = () => {
  return (
    <Routes>
      <Route element={<BikeCardDetailsComponent />}>
        <Route path="/" element={<BikeCardDetailsIndex />} />
      </Route>
      <Route path="*" element={<p>not found 404</p>} />
    </Routes>
  );
};

export default BikeCardDetailsRouting;
