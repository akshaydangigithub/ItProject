"use client";

import Hero from "@/components/Homepage/Hero";
import Noise from "@/components/Homepage/Noise";
import Section2 from "@/components/Homepage/Section2";
import Section3 from "@/components/Homepage/Section3";
import Navbar from "@/components/Navbar";
import React, { useEffect } from "react";
import Section4 from "@/components/Homepage/Section4";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";

// ... (your previous imports)

const Page = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("gsap").then((gsapModule) => {
        import("gsap/ScrollTrigger").then((scrollTriggerModule) => {
          const gsap = gsapModule.default || gsapModule;
          const ScrollTrigger =
            scrollTriggerModule.default || scrollTriggerModule;

          gsap.registerPlugin(ScrollTrigger);

          // Dynamic import for LocomotiveScroll
          import("locomotive-scroll").then((LocomotiveScrollModule) => {
            const LocomotiveScroll =
              LocomotiveScrollModule.default || LocomotiveScrollModule;

            const locoScroll = new LocomotiveScroll({
              el: document.querySelector(".smooth-scroll-gsap"),
              smooth: true,
            });

            // Setup ScrollTrigger scrollerProxy
            ScrollTrigger.scrollerProxy(".smooth-scroll-gsap", {
              scrollTop(value) {
                return arguments.length
                  ? locoScroll.scrollTo(value, 0, 0)
                  : locoScroll.scroll.instance.scroll.y;
              },
              getBoundingClientRect() {
                return {
                  top: 0,
                  left: 0,
                  width: window.innerWidth,
                  height: window.innerHeight,
                };
              },
              pinType: document.querySelector(".smooth-scroll-gsap").style
                .transform
                ? "transform"
                : "fixed",
            });

            locoScroll.on("scroll", (e) => {
              ScrollTrigger.update();
            });

            var main = document.querySelector(".smooth-scroll-gsap");
            var menu = document.querySelector(".menu");
            var cursor = document.querySelector(".cursor");
            var conatct_us_btn = document.querySelector(".contact_us");
            var learn_more_btn = document.querySelector(".learn_more_btn");
            var start_project_btn =
              document.querySelector(".start_project_btn");
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

            // function for section4 animation start
            function section4Animation() {
              var tl = gsap.timeline();

              tl.from(".anim_line1 h1", {
                scrollTrigger: {
                  trigger: section3,
                  scroller: main,
                  start: "top 100%",
                  end: "bottom top",
                  scrub: 1,
                  // markers: true,
                },
                transform: "translateX(100%)",
                stagger: 0.1,
                duration: 2,
                ease: "Expo.ease",
              });

              tl.from(".anim_line2 h1", {
                scrollTrigger: {
                  trigger: section3,
                  scroller: main,
                  start: "top 100%",
                  end: "bottom top",
                  scrub: 1,
                  // markers: true,
                },
                transform: "translateX(-100%)",
                stagger: 0.1,
                duration: 2,
                ease: "Expo.ease",
              });
            }
            section4Animation();
            // function for section4 animation end

            // Function for loader animation start
            function loaderAnimation() {
              var loaderNumber = document.querySelector(".loader_progress");
              var loaderPercentage = document.querySelector(
                ".loader_progress_percentage"
              );
              var loaderPage = document.querySelector(".loader");

              gsap.to(loaderNumber, {
                innerHTML: "100 %",
                duration: 3,
                ease: "Power4.easeOut",
                roundProps: { innerHTML: 1 },
                onComplete: function () {
                  gsap.to([loaderNumber, loaderPercentage], {
                    transform: "translateY(-100%)",
                    ease: "Expo.ease",
                    duration: 0.5,
                  });
                },
              });

              gsap.to(loaderPage, {
                height: 0,
                duration: 0.5,
                delay: 4,
              });
            }

            loaderAnimation();

            // function for animate navbar start
            function animateNavbar() {
              gsap.set(".logo", { opacity: 0, scale: 0 });
              gsap.set(".contact_us", { opacity: 0, scale: 0 });

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

            ScrollTrigger.addEventListener("refresh", () => {
              locoScroll.update();
              ScrollTrigger.update();
            });

            ScrollTrigger.refresh();
          });
        });
      });
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
        <Section3 />
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
