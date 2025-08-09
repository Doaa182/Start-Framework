import React, { useState } from "react";
import styles from "./Contact.module.css";
import Sharedstar from "../Sharedstar/Sharedstar";
import { FaPlus } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    userName: "",
    userAge: "",
    userEmail: "",
    userPassword: "",
  });

  const recordInputChanges = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value);
  };

  return (
    <div
      className={`${styles["text-color"]} d-flex justify-content-center align-items-center flex-column mt-4`}
    >
      <h1 className="text-uppercase fw-bold ">conatct component</h1>
      <Sharedstar bgColor={"#2c3e50"} />

      <form className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-8 px-3 mb-4">
            <div className="position-relative">
              <input
                type="text"
                name="userName"
                id="uName"
                value={formData.userName}
                onChange={recordInputChanges}
                placeholder="User Name"
                className="w-100 rounded border-0 border-bottom p-3"
              />
              {formData.userName.length > 0 ? (
                <label
                  htmlFor="uName"
                  className={`position-absolute opacity-100  ${styles["visible-label"]}`}
                >
                  User Name:
                </label>
              ) : (
                <label
                  htmlFor="uName"
                  className={`position-absolute opacity-0  ${styles["hidden-label"]}`}
                >
                  User Name:
                </label>
              )}
            </div>
          </div>

          <div className="col-12 col-md-8 px-3 mb-4">
            <div className="position-relative">
              <input
                type="number"
                name="userAge"
                id="uAge"
                value={formData.userAge}
                onChange={recordInputChanges}
                placeholder="User Age"
                className="w-100 rounded border-0 border-bottom p-3"
              />
              {formData.userAge.length > 0 ? (
                <label
                  htmlFor="uAge"
                  className={`position-absolute opacity-100  ${styles["visible-label"]}`}
                >
                  User Age:
                </label>
              ) : (
                <label
                  htmlFor="uAge"
                  className={`position-absolute opacity-0  ${styles["hidden-label"]}`}
                >
                  User Age:
                </label>
              )}
            </div>
          </div>

          <div className="col-12 col-md-8 px-3 mb-4">
            <div className="position-relative">
              <input
                type="email"
                name="userEmail"
                id="uEmail"
                value={formData.userEmail}
                onChange={recordInputChanges}
                placeholder="User Email"
                className="w-100 rounded border-0 border-bottom p-3"
              />
              {formData.userEmail.length > 0 ? (
                <label
                  htmlFor="uEmail"
                  className={`position-absolute opacity-100  ${styles["visible-label"]}`}
                >
                  User Email:
                </label>
              ) : (
                <label
                  htmlFor="uEmail"
                  className={`position-absolute opacity-0  ${styles["hidden-label"]}`}
                >
                  User Email:
                </label>
              )}
            </div>
          </div>

          <div className="col-12 col-md-8 px-3 mb-4">
            <div className="position-relative">
              <input
                type="password"
                name="userPassword"
                id="uPassword"
                value={formData.userPassword}
                onChange={recordInputChanges}
                placeholder="User Password"
                className="w-100 rounded border-0 border-bottom p-3"
              />
              {formData.userPassword.length > 0 ? (
                <label
                  htmlFor="uPassword"
                  className={`position-absolute opacity-100  ${styles["visible-label"]}`}
                >
                  User Password:
                </label>
              ) : (
                <label
                  htmlFor="uPassword"
                  className={`position-absolute opacity-0  ${styles["hidden-label"]}`}
                >
                  User Password:
                </label>
              )}
            </div>
          </div>

          <div className="col-12 col-md-8 px-3 mb-4">
            <button className="text-capitalize text-white border-0 py-2 rounded">
              send message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
