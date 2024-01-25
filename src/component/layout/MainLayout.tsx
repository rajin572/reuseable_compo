import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const MainLayout = () => {
  return (
    <div className="relative">
      <div className="navbar">
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
