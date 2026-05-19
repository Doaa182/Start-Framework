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
          className={`text-decoration-none text-capitalize text-white fw-bold ${styles["navbar-brand"]}`}
          to=""
        >
          Start Framework
          <span className="fs-6 "> (Islamic Edition)</span>
        </Link>

        <button
          className={`${styles["toggler"]} navbar-toggler p-0 `}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse mt-3"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <li className="nav-item ">
              <NavLink
                className={({ isActive }) =>
                  `nav-link text-capitalize text-white px-3 py-2 rounded fw-bold me-3 ${
                    isActive ? "active" : ""
                  }`
                }
                aria-current="page"
                to="tasbeeh"
              >
                Tasbeeh
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link text-capitalize text-white   px-3 py-2 rounded fw-bold me-3 ${
                    isActive ? "active" : ""
                  }`
                }
                to="azkar"
              >
                Azkar
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link text-capitalize text-white  px-3 py-2 rounded  fw-bold me-3 ${
                    isActive ? "active" : ""
                  }`
                }
                to="prayertimes"
              >
                Prayer Times
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
