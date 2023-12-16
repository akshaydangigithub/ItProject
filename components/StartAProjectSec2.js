"use client";
import React from "react";
import "../css/section4.css";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const StartAProjectSec2 = ({ head, text1, text2, text3 }) => {
  return (
    <>
      <div className="row px-md-5 px-3 mt-5">
        <div className="col">
          <motion.h1
            className="section4_headH1 fs-1"
            initial={{ opacity: 0, y: -100, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {head}
          </motion.h1>
        </div>
      </div>
      <div className="row mt-5 pe-5">
        <div className="col-md-4"></div>
        <div className="col-md-8 pe-md-5 ps-4">
          {text1 && (
            <motion.p
              className="mb-4 sectoin4_textP2"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {text1}
            </motion.p>
          )}
          {text2 && (
            <motion.p
              className="m-0 mb-4 sectoin4_textP2"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {text2}
            </motion.p>
          )}

          {text3 && (
            <motion.p
              className="m-0 sectoin4_textP2"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {text3}
            </motion.p>
          )}

          <motion.div
            className="section4_line"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          ></motion.div>
          <motion.button
            className="start_project_btn mt-4"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Start A Project Now <FaArrowRight className="ms-3" />
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default StartAProjectSec2;
