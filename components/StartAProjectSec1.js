import React from "react";
import "../css/startaprojectsec2.css";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const StartAProjectSec1 = ({ head, text1, text2 }) => {
  return (
    <>
      <div className="startaprojectsec2 row">
        <div className="col-md-3"></div>
        <div className="col-md-9">
          <motion.h5
            initial={{ opacity: 0, y: -100, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {head}
          </motion.h5>
          <motion.div
            className="startaprojectsec2_line mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          ></motion.div>

          <motion.p
            className="fw-bold mt-5"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {text1}
          </motion.p>
          <motion.p
            className="fw-bold"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {text2}
          </motion.p>
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

export default StartAProjectSec1;
