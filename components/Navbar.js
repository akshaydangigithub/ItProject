"use client";
import React, { useState } from "react";
import "@/css/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <nav>
        <div className="row">
          <div className="col-md-7 m-0 p-0 d-flex align-items-center justify-content-md-start justify-content-between ">
            <h4 className="logo">
              <span>S</span>
              <span>O</span>
              <span>F</span>
              <span>T</span>
              <span>S</span>
              <span>E</span>
              <span>E</span>
              <span>K</span>
              <span>E</span>
              <span>R</span>
              <span>S</span>
            </h4>

            <div
              className={`menu mb-2 ${menuOpen ? "" : ""}`}
              onClick={handleMenuClick}
            >
              <div
                className={`line1 ${menuOpen ? "line1_open" : ""} line`}
              ></div>
              <div
                className={`line2 ${menuOpen ? "line2_open" : ""} line`}
              ></div>
            </div>
          </div>
          <div className="col-5 d-md-flex align-items-center justify-content-end d-none ">
            <div className="contact_us d-flex align-items-center justify-content-center overflow-hidden ">
              <h6 className="m-0 p-0">Contact Us</h6>
            </div>
          </div>
        </div>
      </nav>

      <div
        data-scroll
        data-scroll-sticky
        data-scroll-target=".smooth-scroll-gsap"
        className={`menu_list overflow-hidden  ${
          menuOpen ? "menu_list_open" : ""
        }`}
      >
        <div className="row mt-5 pt-md-5 row_nav">
          <div className="col-md-3 d-md-flex ps-md-0 ps-5 align-items-end justify-content-center">
            <ul>
              <li className="fs-5 mb-3">Facebook</li>
              <li className="fs-5 mb-3">YouTube</li>
              <li className="fs-5 mb-3">Blogs</li>
            </ul>
          </div>
          <div className="col-md-7 prt2_nav d-flex flex-column justify-content-end ps-5 mt-5 pt-5 mb-md-0 mb-4">
            <h4>About us</h4>
            <h4>Website Design</h4>
            <h4>Web Development </h4>
            <h4>Website Revamp</h4>
            <h4>Website Maintenance</h4>
            <h4>Ecommerce PSG</h4>
            <h4>Portfolio</h4>
            <h4>Get in Touch</h4>
          </div>
          <div className="col-md-2 d-md-flex d-none align-items-center justify-content-center">
            <h1 className="nav_text_strok">Read Our Blog</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
