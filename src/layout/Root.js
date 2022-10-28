import React from "react";
import "./Root.css";
import { Outlet } from "react-router-dom";
import Header from "../pages/shared/Header/Header";
import SideNav from "../pages/sideNav/SideNav";
import Footer from "../pages/shared/Footer/Footer";

const Root = () => {
  return (
    <body className="bg-gray-400">
      <Header />
      <main className="main-container">
        <div className="main-element">
          <Outlet />
        </div>
        <div className="sidenav lg:block hidden">
          <SideNav />
        </div>
      </main>
      <Footer />
    </body>
  );
};

export default Root;
