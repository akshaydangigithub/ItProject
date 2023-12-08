import React from "react";
import "@/css/hero.css";
import { IoMdArrowRoundDown } from "react-icons/io";

const Hero = () => {
  return (
    <>
      <div className="hero position-relative overflow-hidden ">
        <video src="./home_video.mp4" autoPlay loop muted></video>
        <div className="hero-content position-relative d-flex justify-content-center flex-column">
          <span className="translate_text_parent">
            <h3 className="translate_text_child">We turn ideas into</h3>
          </span>
          <span className="translate_text_parent">
            {" "}
            <h1 className="translate_text_child">websites</h1>
          </span>
          <div className="learn_more_btn d-flex align-items-center justify-content-center flex-column overflow-hidden ">
            <h6 className="h6Text ">Learn More</h6>
            <IoMdArrowRoundDown className="hero_Down_Arrow" />
          </div>
          <div className="text">
            <p className="m-0">
              Established in the year 2011, Aidentity is a leading web design &
              development company in Singapore delivering creative and
              award-wining websites for years.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
