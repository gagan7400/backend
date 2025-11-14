import React from "react";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div className="flex min-h-screen">
      <h1>hello</h1>
      <Sidebar />
      <main className="flex-1 bg-[#fff9e6] p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default Dashboard;
