import React from "react";
import "../../css/section2.css";
import { motion } from "framer-motion";

const Section2 = () => {
  return (
    <>
      <div className="section2 position-relative d-flex flex-column align-items-end ">
        <motion.h1
          initial={{ opacity: 0, y: -100, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span>Hello, we are Aidentity. A creative web design &</span>{" "}
          <span>development company from Singapore.</span>
        </motion.h1>

        <div className="section2_content">
          <motion.h6
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Designing a website is like creating a story, and that's what our
            web designers and developers do. Similarly, developing a website to
            make it functional is like shaping the journey of visitors as they
            land on a website. Our designers and developers take their jobs
            seriously whether they design or develop a website or web
            application for a small or midsize company in Singapore. If the past
            decade has taught us, as a web design and development agency,
            anything about businesses in Singapore, it's the lesson that
            innovation keeps you alive. So, we seek and combine innovation into
            anything we do for our clients in Singapore.
          </motion.h6>
          <motion.div
            className="section2_content_line1 section2_content_line mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
          <div className="row m-0 mt-5">
            <div className="col-md-6 pe-5">
              <motion.h1
                className="section2_content_num text-md-start text-center"
                initial={{ opacity: 0, scale: 1.2 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                210 +
              </motion.h1>
              <motion.div
                className="section2_content_line mt-3"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.5, delay: 0.2 }}
              ></motion.div>
              <h5 className="section2_content_text mt-4 text-md-start text-center">
                Happy Clients in Singapore
              </h5>
            </div>
            <div className="col-md-6 pe-5">
              <motion.h1
                className="section2_content_num text-md-start text-center"
                initial={{ opacity: 0, scale: 1.2 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                28
              </motion.h1>
              <motion.div
                className="section2_content_line mt-3"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.5, delay: 0.2 }}
              ></motion.div>
              <h5 className="section2_content_text mt-4 text-md-start text-center">
                Designers & Developers
              </h5>
            </div>
          </div>
          <div className="row m-0 mt-4">
            <div className="col-md-6 pe-5">
              <motion.h1
                className="section2_content_num text-md-start text-center"
                initial={{ opacity: 0, scale: 1.2 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                350 +
              </motion.h1>
              <motion.div
                className="section2_content_line mt-3"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.5, delay: 0.2 }}
              ></motion.div>
              <h5 className="section2_content_text mt-4 text-md-start text-center">Websites Designed</h5>
            </div>
            <div className="col-md-6 pe-5">
              <motion.h1
                className="section2_content_num text-md-start text-center"
                initial={{ opacity: 0, scale: 1.2 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                10 +
              </motion.h1>
              <motion.div
                className="section2_content_line mt-3"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.5, delay: 0.2 }}
              ></motion.div>
              <h5 className="section2_content_text mt-4 text-md-start text-center">
                Years of Experience
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
