import React, { useEffect, useState } from "react";
import styles from "./Azkar.module.css";

export default function Azkar() {
  const [azkar, setAzkar] = useState([]);

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

  return (
    <>
      <div className="container">
        <div className="row">
          {azkar.map((group) =>
            group.items.map((t) => (
              <div className="col-12 col-md-6 mb-5  px-1 text-center ">
                <div className="d-flex justify-content-center align-items-center bg-secondary">
                  <div key={t.id}>
                    <p>{t.text}</p>

                    <div
                      onClick={() => counterDecrement(t.id)}
                      style={{ width: "300px", backgroundColor: "red" }}
                      className="mx-auto"
                    >
                      {t.count}
                    </div>
                  </div>
                </div>
              </div>
            )),
          )}
        </div>
      </div>
    </>
  );
}
