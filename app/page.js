"use client";

import Hero from "@/components/Homepage/Hero";
import Noise from "@/components/Homepage/Noise";
import Section2 from "@/components/Homepage/Section2";
import Section3 from "@/components/Homepage/ScrollAnim";
import Navbar from "@/components/Navbar";
import React, { useEffect } from "react";
import Section4 from "@/components/Homepage/Section4";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Page = () => {
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
      var section3 = document.querySelector(".section3");

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

      // Function for loader animation start
      function loaderAnimation() {
        // var loaderNumber = document.querySelector(".loader_progress");
        // var loaderPercentage = document.querySelector(
          // ".loader_progress_percentage"
        // );
        var loaderPage = document.querySelector(".loader");

        // gsap.to(loaderNumber, {
        //   innerHTML: "100 %",
        //   duration: 3,
        //   ease: "Power4.easeOut",
        //   roundProps: { innerHTML: 1 },
        //   onComplete: function () {
        //     gsap.to([loaderNumber, loaderPercentage], {
        //       transform: "translateY(-100%)",
        //       ease: "Expo.ease",
        //       duration: 0.5,
        //     });
        //   },
        // });

        gsap.to(loaderPage, {
          height: 0,
          duration: 0.5,
          delay: 4,
        });
      }

      loaderAnimation();

      // function for animate homePage start
      function animateHomePage() {
        gsap.set(".translate_text_child", {
          transform: "translateY(120%)",
        });
        // gsap.set(".learn_more_btn", { scale: 0, opacity: 0 });

        var hompageTl = gsap.timeline();

        hompageTl.to(".translate_text_child", {
          transform: "translateY(0%)",
          stagger: 0.1,
          duration: 1,
          delay: 4.3,
          ease: "Power4.easeOut",
        });

        hompageTl.to(
          ".learn_more_btn",
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: "Power4.easeOut",
          },
          "-=.5"
        );
      }
      animateHomePage();
      // function for animate homePage end
    }
  }, []);

  return (
    <>
      <div className="smooth-scroll-gsap">
        <Noise />
        <Loader />
        <Navbar />
        <Hero />
        <Section2 />
        <Section3
          bgcolor={"#090c0f"}
          text1={"Avantist"}
          text2={"Maison De L'Asie"}
          text3={"Second Look"}
          text4={"OTO Wellness"}
          text5={"PappaRich"}
          text6={"Reputation Defender"}
          text7={"iNOVA Jewellery"}
          text8={"Telescope Studio"}
          text9={"PrintLab"}
          text10={"United Lifestyle."}
          srcLink={"/home_video.mp4"}
        />
        <Section4 />
        <Footer />
      </div>

      <div className="cursor">
        <div className="dot"></div>
      </div>
    </>
  );
};

export default Page;
