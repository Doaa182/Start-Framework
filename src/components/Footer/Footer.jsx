import React from "react";
import styles from "./Footer.module.css";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";

export default function Footer() {
  return (
    // <>
    //   <div
    //     className={`upper-footer container-fluid p-5 ${styles["foot-up-bg"]}`}
    //   >
    //     <div className="row text-center text-white">
    //       <div className="col-12 col-md-4 my-5">
    //         <div>
    //           <p className="fs-3 fw-medium mb-2">LOCATION</p>
    //           <p>2215 John Daniel Drive</p>
    //           <p>Clark, MO 65243</p>
    //         </div>
    //       </div>

    //       <div className="col-12 col-md-4 my-5">
    //         <div>
    //           <p className="fs-3 fw-medium mb-2">AROUND THE WEB</p>
    //           <ul className="list-unstyled d-flex justify-content-center align-items-center gap-4">
    //             <li className="position-relative">
    //               <FaFacebook fontSize={"18px"} />
    //             </li>

    //             <li className="position-relative">
    //               <FaTwitter fontSize={"18px"} />
    //             </li>

    //             <li className="position-relative">
    //               <FaLinkedinIn fontSize={"18px"} />
    //             </li>

    //             <li className="position-relative">
    //               <TfiWorld fontSize={"18px"} />
    //             </li>
    //           </ul>
    //         </div>
    //       </div>

    //       <div className="col-12 col-md-4 my-5">
    //         <div>
    //           <p className="fs-3 fw-medium mb-2">ABOUT FREELANCER</p>
    //           <p className="px-5 px-md-1 ">
    //             Freelance is a free to use, licensed Bootstrap theme created by
    //             Route
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div
    //     className={`lower-footer container-fluid py-4 ${styles["foot-down-bg"]}`}
    //   >
    //     <div className="row text-white text-center">
    //       <div className="col-12">
    //         <div>
    //           <p className="m-0 p-0">Copyright © Your Website 2021</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
    <>
      <div
        className={` upper-footer container-fluid p-5 ${styles["foot-up-bg"]}`}
      >
        <div className="row text-center text-white">
          <div className="col-12 col-md-4 my-5 ">
            <div>
              <p className="fs-3 fw-medium mb-2">Start Framework Islamic</p>
              <p>
                Azkar, Salah times, and Tasbeeh — all in one place Build
                consistency in your daily spiritual routine
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4 my-5">
            <div>
              <p className="fs-3 fw-medium mb-2 ">Follow Us</p>
              <ul className="list-unstyled d-flex justify-content-center align-items-center gap-4">
                <li className="position-relative">
                  <FaFacebook fontSize={"18px"} />
                </li>

                <li className="position-relative">
                  <FaTwitter fontSize={"18px"} />
                </li>

                <li className="position-relative">
                  <FaLinkedinIn fontSize={"18px"} />
                </li>

                <li className="position-relative">
                  <TfiWorld fontSize={"18px"} />
                </li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-md-4 my-5">
            <div>
              <p className="fs-3 fw-medium mb-2">About This App</p>
              <p>
                Built with React, Bootstrap, and ❤️ for learning and practicing
                frontend development.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`lower-footer container-fluid py-4 ${styles["foot-down-bg"]}`}
      >
        <div className="row text-white text-center">
          <div className="col-12">
            <div>
              <p className="m-0 p-0">
                © {new Date().getFullYear()} Start Framework Islamic | All
                Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
