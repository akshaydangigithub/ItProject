"use client";
import Noise from "../../components/Homepage/Noise";
import Mouse from "../../components/Mouse";
import Navbar from "../../components/Navbar";
import React, { useEffect } from "react";
import "../../css/getInTouch.css";
import Footer from "../../components/Footer";
import gsap from "gsap";
import BackToTop from "../../components/BackToTop";

const page = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      var main = document.querySelector(".smooth-scroll-gsap");
      var button = document.querySelector("button");
      var cursor = document.querySelector(".cursor");

      // functio for custom cursor start
      function cursorCustom() {
        main.addEventListener("mousemove", (dets) => {
          gsap.to(cursor, {
            x: dets.clientX,
            y: dets.clientY,
            stagger: -0.1,
          });
        });

        main.addEventListener("mouseenter", () => {
          gsap.to(cursor, {
            scale: 1,
            opacity: 1,
          });
        });

        main.addEventListener("mouseleave", () => {
          gsap.to(cursor, {
            scale: 0,
            opacity: 0,
          });
        });
      }
      cursorCustom();
      // functio for custom cursor end

      // function for cursor active class start
      function cursorActive() {
        button.addEventListener("mouseenter", () => {
          cursor.classList.add("active");
        });

        button.addEventListener("mouseleave", () => {
          cursor.classList.remove("active");
        });
      }
      cursorActive();
    }
  }, []);
  return (
    <div className="smooth-scroll-gsap" style={{ backgroundColor: "#191a1c" }}>
      <Noise />
      <Navbar />
      <BackToTop />

      <div className="global">
        <img src="./globe.png" alt="" />
      </div>

      <div className="row m-0 getInTouch">
        <h1>
          We'd love to <br />
          hear from you
        </h1>
        <div className="row image_row">
          <div className="col-md-4 mb-md-0 mb-4 d-flex align-items-center">
            <img height={60} src="./map.png" alt="" />
            <h6 className="ms-2 m-0">
              92 Kaki Bukit Industrial Terrace Singapore - 416171
            </h6>
          </div>
          <div className="col-md-4 mb-md-0 mb-4 d-flex align-items-center">
            <img height={60} src="./phone.png" alt="" />
            <h6 className="ms-2 m-0">
              Phone: 67441123, 91717707 Fax: 67483022
            </h6>
          </div>
          <div className="col-md-4 mb-md-0 mb-4 d-flex align-items-center">
            <img height={60} src="./mail.png" alt="" />
            <h6 className="ms-2 m-0">
              Inquiries: mark@aidentity.sg Projects: sales@aidentity.sg
            </h6>
          </div>
        </div>

        <div className="row input_row ">
          <h3>
            Whether you're looking to discuss a new project or simply say hello,{" "}
            <br />
            we'd love to hear from you.
          </h3>

          <div className="row">
            <div className="col-md-4 mt-5">
              <input type="text" placeholder="Your Name" />
            </div>
            <div className="col-md-4 mt-5">
              <input type="text" placeholder="Your Email" />
            </div>
            <div className="col-md-4 mt-5">
              <input type="text" placeholder="Your Phone" />
            </div>
          </div>
          <div className="row mt-5 ps-4 pe-5">
            <textarea placeholder="Enter Your Message Here" />
          </div>
          <div className="row mt-5 ps-3">
            <div className="col">
              <button>Send Message</button>
            </div>
          </div>
        </div>
      </div>

      <div className="cursor">
        <div className="dot"></div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
