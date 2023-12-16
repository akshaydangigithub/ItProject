import React from "react";
import "../css/footer.css";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <>
      <div className="row m-0 footer ">
        <div className="col-md-3 mb-md-0 mb-4 pe-4">
          <h4 className="logo">
            <span>S</span>
            <span>O</span>
            <span>F</span>
            <span>T</span>
            <span>S</span>
            <span>E</span>
            <span>E</span>
            <span>K</span>
            <span>E</span>
            <span>R</span>
            <span>S</span>
          </h4>
          <p className="m-0 mt-4">
            Our creative website designers and developers in Singapore are
            specialised in all aspects of design practices and put effort to
            make a website more attractive and engaging that fits into your
            business needs.
          </p>
        </div>
        <div className="col-md-3 mb-md-0 mb-4">
          <h5 className="text-white fw-bold">Website Design</h5>
          <ul className="mt-4">
            <li>Corporate Website Design</li>
            <li className="mt-2">Responsive Website Design</li>
            <li className="mt-2">WordPress Website Design</li>
            <li className="mt-2">Creative Website Design</li>
            <li className="mt-2">Ecommerce Website Design</li>
          </ul>
        </div>
        <div className="col-md-3 mb-md-0 mb-4">
          <h5 className="text-white fw-bold">Web Development</h5>
          <ul className="mt-4">
            <li>Corporate Web Development</li>
            <li className="mt-2">Responsive Web Development</li>
            <li className="mt-2">WordPress Web Development</li>
            <li className="mt-2">Creative Web Development</li>
            <li className="mt-2">Ecommerce Web Development</li>
          </ul>
        </div>
        <div className="col-md-3 mb-md-0 mb-4">
          <h5 className="text-white fw-bold">Contact Information</h5>
          <ul className="mt-4">
            <li>
              Singapore office: 92 Kaki Bukit Industrial Terrace, Singapore -
              416171
            </li>
            <li className="mt-4">
              Tel: +65 67441123, +65 91717707 Email: sales.sg@orfeostory.com
            </li>
          </ul>
        </div>
        <motion.div
          className="footer_line mt-4"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        ></motion.div>

        <div className="row mt-4">
          <div className="col-md-8 mb-md-0 mb-4">
            <p>
              © Copyright Softseekers - creative web design and development
              Bhopal, all rights reserved.
            </p>
          </div>
          <div className="col-md-4 mb-md-0 mb-4 ">
            <p className="text-end">Web Design & App Developer in Bhopal</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
