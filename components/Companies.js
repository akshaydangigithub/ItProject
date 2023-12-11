import React from "react";
import "@/css/section4.css";

const Companies = () => {
  return (
    <div className="row mt-5 px-5 d-md-flex d-none">
      <div className="col-2 mt-5 d-flex align-items-center justify-content-center">
        <img height={130} src="./singapore_airline.png" alt="" />
      </div>
      <div className="col-2 mt-5 d-flex align-items-center justify-content-center">
        <img height={130} src="./singtel.png" alt="" />
      </div>
      <div className="col-2 mt-5 d-flex align-items-center justify-content-center">
        <img height={130} src="./nus.png" alt="" />
      </div>
      <div className="col-2 mt-5 d-flex align-items-center justify-content-center">
        <img height={130} src="./standard-chartered.png" alt="" />
      </div>
      <div className="col-2 mt-5 d-flex align-items-center justify-content-center">
        <img height={130} src="./samsung.png" alt="" />
      </div>
      <div className="col-2 mt-5 d-flex align-items-center justify-content-center">
        <img height={130} src="./sysmex.png" alt="" />
      </div>
    </div>
  );
};

export default Companies;
