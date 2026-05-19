import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./../Footer/Footer";
import Navbar from "./../Navbar/Navbar";

export default function Layout() {
  let location = useLocation();
  console.log(location);

  let bgColorOf = {
    "/": "#1ABC9C",
    "/about": "#1ABC9C",
    "/tasbeeh": "#1ABC9C",
    "/portfolio": "#ffffff",
    "/contact": "#ffffff",
    "/azkar": "#1ABC9C",
  };

  let bgColor = bgColorOf[location.pathname];

  return (
    <div
      style={{
        backgroundColor: bgColor,
        paddingTop: "130px",
      }}
    >
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
