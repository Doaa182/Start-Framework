import React, { useState } from "react";
import styles from "./Portfolio.module.css";
import Sharedstar from "../Sharedstar/Sharedstar";
import { FaPlus } from "react-icons/fa";

export default function Portfolio() {
  const imgs = Object.values(
    import.meta.glob("../../assets/portfolio-cards/*.png", {
      as: "url",
      eager: true,
    })
  );

  const imgWithId = imgs.map((imgSrc) => {
    return { id: crypto.randomUUID(), src: imgSrc };
  });

  const [openModal, setOpenModal] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div
      className={`${styles["text-color"]} d-flex justify-content-center align-items-center flex-column mt-4`}
    >
      <h1 className="text-uppercase fw-bold ">portfolio component</h1>
      <Sharedstar bgColor={"#2c3e50"} />
      <div className="container">
        <div className="row justify-content-center align-items-center">
          {imgWithId.map((item) => (
            <div className="col-12 col-md-6 col-lg-4  px-3 mb-5">
              <div
                className={`position-relative ${styles["img-wrapper"]}`}
                onClick={() => {
                  setOpenModal(true);
                  setSelectedImg(item.src);
                }}
              >
                <img
                  src={item.src}
                  alt="card img"
                  className="rounded w-100  gap-4 "
                />

                <div
                  className={`position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center rounded ${styles["img-layer"]} `}
                >
                  <FaPlus size={"100px"} color="white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {openModal ? (
        <div
          className={`${styles["modal-bg"]} d-flex justify-content-center align-items-center position-fixed top-0 bottom-0 start-0 end-0 `}
          onClick={() => setOpenModal(false)}
        >
          <img src={selectedImg} alt="" onClick={(e) => e.stopPropagation()} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
