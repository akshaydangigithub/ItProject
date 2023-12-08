import React from "react";
import "@/css/loader.css";

const Loader = () => {
  return (
    <>
      <div
        data-scroll
        data-scroll-sticky
        data-scroll-target=".smooth-scroll-gsap"
        className="loader d-flex align-items-end ps-4"
      >
        <div className="loader_progress_main">
          <h1 className="loader_progress">56</h1>
          <span className="loader_progress_percentage">%</span>
        </div>
      </div>
    </>
  );
};

export default Loader;
