"use client";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "../../components/Navbar";
import Noise from "../../components/Homepage/Noise";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import "../../css/portfolio.css";
import { FaAnglesRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

// import required modules
import { EffectCreative } from "swiper/modules";

const page = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      var main = document.querySelector(".smooth-scroll-gsap");
      var menu = document.querySelector(".menu");
      var cursor = document.querySelector(".cursor");
      var conatct_us_btn = document.querySelector(".contact_us");

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
      }
      cursorActive();
      // function for cursor active class end
    }
  }, []);

  const [activeSlide, setActiveSlide] = useState(1);

  const swiperRef = useRef(null);

  const IncreaseSlide = () => {
    if (activeSlide < 7 && swiperRef.current) {
      swiperRef.current.slideTo(activeSlide);
      setActiveSlide((prevSlide) => prevSlide + 1);
    }
  };

  const DecreaseSlide = () => {
    if (activeSlide > 1 && swiperRef.current) {
      swiperRef.current.slideTo(activeSlide - 2);
      setActiveSlide((prevSlide) => prevSlide - 1);
    }
  };

  return (
    <>
      <div
        className="smooth-scroll-gsap"
        style={{ backgroundColor: "#191a1c" }}
      >
        <Noise />
        <Navbar />

        <div className="portfolio">
          <div className="row m-0 portfolio_row">
            <div className="col-7 m-0 portfolio_left">
              <div className="row m-0">
                <div className="col-2 m-0 d-md-block d-none">
                  <motion.h6
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    onClick={() => {
                      setActiveSlide(1);
                      swiperRef.current.slideTo(0);
                    }}
                    className={`fw-bold ${activeSlide === 1 ? "" : "ms-3"}`}
                    style={{
                      fontSize: 13,
                      marginBottom: 35,
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                    }}
                  >
                    01
                  </motion.h6>
                  <motion.h6
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.45 }}
                    viewport={{ once: true }}
                    onClick={() => {
                      setActiveSlide(2);
                      swiperRef.current.slideTo(1);
                    }}
                    className={`fw-bold ${activeSlide === 2 ? "" : "ms-3"}`}
                    style={{
                      fontSize: 13,
                      marginBottom: 35,
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                    }}
                  >
                    02
                  </motion.h6>
                  <motion.h6
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    onClick={() => {
                      setActiveSlide(3);
                      swiperRef.current.slideTo(2);
                    }}
                    className={`fw-bold ${activeSlide === 3 ? "" : "ms-3"}`}
                    style={{
                      fontSize: 13,
                      marginBottom: 35,
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                    }}
                  >
                    03
                  </motion.h6>
                  <motion.h6
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.55 }}
                    viewport={{ once: true }}
                    onClick={() => {
                      setActiveSlide(4);
                      swiperRef.current.slideTo(3);
                    }}
                    className={`fw-bold ${activeSlide === 4 ? "" : "ms-3"}`}
                    style={{
                      fontSize: 13,
                      marginBottom: 35,
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                    }}
                  >
                    04
                  </motion.h6>
                  <motion.h6
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                    onClick={() => {
                      setActiveSlide(5);
                      swiperRef.current.slideTo(4);
                    }}
                    className={`fw-bold ${activeSlide === 5 ? "" : "ms-3"}`}
                    style={{
                      fontSize: 13,
                      marginBottom: 35,
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                    }}
                  >
                    05
                  </motion.h6>
                  <motion.h6
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                    onClick={() => {
                      setActiveSlide(6);
                      swiperRef.current.slideTo(5);
                    }}
                    className={`fw-bold ${activeSlide === 6 ? "" : "ms-3"}`}
                    style={{
                      fontSize: 13,
                      marginBottom: 35,
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                    }}
                  >
                    06
                  </motion.h6>
                  <motion.h6
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.65 }}
                    viewport={{ once: true }}
                    onClick={() => {
                      setActiveSlide(7);
                      swiperRef.current.slideTo(6);
                    }}
                    className={`fw-bold ${activeSlide === 7 ? "" : "ms-3"}`}
                    style={{
                      fontSize: 13,
                      marginBottom: 35,
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                    }}
                  >
                    07
                  </motion.h6>
                </div>
                <div className="col-10">
                  {activeSlide === 1 ? (
                    <div>
                      {" "}
                      <h4 className="fw-bold text-secondary">
                        <motion.span
                          initial={{ transform: "translateY(100%)" }}
                          whileInView={{ transform: "translateY(0%)" }}
                          transition={{ duration: 0.5 }}
                        >
                          Website Design & Development
                        </motion.span>
                      </h4>
                      <h1 className="fw-bold mt-4">
                        <motion.span
                          initial={{ transform: "translateY(100%)" }}
                          whileInView={{ transform: "translateY(0%)" }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                        >
                          Defend
                        </motion.span>
                      </h1>
                      <h1 className="fw-bold">
                        <motion.span
                          initial={{ transform: "translateY(100%)" }}
                          whileInView={{ transform: "translateY(0%)" }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          Reputation
                        </motion.span>
                      </h1>
                      <div className="d-flex mt-4 align-items-center justify-content-between pe-4">
                        <div>
                          <p className="m-0 text-secondary fw-bold">
                            <motion.span
                              initial={{ transform: "translateY(100%)" }}
                              whileInView={{ transform: "translateY(0%)" }}
                              transition={{ duration: 0.5, delay: 0.3 }}
                            >
                              This is a web design project which was
                            </motion.span>
                          </p>
                          <p className="m-0 mt-1 text-secondary fw-bold">
                            <motion.span
                              initial={{ transform: "translateY(100%)" }}
                              whileInView={{ transform: "translateY(0%)" }}
                              transition={{ duration: 0.5, delay: 0.34 }}
                            >
                              designed and developed for our
                            </motion.span>
                          </p>
                          <p className="m-0 mt-1 text-secondary fw-bold">
                            <motion.span
                              initial={{ transform: "translateY(100%)" }}
                              whileInView={{ transform: "translateY(0%)" }}
                              transition={{ duration: 0.5, delay: 0.39 }}
                            >
                              honorable client in Singapore.
                            </motion.span>
                          </p>
                        </div>
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.6 }}
                          viewport={{ once: true }}
                          className="visit_website_btn d-md-flex d-none  align-items-center justify-content-center flex-column overflow-hidden"
                        >
                          <h6 className="visit_website_btn_h6Text ">
                            Visit Website
                          </h6>
                          <FaAnglesRight className="visit_website_btn_right_arrow" />
                        </motion.div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {activeSlide === 2 ? (
                    <div>
                      {" "}
                      <h4 className="fw-bold text-secondary">
                        <motion.span
                          initial={{ transform: "translateY(100%)" }}
                          whileInView={{ transform: "translateY(0%)" }}
                          transition={{ duration: 0.5 }}
                        >
                          Website Design & Development
                        </motion.span>
                      </h4>
                      <h1 className="fw-bold mt-4">
                        <motion.span
                          initial={{ transform: "translateY(100%)" }}
                          whileInView={{ transform: "translateY(0%)" }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                        >
                          United
                        </motion.span>
                      </h1>
                      <h1 className="fw-bold">
                        <motion.span
                          initial={{ transform: "translateY(100%)" }}
                          whileInView={{ transform: "translateY(0%)" }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          Lifestyle
                        </motion.span>
                      </h1>
                      <div className="d-flex mt-4 align-items-center justify-content-between pe-4">
                        <div>
                          <p className="m-0 text-secondary fw-bold">
                            <motion.span
                              initial={{ transform: "translateY(100%)" }}
                              whileInView={{ transform: "translateY(0%)" }}
                              transition={{ duration: 0.5, delay: 0.3 }}
                            >
                              This is a web design project which was
                            </motion.span>
                          </p>
                          <p className="m-0 mt-1 text-secondary fw-bold">
                            <motion.span
                              initial={{ transform: "translateY(100%)" }}
                              whileInView={{ transform: "translateY(0%)" }}
                              transition={{ duration: 0.5, delay: 0.34 }}
                            >
                              designed and developed for our
                            </motion.span>
                          </p>
                          <p className="m-0 mt-1 text-secondary fw-bold">
                            <motion.span
                              initial={{ transform: "translateY(100%)" }}
                              whileInView={{ transform: "translateY(0%)" }}
                              transition={{ duration: 0.5, delay: 0.39 }}
                            >
                              honorable client in Singapore.
                            </motion.span>
                          </p>
                        </div>
                        <div className="visit_website_btn d-md-flex d-none  align-items-center justify-content-center flex-column overflow-hidden">
                          <h6 className="visit_website_btn_h6Text ">
                            Visit Website
                          </h6>
                          <FaAnglesRight className="visit_website_btn_right_arrow" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {activeSlide === 3 ? (
                    <div>
                      {" "}
                      <h4 className="fw-bold text-secondary">
                        <motion.span
                          initial={{ transform: "translateY(100%)" }}
                          whileInView={{ transform: "translateY(0%)" }}
                          transition={{ duration: 0.5 }}
                        >
                          Website Design & Development
                        </motion.span>
                      </h4>
                      <h1 className="fw-bold mt-4">
                        <motion.span
                          initial={{ transform: "translateY(100%)" }}
                          whileInView={{ transform: "translateY(0%)" }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                        >
                          2ndlook
                        </motion.span>
                      </h1>
                      <div className="d-flex mt-4 align-items-center justify-content-between pe-4">
                        <div>
                          <p className="m-0 text-secondary fw-bold">
                            <motion.span
                              initial={{ transform: "translateY(100%)" }}
                              whileInView={{ transform: "translateY(0%)" }}
                              transition={{ duration: 0.5, delay: 0.3 }}
                            >
                              This is an ecommerce web design
                            </motion.span>
                          </p>
                          <p className="m-0 mt-1 text-secondary fw-bold">
                            <motion.span
                              initial={{ transform: "translateY(100%)" }}
                              whileInView={{ transform: "translateY(0%)" }}
                              transition={{ duration: 0.5, delay: 0.34 }}
                            >
                              project which was designed and
                            </motion.span>
                          </p>
                          <p className="m-0 mt-1 text-secondary fw-bold">
                            <motion.span
                              initial={{ transform: "translateY(100%)" }}
                              whileInView={{ transform: "translateY(0%)" }}
                              transition={{ duration: 0.5, delay: 0.39 }}
                            >
                              developed for our honorable client in
                            </motion.span>
                          </p>
                          <p className="m-0 mt-1 text-secondary fw-bold">
                            <motion.span
                              initial={{ transform: "translateY(100%)" }}
                              whileInView={{ transform: "translateY(0%)" }}
                              transition={{ duration: 0.5, delay: 0.39 }}
                            >
                              Singapore.
                            </motion.span>
                          </p>
                        </div>
                        <div className="visit_website_btn d-md-flex d-none  align-items-center justify-content-center flex-column overflow-hidden">
                          <h6 className="visit_website_btn_h6Text ">
                            Visit Website
                          </h6>
                          <FaAnglesRight className="visit_website_btn_right_arrow" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {activeSlide === 4 ? (
                    <div>
                      {" "}
                      <h4 className="fw-bold text-secondary">
                        <motion.span
                          initial={{ transform: "translateY(100%)" }}
                          whileInView={{ transform: "translateY(0%)" }}
                          transition={{ duration: 0.5 }}
                        >
                          Website Design & Development
                        </motion.span>
                      </h4>
                      <h1 className="fw-bold mt-4">
                        <motion.span
                          initial={{ transform: "translateY(100%)" }}
                          whileInView={{ transform: "translateY(0%)" }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                        >
                          Telescope
                        </motion.span>
                      </h1>
                      <div className="d-flex mt-4 align-items-center justify-content-between pe-4">
                        <div>
                          <p className="m-0 text-secondary fw-bold">
                            <motion.span
                              initial={{ transform: "translateY(100%)" }}
                              whileInView={{ transform: "translateY(0%)" }}
                              transition={{ duration: 0.5, delay: 0.3 }}
                            >
                              This is a web design project which was
                            </motion.span>
                          </p>
                          <p className="m-0 mt-1 text-secondary fw-bold">
                            <motion.span
                              initial={{ transform: "translateY(100%)" }}
                              whileInView={{ transform: "translateY(0%)" }}
                              transition={{ duration: 0.5, delay: 0.34 }}
                            >
                              designed and developed for our
                            </motion.span>
                          </p>
                          <p className="m-0 mt-1 text-secondary fw-bold">
                            <motion.span
                              initial={{ transform: "translateY(100%)" }}
                              whileInView={{ transform: "translateY(0%)" }}
                              transition={{ duration: 0.5, delay: 0.39 }}
                            >
                              honorable client in Singapore.
                            </motion.span>
                          </p>
                        </div>
                        <div className="visit_website_btn d-md-flex d-none  align-items-center justify-content-center flex-column overflow-hidden">
                          <h6 className="visit_website_btn_h6Text ">
                            Visit Website
                          </h6>
                          <FaAnglesRight className="visit_website_btn_right_arrow" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {activeSlide === 5 ? (
                    <div>
                      {" "}
                      <h4 className="fw-bold text-secondary">
                        <motion.span
                          initial={{ transform: "translateY(100%)" }}
                          whileInView={{ transform: "translateY(0%)" }}
                          transition={{ duration: 0.5 }}
                        >
                          Website Design & Development
                        </motion.span>
                      </h4>
                      <h1 className="fw-bold mt-4">
                        <motion.span
                          initial={{ transform: "translateY(100%)" }}
                          whileInView={{ transform: "translateY(0%)" }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                        >
                          iNova
                        </motion.span>
                      </h1>
                      <h1 className="fw-bold">
                        <motion.span
                          initial={{ transform: "translateY(100%)" }}
                          whileInView={{ transform: "translateY(0%)" }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          Jewellery
                        </motion.span>
                      </h1>
                      <div className="d-flex mt-4 align-items-center justify-content-between pe-4">
                        <div>
                          <p className="m-0 text-secondary fw-bold">
                            <motion.span
                              initial={{ transform: "translateY(100%)" }}
                              whileInView={{ transform: "translateY(0%)" }}
                              transition={{ duration: 0.5, delay: 0.3 }}
                            >
                              This is an ecommerce web design
                            </motion.span>
                          </p>
                          <p className="m-0 mt-1 text-secondary fw-bold">
                            <motion.span
                              initial={{ transform: "translateY(100%)" }}
                              whileInView={{ transform: "translateY(0%)" }}
                              transition={{ duration: 0.5, delay: 0.34 }}
                            >
                              project which was designed and
                            </motion.span>
                          </p>
                          <p className="m-0 mt-1 text-secondary fw-bold">
                            <motion.span
                              initial={{ transform: "translateY(100%)" }}
                              whileInView={{ transform: "translateY(0%)" }}
                              transition={{ duration: 0.5, delay: 0.39 }}
                            >
                              developed for our honorable client in
                            </motion.span>
                          </p>
                          <p className="m-0 mt-1 text-secondary fw-bold">
                            <motion.span
                              initial={{ transform: "translateY(100%)" }}
                              whileInView={{ transform: "translateY(0%)" }}
                              transition={{ duration: 0.5, delay: 0.39 }}
                            >
                              Singapore.
                            </motion.span>
                          </p>
                        </div>
                        <div className="visit_website_btn d-md-flex d-none  align-items-center justify-content-center flex-column overflow-hidden">
                          <h6 className="visit_website_btn_h6Text ">
                            Visit Website
                          </h6>
                          <FaAnglesRight className="visit_website_btn_right_arrow" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {activeSlide === 6 ? (
                    <div>
                      {" "}
                      <h4 className="fw-bold text-secondary">
                        <motion.span
                          initial={{ transform: "translateY(100%)" }}
                          whileInView={{ transform: "translateY(0%)" }}
                          transition={{ duration: 0.5 }}
                        >
                          Website Design & Development
                        </motion.span>
                      </h4>
                      <h1 className="fw-bold mt-4">
                        <motion.span
                          initial={{ transform: "translateY(100%)" }}
                          whileInView={{ transform: "translateY(0%)" }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                        >
                          PappaRich
                        </motion.span>
                      </h1>
                      <div className="d-flex mt-4 align-items-center justify-content-between pe-4">
                        <div>
                          <p className="m-0 text-secondary fw-bold">
                            <motion.span
                              initial={{ transform: "translateY(100%)" }}
                              whileInView={{ transform: "translateY(0%)" }}
                              transition={{ duration: 0.5, delay: 0.3 }}
                            >
                              This is a web design project which was
                            </motion.span>
                          </p>
                          <p className="m-0 mt-1 text-secondary fw-bold">
                            <motion.span
                              initial={{ transform: "translateY(100%)" }}
                              whileInView={{ transform: "translateY(0%)" }}
                              transition={{ duration: 0.5, delay: 0.34 }}
                            >
                              designed and developed for our
                            </motion.span>
                          </p>
                          <p className="m-0 mt-1 text-secondary fw-bold">
                            <motion.span
                              initial={{ transform: "translateY(100%)" }}
                              whileInView={{ transform: "translateY(0%)" }}
                              transition={{ duration: 0.5, delay: 0.39 }}
                            >
                              honorable client in Singapore.
                            </motion.span>
                          </p>
                        </div>
                        <div className="visit_website_btn d-md-flex d-none  align-items-center justify-content-center flex-column overflow-hidden">
                          <h6 className="visit_website_btn_h6Text ">
                            Visit Website
                          </h6>
                          <FaAnglesRight className="visit_website_btn_right_arrow" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {activeSlide === 7 ? (
                    <div>
                      {" "}
                      <h4 className="fw-bold text-secondary">
                        <motion.span
                          initial={{ transform: "translateY(100%)" }}
                          whileInView={{ transform: "translateY(0%)" }}
                          transition={{ duration: 0.5 }}
                        >
                          Website Design & Development
                        </motion.span>
                      </h4>
                      <h1 className="fw-bold mt-4">
                        <motion.span
                          initial={{ transform: "translateY(100%)" }}
                          whileInView={{ transform: "translateY(0%)" }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                        >
                          PrintLab
                        </motion.span>
                      </h1>
                      <div className="d-flex mt-4 align-items-center justify-content-between pe-4">
                        <div>
                          <p className="m-0 text-secondary fw-bold">
                            <motion.span
                              initial={{ transform: "translateY(100%)" }}
                              whileInView={{ transform: "translateY(0%)" }}
                              transition={{ duration: 0.5, delay: 0.3 }}
                            >
                              This is a web design project which was
                            </motion.span>
                          </p>
                          <p className="m-0 mt-1 text-secondary fw-bold">
                            <motion.span
                              initial={{ transform: "translateY(100%)" }}
                              whileInView={{ transform: "translateY(0%)" }}
                              transition={{ duration: 0.5, delay: 0.34 }}
                            >
                              designed and developed for our
                            </motion.span>
                          </p>
                          <p className="m-0 mt-1 text-secondary fw-bold">
                            <motion.span
                              initial={{ transform: "translateY(100%)" }}
                              whileInView={{ transform: "translateY(0%)" }}
                              transition={{ duration: 0.5, delay: 0.39 }}
                            >
                              honorable client in Singapore.
                            </motion.span>
                          </p>
                        </div>
                        <div className="visit_website_btn d-md-flex d-none  align-items-center justify-content-center flex-column overflow-hidden">
                          <h6 className="visit_website_btn_h6Text ">
                            Visit Website
                          </h6>
                          <FaAnglesRight className="visit_website_btn_right_arrow" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            <div className="col-md-5 portfolio_right">
              <Swiper
                ref={swiperRef}
                grabCursor={false}
                effect={"creative"}
                creativeEffect={{
                  prev: {
                    shadow: true,
                    translate: ["-20%", 0, -1],
                  },
                  next: {
                    translate: ["100%", 0, 0],
                  },
                }}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                modules={[EffectCreative]}
                className="mySwiper3"
                style={{ pointerEvents: "none" }}
              >
                <SwiperSlide>
                  <motion.div
                    className="swiper_image"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <img src="./reputation.jpg" alt="" />
                  </motion.div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper_image">
                    <img src="./7.jpg" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper_image">
                    <img src="./second_look.jpg" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper_image">
                    <img src="./8.jpg" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper_image">
                    <img src="./5.jpg" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper_image">
                    <img src="./3.jpg" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper_image">
                    <img src="./9.jpg" alt="" />
                  </div>
                </SwiperSlide>
              </Swiper>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
                className="pagination mt-4 ms-5"
              >
                <FaChevronLeft
                  style={{ cursor: "pointer" }}
                  className="fs-5"
                  onClick={DecreaseSlide}
                />
                <span className="mx-4">{`0${activeSlide}/07`}</span>
                <FaChevronRight
                  style={{ cursor: "pointer" }}
                  className="fs-5"
                  onClick={IncreaseSlide}
                />
              </motion.div>
            </div>
          </div>
        </div>

        <div className="cursor">
          <div className="dot"></div>
        </div>
      </div>
    </>
  );
};

export default page;
