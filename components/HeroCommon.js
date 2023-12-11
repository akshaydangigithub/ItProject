import React from "react";
import "@/css/heroCommon.css";
import { IoMdArrowRoundDown } from "react-icons/io";
import { motion } from "framer-motion";

const HeroCommon = () => {
  return (
    <>
      <div className="row herocommon">
        <div className="col-md-6 position-relative">
          <img src="./about_us_img1.jpg" alt="" />
          <div className="herocommon_content">
            <h1>
              <motion.span
                initial={{ transform: "translateY(100%)" }}
                animate={{ transform: "translateY(0%)" }}
                transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
              >
                Hello,
              </motion.span>
            </h1>
            <h1>
              <motion.span
                initial={{ transform: "translateY(100%)" }}
                animate={{ transform: "translateY(0%)" }}
                transition={{
                  duration: 0.3,
                  type: "spring",
                  stiffness: 100,
                  delay: 0.2,
                }}
              >
                we are Aidentity.
              </motion.span>
            </h1>

            <p className="mt-4 mb-0">
              <motion.span
                initial={{ transform: "translateY(100%)" }}
                animate={{ transform: "translateY(0%)" }}
                transition={{
                  duration: 0.3,
                  type: "spring",
                  stiffness: 100,
                  delay: 0.3,
                }}
              >
                We don't claim to be the best web design agency in Singapore,
                but we can certainly become your go-
              </motion.span>
            </p>
            <p className="m-0">
              <motion.span
                initial={{ transform: "translateY(100%)" }}
                animate={{ transform: "translateY(0%)" }}
                transition={{
                  duration: 0.3,
                  type: "spring",
                  stiffness: 100,
                  delay: 0.4,
                }}
              >
                to website design and development company that understands your
                business pain points and strives
              </motion.span>
            </p>
            <p className="m-0">
              <motion.span
                initial={{ transform: "translateY(100%)" }}
                animate={{ transform: "translateY(0%)" }}
                transition={{
                  duration: 0.3,
                  type: "spring",
                  stiffness: 100,
                  delay: 0.46,
                }}
              >
                to help you overcome them without spending a fortune.
              </motion.span>
            </p>

            <motion.div
              className="learn_more_btn2 mt-5 d-md-flex d-none align-items-center justify-content-center flex-column overflow-hidden"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.2,
                delay: 0.5,
              }}
            >
              <h6 className="h6Text2 ">Learn More</h6>
              <IoMdArrowRoundDown className="hero_Down_Arrow2" />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroCommon;
