import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        {/* <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} /> */}
      </Route>
    </Routes>
  );
};

export default Router;
