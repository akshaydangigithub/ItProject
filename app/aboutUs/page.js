"use client";
import React from "react";
import AnimImage from "../../components/AnimImage";
import HeroCommon from "../../components/HeroCommon";
import ScrollAnim from "../../components/Homepage/ScrollAnim";
import Navbar from "../..//components/Navbar";
import StartAProjectSec1 from "../../components/StartAProjectSec1";
import StartAProjectAnim from "../../components/StartAProjectAnim";
import StartAProjectSec2 from "../../components/StartAProjectSec2";
import Footer from "../../components/Footer";
import Noise from "../../components/Homepage/Noise";
import Mouse from "../../components/Mouse";
import BackToTop from "../../components/BackToTop";

const page = () => {
  return (
    <>
      <div className="smooth-scroll-gsap" style={{ backgroundColor: "#191a1c" }}>
        <BackToTop />
        <Mouse />
        <Noise />
        <Navbar />
        <HeroCommon
          image={"./about_us_img1.jpg"}
          head1={"Hello,"}
          head2={"we are Aidentity."}
          text1={
            "We don't claim to be the best web design agency in Singapore, but we can certainly become your go-"
          }
          text2={
            " to website design and development company that understands your business pain points and strives"
          }
          text3={" to help you overcome them without spending a fortune."}
        />
        <ScrollAnim
          bgcolor={"transparent"}
          text1={
            "Our reputation is built upon genuine success, not just words."
          }
          text6={"And we define success by clients' satisfaction, not numbers."}
          srcLinkimage={
            "https://www.aidentity.sg/images/pages/about_aidentity.jpg"
          }
        />
        <StartAProjectSec1
          head={
            "Since the first day we entered the competitive business of developing and designing websites for our clients in Singapore, we've held a few characteristics that work as the driving force of our company as we successfully fulfill the requests of a client and await the arrival of the next. Dedication and passion for excellence are the two most important traits of our designers and developers."
          }
          text1={
            "Aidentity is a fast-growing web design and development agency looking to make life easier for small businesses, professional individuals, midsize companies, and large corporations in Singapore by designing creative, fast-loading, responsive, user-friendly, and eye-catching websites within budget. We believe in client acquisition as much as we do in retention."
          }
          text2={
            "Our portfolio includes virtually all kinds of legitimate companies operating within the business sector in Singapore. Our talented web design and development professionals enjoy working on diverse projects that often come with some very specific or highly challenging requirements. Whether yours is a small or medium company, or you're representing a large corporation that needs a stunning look and an efficient functional side, we've got the numbers to impress you. But we take a different approach. We try to go deeper into your business objectives and help you set the right goals for your company as to establishing an online identity and building reputation in Singapore."
          }
        />
        <AnimImage image={"./inner.jpg"} />
        <StartAProjectSec2
          head={
            "Are you looking for web design agency in Singapore? We provide hassle-free web design services that your business needs."
          }
          text1={
            "With a sustainable and fast-growing market, Singapore keeps drawing the attention of investors from both local and foreign regions, paving the way to unending competition among businesses which primarily aim to establish their online presence to attract customers in Singapore. What can be better than a creative and responsive website with an engaging and intuitive UI? Again, a website that is good at serving your ecommerce consumers may not be good at all when it comes to persuading corporate stakeholders in Singapore. Our designers and developers in Singapore understand this simple fact and act accordingly to the clients' benefits."
          }
          text2={
            "Every designer and developer at our company in Singapore possess the required skills plus one special thing - understanding of how customers/ audiences in Singapore behave as they come across a website or web application. This knowledge helps them to realize the pain points of customers which are never good for business, even if it's about a billion-dollar corporate company in Singapore. Designers and developers at our agency in Singapore try to keep the UI and functional aspects as simple yet engaging as possible so that users feel like interacting with the website and their experience remains positive."
          }
        />
        <StartAProjectAnim />
        <Footer />
      </div>
    </>
  );
};

export default page;
