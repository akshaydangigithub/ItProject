"use client";

import React, { useEffect } from "react";
import "@/css/section4.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const AnimImage = ({ image }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      var animImage = document.querySelector(".animImage");

      function ScrollAnimImage() {
        var tl = gsap.timeline();

        // Create a ScrollTrigger for the first animation
        ScrollTrigger.create({
          trigger: animImage,
          start: "top 100%",
          end: "bottom top",
          scrub: 1,
          // markers: true,
          animation: tl,
        });

        tl.from(".animImage img", {
          transform: "translateY(100%)",
          stagger: 0.1,
          duration: 2,
          ease: "Expo.ease",
          // markers: true,
        });
      }
      ScrollAnimImage();
    }
  }, []);
  return (
    <div className="row animImage">
      <div className="col-md-10">
        <div className="img_container">
          <img src={image} alt="" />
        </div>
      </div>
      <div className="col-md-2"></div>
    </div>
  );
};

export default AnimImage;
