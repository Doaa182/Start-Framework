import React from "react";
import { FaStar } from "react-icons/fa";
import styles from "./Sharedstar.module.css";

export default function Sharedstar({ bgColor }) {
  return (
    <div className="d-flex align-items-center justify-content-center my-3">
      <div
        style={{ backgroundColor: bgColor }}
        className={`${styles["line"]}`}
      ></div>
      <div className="mx-3">
        <FaStar fontSize={"18px"} />
      </div>
      <div
        style={{ backgroundColor: bgColor }}
        className={` ${styles["line"]}`}
      ></div>
    </div>
  );
}
