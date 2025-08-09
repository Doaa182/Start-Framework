import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <nav
      className={`navbar navbar-expand-lg position-fixed top-0 w-100 ${styles["nav-bg"]}`}
      style={{ padding: isScrolled == true ? "8px" : "23px" }}
    >
      <div className="container">
        <Link
          className="navbar-brand text-uppercase text-white fs-2 fw-bold"
          to=""
        >
          start framework
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <li className="nav-item ">
              <NavLink
                className={({ isActive }) =>
                  `nav-link text-uppercase text-white px-3 py-2 rounded fw-bold ${
                    isActive ? "active" : ""
                  }`
                }
                aria-current="page"
                to="about"
              >
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link text-uppercase text-white   px-3 py-2 rounded fw-bold ${
                    isActive ? "active" : ""
                  }`
                }
                to="portfolio"
              >
                Portfolio
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link text-uppercase text-white  px-3 py-2 rounded  fw-bold ${
                    isActive ? "active" : ""
                  }`
                }
                to="contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
