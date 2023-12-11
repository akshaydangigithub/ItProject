import React from "react";
import "@/css/startaprojectsec2.css";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const StartAProjectSec1 = () => {
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
            Since the first day we entered the competitive business of
            developing and designing websites for our clients in Singapore,
            we've held a few characteristics that work as the driving force of
            our company as we successfully fulfill the requests of a client and
            await the arrival of the next. Dedication and passion for excellence
            are the two most important traits of our designers and developers.
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
            Aidentity is a fast-growing web design and development agency
            looking to make life easier for small businesses, professional
            individuals, midsize companies, and large corporations in Singapore
            by designing creative, fast-loading, responsive, user-friendly, and
            eye-catching websites within budget. We believe in client
            acquisition as much as we do in retention.
          </motion.p>
          <motion.p
            className="fw-bold"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our portfolio includes virtually all kinds of legitimate companies
            operating within the business sector in Singapore. Our talented web
            design and development professionals enjoy working on diverse
            projects that often come with some very specific or highly
            challenging requirements. Whether yours is a small or medium
            company, or you're representing a large corporation that needs a
            stunning look and an efficient functional side, we've got the
            numbers to impress you. But we take a different approach. We try to
            go deeper into your business objectives and help you set the right
            goals for your company as to establishing an online identity and
            building reputation in Singapore.
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
