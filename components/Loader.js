import React from "react";
import "../css/loader.css";

const Loader = () => {
  return (
    <>
      <div className="loader d-flex align-items-end ps-4">
        {/* <div className="loader_progress_main">
          <h1 className="loader_progress">56</h1>
          <span className="loader_progress_percentage">%</span>
        </div> */}

        <img style={{top:"50%", left:"50%", transform:"translate(-50%,-50%)"}} className="position-absolute" src="./loader.gif" alt="" />
      </div>
    </>
  );
};

export default Loader;
