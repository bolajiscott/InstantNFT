import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div className="bg-[#F1F2F6] min-h-screen">
      <Navbar />
      <div className="pt-10 px-5 h-[calc(100vh_-_6rem)] overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
