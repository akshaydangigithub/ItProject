import React from "react";
import "@/css/heroCommon.css";
import { IoMdArrowRoundDown } from "react-icons/io";
import { motion } from "framer-motion";

const HeroCommon = ({
  image,
  head1,
  head2,
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
}) => {
  return (
    <>
      <div className="row herocommon">
        <div className="col-md-6 position-relative">
          <img src={image} alt="" />
          <div className="herocommon_content">
            <h1>
              <motion.span
                initial={{ transform: "translateY(100%)" }}
                animate={{ transform: "translateY(0%)" }}
                transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
              >
                {head1}
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
                {head2}
              </motion.span>
            </h1>

            {text1 && (
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
                  {text1}
                </motion.span>
              </p>
            )}
            {text2 && (
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
                  {text2}
                </motion.span>
              </p>
            )}
            {text3 && (
              <p className="m-0">
                <motion.span
                  initial={{ transform: "translateY(100%)" }}
                  animate={{ transform: "translateY(0%)" }}
                  transition={{
                    duration: 0.3,
                    type: "spring",
                    stiffness: 100,
                    delay: 0.5,
                  }}
                >
                  {text3}
                </motion.span>
              </p>
            )}
            {text4 && (
              <p className="m-0">
                <motion.span
                  initial={{ transform: "translateY(100%)" }}
                  animate={{ transform: "translateY(0%)" }}
                  transition={{
                    duration: 0.3,
                    type: "spring",
                    stiffness: 100,
                    delay: 0.6,
                  }}
                >
                  {text4}
                </motion.span>
              </p>
            )}
            {text5 && (
              <p className="m-0">
                <motion.span
                  initial={{ transform: "translateY(100%)" }}
                  animate={{ transform: "translateY(0%)" }}
                  transition={{
                    duration: 0.3,
                    type: "spring",
                    stiffness: 100,
                    delay: 0.7,
                  }}
                >
                  {text5}
                </motion.span>
              </p>
            )}
            {text6 && (
              <p className="m-0">
                <motion.span
                  initial={{ transform: "translateY(100%)" }}
                  animate={{ transform: "translateY(0%)" }}
                  transition={{
                    duration: 0.3,
                    type: "spring",
                    stiffness: 100,
                    delay: 0.8,
                  }}
                >
                  {text6}
                </motion.span>
              </p>
            )}
            {text7 && (
              <p className="m-0">
                <motion.span
                  initial={{ transform: "translateY(100%)" }}
                  animate={{ transform: "translateY(0%)" }}
                  transition={{
                    duration: 0.3,
                    type: "spring",
                    stiffness: 100,
                    delay: 0.9,
                  }}
                >
                  {text7}
                </motion.span>
              </p>
            )}

            <motion.div
              className="learn_more_btn mt-5 d-md-flex d-none align-items-center justify-content-center flex-column overflow-hidden"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.2,
                delay: 0.5,
              }}
            >
              <h6 className="h6Text ">Learn More</h6>
              <IoMdArrowRoundDown className="hero_Down_Arrow" />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroCommon;
