import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/pages/home";

const AppRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default AppRouting;
