import React from "react";
import Sidebar from "./ui/Sidebar";
import DashboardHeader from "./ui/DashboardHeader";
import TotalVendor from "./ui/TotalVendor";
import { Outlet } from "react-router-dom";
import AppRoute from "../Routes/AppRoute";

function Dashboard() {
  return (
    <div className="grid grid-cols-1">
      <DashboardHeader />
      <div className="flex gap-3">
        <div className="flex-none">
          <Sidebar />
        </div>
        <div className="flex-1">
              <Outlet/>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
