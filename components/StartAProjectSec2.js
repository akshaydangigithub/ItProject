"use client"
import React from "react";
import "@/css/section4.css";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const StartAProjectSec2 = () => {
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
            Are you looking for web design agency in Singapore? We provide
            hassle-free web design services that your business needs.
          </motion.h1>
        </div>
      </div>
      <div className="row mt-5 pe-5">
        <div className="col-md-4"></div>
        <div className="col-md-8 pe-md-5 ps-4">
          <motion.p
            className="mb-4 sectoin4_textP2"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            With a sustainable and fast-growing market, Singapore keeps drawing
            the attention of investors from both local and foreign regions,
            paving the way to unending competition among businesses which
            primarily aim to establish their online presence to attract
            customers in Singapore. What can be better than a creative and
            responsive website with an engaging and intuitive UI? Again, a
            website that is good at serving your ecommerce consumers may not be
            good at all when it comes to persuading corporate stakeholders in
            Singapore. Our designers and developers in Singapore understand this
            simple fact and act accordingly to the clients' benefits.
          </motion.p>
          <motion.p
            className="m-0 sectoin4_textP2"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Every designer and developer at our company in Singapore possess the
            required skills plus one special thing - understanding of how
            customers/ audiences in Singapore behave as they come across a
            website or web application. This knowledge helps them to realize the
            pain points of customers which are never good for business, even if
            it's about a billion-dollar corporate company in Singapore.
            Designers and developers at our agency in Singapore try to keep the
            UI and functional aspects as simple yet engaging as possible so that
            users feel like interacting with the website and their experience
            remains positive.
          </motion.p>
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
