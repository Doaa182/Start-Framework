import React from "react";
import heroImg from "../../assets/hero-img.png";
import styles from "./Home.module.css";
import Sharedstar from "../Sharedstar/Sharedstar";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <div className="text-white d-flex justify-content-center align-items-center flex-column my-3">
      <img
        src={heroImg}
        alt="Hero Picture"
        className={`${styles["hero-img"]}`}
      />
      <h1 className="text-capitalize fw-bold mt-4">Start Framework Islamic</h1>
      <Sharedstar bgColor={"#ffffff"} />
      <p className={`${styles["p"]}`}>
        All-in-one app for Azkar, Salah times, and daily Tasbeeh tracking
      </p>
      <Link
        to="/about"
        className={`mb-4 text-decoration-none text-white fw-semibold py-2 px-4 ${styles["tasbeeh-btn"]}`}
      >
        Start Tasbeeh
        <FaArrowRight className={`ms-2 ${styles["arrow-right"]}`} />
      </Link>
    </div>
  );
}
