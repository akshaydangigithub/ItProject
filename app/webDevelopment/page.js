"use client";
import AnimImage from "../../components/AnimImage";
import BackToTop from "../../components/BackToTop";
import Footer from "../../components/Footer";
import HeroCommon from "../../components/HeroCommon";
import Noise from "../../components/Homepage/Noise";
import ScrollAnim from "../../components/Homepage/ScrollAnim";
import Mouse from "../../components/Mouse";
import Navbar from "../../components/Navbar";
import StartAProjectAnim from "../../components/StartAProjectAnim";
import StartAProjectSec1 from "../../components/StartAProjectSec1";
import StartAProjectSec2 from "../../components/StartAProjectSec2";
import React from "react";

const page = () => {
  return (
    <div className="smooth-scroll-gsap" style={{ backgroundColor: "#191a1c" }}>
      <Mouse />
      <Noise />
      <BackToTop />
      <Navbar />
      <HeroCommon
        image={"./corporate_web.jpg"}
        head1={"Corporate"}
        head2={"web development."}
        text1={
          "As a web design and development company at Aidentity, each corporate website is custom-designed"
        }
        text2={
          " and developed to meet the specific needs of the client's company in Singapore. A sophisticated"
        }
        text3={
          "website with rich branding helps your corporate company stand out among competitors. Navigations"
        }
        text4={
          "and CTAs are always at the forefront of our design and development process, and our company"
        }
        text5={"focuses on developing websites that produce results."}
      />
      <ScrollAnim
        bgcolor={"transparent"}
        text1={"Corporates are all about credibility, value, and goodwill"}
        text6={"We develop websites that offer all of these and more"}
        srcLinkimage={
          "https://www.aidentity.sg/images/pages/corporate_web_development.jpg"
        }
      />
      <StartAProjectSec1
        head={
          "At Aidentity our web designers and developers in Singapore help brands stay ahead of the ever-changing digital landscape with customer-centric websites that create tangible business results. We combine our extensive experience with the web with your company's design requirements and development ideas to create a unique website for your company. Our unique corporate website design and development service helps spread your brand's message across Singapore."
        }
        text1={
          "A reliable way to communicate among companies, stakeholders, partners, etc., is fundamental to many of our corporate clients in Singapore. As a result, some web development companies do not give importance to the appearance of their websites. Aidentity believes in making the website function well without worrying about an unprofessional-looking front-end impression."
        }
        text2={
          "We design and develop corporate websites so that the elements work as a whole to present the company's identity uniquely and to remind the audience of the brand when they see it anywhere on the website. In Singapore, we try to understand your customers' needs, so our designers and developers can create work representative of them."
        }
      />
      <AnimImage image={"./corporate_web_development_company.jpg"} />
      <StartAProjectSec2
        head={
          "Are you looking for corporate web development company in Singapore? We develop corporate website that your business needs."
        }
        text1={
          "Aidentity serves as a leading web development company in Singapore that provides experienced consultants, designers, and developers to help you take your online presence to the next level in Singapore. Our web developers and designers specialize in the design and development of corporate websites. You can count on us to provide high-performance, feature-rich, and digitally transformative web experiences that are user-friendly, fully functional, highly secure, and scalable to your business needs."
        }
        text2={
          "Additionally, Aidentity can help your company with migrations, upgrades, and integrations and create a robust, scalable, and secure enterprise web experience. As part of our managed services offering, we provide 24x7 support and maintenance to handle even the most complex and extreme situations quickly and efficiently in Singapore."
        }
        text3={
          "The Aidentity team in Singapore offers a wide range of website design and development services, from designing mobile web applications and responsive websites to building custom e-commerce and intranet experiences using the latest web technologies. Consumers in Singapore evaluate their online experience when making decisions, with one-third of them visiting websites at least once before purchasing. So, it's essential to ensure that your website is visually appealing, usable, and accessible to a broad group of audience."
        }
      />
      <StartAProjectAnim />
      <Footer />
    </div>
  );
};

export default page;
