import { Outlet } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";

const DashboardLayout = () => {
  return (
    <div className="flex gap-6">
      <Dashboard />

      <div className="w-full py-8">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
