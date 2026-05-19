import React, { useEffect, useState } from "react";
import Sharedstar from "../Sharedstar/Sharedstar";
import styles from "./Azkar.module.css";

export default function Azkar() {
  const [azkar, setAzkar] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedGroupId, setSelectedGroupId] = useState(null);

  useEffect(() => {
    fetch("/data/azkar.json")
      .then((res) => res.json())
      .then((data) =>
        setAzkar(
          data.map((group) => ({
            ...group,
            items: group.items.map((item) => ({
              ...item,
              count: item.count,
            })),
          })),
        ),
      )
      .catch((err) => console.log("Azkar Err: ", err));
  }, []);

  const counterDecrement = (id) => {
    setAzkar((prevData) =>
      prevData.map((group) => ({
        ...group,
        items: group.items.map((item) =>
          item.id === id
            ? { ...item, count: item.count > 0 ? item.count - 1 : 0 }
            : item,
        ),
      })),
    );
  };

  const selectedGroup = azkar.find((group) => group.id === selectedGroupId);

  return (
    <>
      <h2 className="text-center  fw-bold">أذكار</h2>
      <Sharedstar bgColor={"#2c3e50"} />
      <div className="container mt-5">
        <div className="row">
          {azkar.map((group) => (
            <div key={group.id} className="col-12 col-md-6 col-lg-6 mb-5">
              <div
                className={`${styles["card"]} p-5 text-center shadow text-white`}
                onClick={() => {
                  setOpenModal(true);
                  setSelectedGroupId(group.id);
                }}
              >
                <h3 className="fw-bold">{group.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {openModal && selectedGroup && (
        <div
          className={`${styles["modal-bg"]} position-fixed top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center`}
          onClick={() => setOpenModal(false)}
        >
          <div
            className={`bg-white p-4 rounded w-75 ${styles["modal-style"]}`}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-center mb-4 fw-bold ">{selectedGroup.title}</h2>

            {selectedGroup.items.map((item) => (
              <div key={item.id} className="border rounded p-3 mb-3 text-end">
                <p className="fs-5">{item.text}</p>

                <div className="text-center">
                  <button
                    className={`${styles["btn"]} border rounded fw-bold`}
                    onClick={() => counterDecrement(item.id)}
                  >
                    {item.count}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
