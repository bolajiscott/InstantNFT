import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div className="bg-[#051C2C] min-h-screen">
      <Navbar></Navbar>
      <div className="pt-10 px-5">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default Layout;
