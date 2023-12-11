import React from "react";
import "@/css/section4.css";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import AnimImage from "../AnimImage";
import StartAProjectAnim from "../StartAProjectAnim";
import StartAProjectSec2 from "../StartAProjectSec2";
import Companies from "../Companies";

const Section4 = () => {
  return (
    <>
      <div className="section4">
        <div className="row px-md-0 px-4">
          <div className="col-md-3"></div>
          <div className="col-md-9 section4_content">
            <motion.h6
              className="section4_content_text"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Our company in Singapore has always considered the fact that each
              client has a unique business proposition to offer their audience
              in Singapore. This led us to put focus on both website design and
              development separately but in a coordinated manner. As much as our
              developers and designers strive for excellence in website design,
              our developers and designers are consistently pursuing to develop
              web applications that meet the varying demands of clients'
              businesses in Singapore. Every successful project is the result of
              the combined effort from both groups of professionals in
              Singapore.
            </motion.h6>
            <motion.div
              className="section4_line"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            ></motion.div>
            <div className="row mt-5">
              <div className="col-md-6">
                <motion.h1
                  className="fw-bold text-white"
                  initial={{ opacity: 0, scale: 1.2 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Website Design
                  <span>
                    <FaArrowRight className="ms-4 fs-3" />
                  </span>
                </motion.h1>
              </div>
              <div className="col-md-6">
                <p className="m-0 sectoin4_textP">
                  Our web development and design services include creative and
                  responsive website design for corporate companies and
                  ecommerce businesses in Singapore. In doing so, we build
                  custom WordPress themes or design a website using themes
                  preferred by the clients. Besides WordPress website design and
                  development, we maintain a stellar track record of success in
                  designing creative, interactive and award winning websites for
                  clients in Singapore. Ecommerce website design is one of the
                  primary areas where our agency caters to the needs of every
                  type of business, from a startup company to the famous
                  ecommerce brands in Singapore.
                </p>
              </div>
              <motion.div
                className="section4_line"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.5, delay: 0.1 }}
              ></motion.div>
            </div>
            <div className="row mt-4">
              <div className="col-md-6">
                <motion.h1
                  className="fw-bold text-white"
                  initial={{ opacity: 0, scale: 1.2 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Web Development
                  <span>
                    <FaArrowRight className="ms-4 fs-3" />
                  </span>
                </motion.h1>
              </div>
              <div className="col-md-6">
                <p className="m-0 sectoin4_textP">
                  Our web development and designing services include website
                  design and development based on CMS or no CMS, custom web
                  application development based on PHP and Laravel, WordPress
                  plugin customisation and development, CRM development for
                  ecommerce and corporate companies, and many more. Our web
                  designers and developers are capable of using and customising
                  various JavaScript libraries and frameworks to create stunning
                  websites featuring rich animation and interactive effects. Our
                  agency has access to the latest technologies as well as the
                  older versions to help any company with custom website design
                  and development in Singapore.
                </p>
              </div>
            </div>
          </div>
        </div>

        <AnimImage image={"./section4.jpg"} />

        <Companies />

        <StartAProjectSec2 />

        <StartAProjectAnim />
      </div>
    </>
  );
};

export default Section4;
