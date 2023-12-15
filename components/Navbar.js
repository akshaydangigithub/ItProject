"use client";
import React, { useEffect, useState } from "react";
import "@/css/navbar.css";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      // function for animate navbar start
      function animateNavbar() {
        gsap.set(".logo", { opacity: 0, scale: 0 });
        gsap.set(".contact_us", { opacity: 0, scale: 0 });
        gsap.set(".line", { opacity: 0, scale: 0 });

        var navbarTl = gsap.timeline();

        navbarTl.to(".logo", {
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: 1,
          ease: "Power4.easeOut",
        });

        navbarTl.to(".line", {
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: -0.7,
          stagger: 0.1,
          ease: "Power4.easeOut",
        });

        navbarTl.to(".contact_us", {
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.1,
          ease: "Power4.easeOut",
        });
      }
      animateNavbar();
      // function for animate navbar end
    }
  }, []);
  return (
    <>
      <nav>
        <div className="row">
          <div className="col-md-7 m-0 p-0 d-flex align-items-center justify-content-md-start justify-content-between ">
            <Link href="/">
              {/* <h4 className="logo">
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
              </h4> */}
              <img height={200} className="logo" src="./logo.png" alt="" />
            </Link>

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
            <Link className="text-decoration-none" href="/aboutUs">
              <h3>About us</h3>
            </Link>
            <Link className="text-decoration-none" href="/webDesign">
              <h3>Website Design</h3>
            </Link>
            <Link className="text-decoration-none" href="/webDevelopment">
              <h3>Web Development </h3>
            </Link>
            <Link className="text-decoration-none" href="/websiteRevamp">
              <h3>Website Revamp</h3>
            </Link>

            <Link className="text-decoration-none" href="/websiteMaintenance">
              <h3>Website Maintenance</h3>
            </Link>

            <Link className="text-decoration-none" href="/ecommerce">
              <h3>Ecommerce PSG</h3>
            </Link>

            <Link className="text-decoration-none" href="/portfolio">
              <h3>Portfolio</h3>
            </Link>

            <Link className="text-decoration-none" href="/getinTouch">
              <h3>Get in Touch</h3>
            </Link>
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
