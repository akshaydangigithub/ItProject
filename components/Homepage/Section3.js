import React from "react";
import "@/css/section3.css";

const Section3 = () => {
  return (
    <>
      <div className="section3 position-relative d-flex align-items-center justify-content-center ">
        <div className="video">
          <video src="./home_video.mp4" autoPlay loop muted></video>
        </div>

        <div className="section3_content">
          <div className="anim_line1">
            <h1>
              <span className="me-5">Avantist</span>
              <span className="me-5">Maison De L'Asie </span>
              <span className="me-5">Second Look</span>
              <span className="me-5">OTO Wellness</span>
              <span className="me-5">PappaRich</span>
            </h1>
          </div>
          <div className="anim_line2">
            <h1>
              <span className="me-5">Reputation Defender</span>
              <span className="me-5">iNOVA Jewellery</span>
              <span className="me-5">Telescope Studio</span>
              <span className="me-5">PrintLab</span>
              <span className="me-5">United Lifestyle</span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;
