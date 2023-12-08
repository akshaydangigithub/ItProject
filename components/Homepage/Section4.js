import React from "react";
import "@/css/section4.css";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

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
            <motion.div className="section4_line"  initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.5, delay: 0.1 }}></motion.div>
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
              <motion.div className="section4_line"  initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.5, delay: 0.1 }}></motion.div>
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

        <div className="row">
          <div className="col-md-10">
            <div className="img_container">
              <img
                data-scroll
                data-scroll-speed="4"
                src="./section4.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>

        <div className="row mt-5 px-5 d-md-flex d-none">
          <div className="col-2 mt-5 d-flex align-items-center justify-content-center">
            <img height={130} src="./singapore_airline.png" alt="" />
          </div>
          <div className="col-2 mt-5 d-flex align-items-center justify-content-center">
            <img height={130} src="./singtel.png" alt="" />
          </div>
          <div className="col-2 mt-5 d-flex align-items-center justify-content-center">
            <img height={130} src="./nus.png" alt="" />
          </div>
          <div className="col-2 mt-5 d-flex align-items-center justify-content-center">
            <img height={130} src="./standard-chartered.png" alt="" />
          </div>
          <div className="col-2 mt-5 d-flex align-items-center justify-content-center">
            <img height={130} src="./samsung.png" alt="" />
          </div>
          <div className="col-2 mt-5 d-flex align-items-center justify-content-center">
            <img height={130} src="./sysmex.png" alt="" />
          </div>
        </div>

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
              With a sustainable and fast-growing market, Singapore keeps
              drawing the attention of investors from both local and foreign
              regions, paving the way to unending competition among businesses
              which primarily aim to establish their online presence to attract
              customers in Singapore. What can be better than a creative and
              responsive website with an engaging and intuitive UI? Again, a
              website that is good at serving your ecommerce consumers may not
              be good at all when it comes to persuading corporate stakeholders
              in Singapore. Our designers and developers in Singapore understand
              this simple fact and act accordingly to the clients' benefits.
            </motion.p>
            <motion.p
              className="m-0 sectoin4_textP2"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Every designer and developer at our company in Singapore possess
              the required skills plus one special thing - understanding of how
              customers/ audiences in Singapore behave as they come across a
              website or web application. This knowledge helps them to realize
              the pain points of customers which are never good for business,
              even if it's about a billion-dollar corporate company in
              Singapore. Designers and developers at our agency in Singapore try
              to keep the UI and functional aspects as simple yet engaging as
              possible so that users feel like interacting with the website and
              their experience remains positive.
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

        <div className="row mt-5 tagline ">
          <div className="col tagline mt-5">
            <h1 className="me-5">Start a Project</h1>
            <h1 className="me-5">Start a Project</h1>
            <h1 className="me-5">Start a Project</h1>
            <h1 className="me-5">Start a Project</h1>
            <h1 className="me-5">Start a Project</h1>
          </div>
          <h6 className="text-white text-center fw-bold mt-4">
            Request for a Quotation{" "}
            <FaArrowRight
              className="ms-2"
              style={{ transform: "rotate(-45deg)" }}
            />
          </h6>
        </div>
      </div>
    </>
  );
};

export default Section4;
