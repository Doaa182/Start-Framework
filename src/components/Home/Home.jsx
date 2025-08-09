import React from "react";
import homeImg from "../../assets/home-img.svg";
import styles from "./Home.module.css";
import Sharedstar from "../Sharedstar/Sharedstar";

export default function Home() {
  return (
    <div className="text-white d-flex justify-content-center align-items-center flex-column my-3">
      <img src={homeImg} alt="Hero Picture" />
      <h1 className="text-uppercase fw-bold mt-5">Start Framework</h1>
      <Sharedstar bgColor={"#ffffff"}  />
      <p>Graphic Artist - Web Designer - Illustrator</p>
    </div>
  );
}
