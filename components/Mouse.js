"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Mouse = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      var main = document.querySelector(".smooth-scroll-gsap");
      var menu = document.querySelector(".menu");
      var cursor = document.querySelector(".cursor");
      var conatct_us_btn = document.querySelector(".contact_us");
      var learn_more_btn = document.querySelector(".learn_more_btn");
      var start_project_btn = document.querySelector(".start_project_btn");
      var tagline = document.querySelector(".tagline");
      var li_s = document.querySelectorAll("ul li");

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
        // cursor active code for menu
        menu.addEventListener("mouseenter", () => {
          cursor.classList.add("active");
        });

        menu.addEventListener("mouseleave", () => {
          cursor.classList.remove("active");
        });

        // cursor active code for contact us button
        conatct_us_btn.addEventListener("mouseenter", () => {
          cursor.classList.add("active");
        });

        conatct_us_btn.addEventListener("mouseleave", () => {
          cursor.classList.remove("active");
        });

        // cursor active code for learn more button
        learn_more_btn.addEventListener("mouseenter", () => {
          cursor.classList.add("active");
        });

        learn_more_btn.addEventListener("mouseleave", () => {
          cursor.classList.remove("active");
        });

        // cursor active code for start project button
        start_project_btn.addEventListener("mouseenter", () => {
          cursor.classList.add("active");
        });

        start_project_btn.addEventListener("mouseleave", () => {
          cursor.classList.remove("active");
        });

        // cursor active code for tagline h1
        tagline.addEventListener("mouseenter", () => {
          cursor.classList.add("active");
        });

        tagline.addEventListener("mouseleave", () => {
          cursor.classList.remove("active");
        });

        // cursor active code for li
        li_s.forEach((li) => {
          li.addEventListener("mouseenter", () => {
            cursor.classList.add("active");
          });

          li.addEventListener("mouseleave", () => {
            cursor.classList.remove("active");
          });
        });
      }
      cursorActive();
      // function for cursor active class end
    }
  }, []);
  return (
    <div className="cursor">
      <div className="dot"></div>
    </div>
  );
};

export default Mouse;
