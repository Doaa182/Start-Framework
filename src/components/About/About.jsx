import React from "react";
import Sharedstar from "../Sharedstar/Sharedstar";

export default function About() {
  return (
    <div className="text-white d-flex justify-content-center align-items-center flex-column p-5 my-5">
      <h1 className="text-uppercase fw-bold ">about component</h1>
      <Sharedstar bgColor={"#ffffff"} />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div>
              <p className="ps-md-5 pe-md-4">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div>
              <p className="ps-md-4 pe-md-5">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
