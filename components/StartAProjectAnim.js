import React from "react";
import "@/css/section4.css";
import { FaArrowRight } from "react-icons/fa";

const StartAProjectAnim = () => {
  return (
    <div className="row mt-5 py-4 tagline ">
      <div className="col tagline mt-5">
        <h1 className="me-5">Start a Project</h1>
        <h1 className="me-5">Start a Project</h1>
        <h1 className="me-5">Start a Project</h1>
        <h1 className="me-5">Start a Project</h1>
        <h1 className="me-5">Start a Project</h1>
      </div>
      <h6 className="text-white text-center fw-bold mt-4">
        Request for a Quotation{" "}
        <FaArrowRight
          className="ms-2"
          style={{ transform: "rotate(-45deg)" }}
        />
      </h6>
    </div>
  );
};

export default StartAProjectAnim;
