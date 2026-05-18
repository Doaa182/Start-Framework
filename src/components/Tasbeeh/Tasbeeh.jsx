import React, { useEffect, useState } from "react";
import styles from "./Tasbeeh.module.css";

export default function Tasbeeh() {
  const [tasbeeh, setTasbeeh] = useState([]);

  useEffect(() => {
    fetch("/data/tasbeeh.json")
      .then((res) => res.json())
      .then((data) => setTasbeeh(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          {tasbeeh.map((t) => (
            <div className="col-12 col-md-6 col-lg-4 mb-5 ">
              <div className="d-flex justify-content-center align-items-center">
                <div key={t.id} className={`${styles["tasbeeh-shape"]}`}>
                  <p className={`${styles["tasbeeh-txt"]}`}>{t.text}</p>
                  <div className={`${styles["screen"]}`}>
                    <span>{t.count}</span>
                  </div>
                  <div className={`${styles["reset-btn"]}`}></div>
                  <div className={`${styles["counter-btn"]}`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
