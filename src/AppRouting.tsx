import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/pages/home";
import React from "react";
import Loader from "./components/shared/Loader";
import BikeCardDetailsRouting from "./modules/BikeCardDetails/BikeCardDetailsRouting";

const AppRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/bikes/:id/*"
        element={
          <React.Suspense fallback={<Loader />}>
            <BikeCardDetailsRouting />
          </React.Suspense>
        }
      />
    </Routes>
  );
};

export default AppRouting;
