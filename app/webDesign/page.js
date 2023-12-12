"use client";
import AnimImage from "@/components/AnimImage";
import Footer from "@/components/Footer";
import HeroCommon from "@/components/HeroCommon";
import Noise from "@/components/Homepage/Noise";
import ScrollAnim from "@/components/Homepage/ScrollAnim";
import Mouse from "@/components/Mouse";
import Navbar from "@/components/Navbar";
import StartAProjectAnim from "@/components/StartAProjectAnim";
import StartAProjectSec1 from "@/components/StartAProjectSec1";
import StartAProjectSec2 from "@/components/StartAProjectSec2";
import React from "react";

const page = () => {
  return (
    <>
      <div className="smooth-scroll-gsap" style={{ backgroundColor: "#191a1c" }}>
        <Mouse />
        <Noise />
        <Navbar />
        <HeroCommon
          image={"./web_design_banner.jpg"}
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
          text1={"Our goal is to design website for you"}
          text6={"That promotes your company 24/7"}
          srcLinkimage={
            "https://www.aidentity.sg/images/pages/web_design_contents.jpg"
          }
        />
        <StartAProjectSec1
          head={
            "No amount of work or money is enough for a website to become successful unless it guides visitors to the place where their desired information is. Our web designers and developers in Singapore can put different design elements together in a way that anyone who lands on your website instantly knows where to find what they're looking for."
          }
          text1={
            "A website is the center of a company's digital Eco-system wherein the experience of a user always matters. It is a truth that an average web design and development agency in Singapore may not be willing to accept or understand. But we do realise it because our commitment, as your trusted digital agency in Singapore, goes as far as it takes us to write a credible success story together with you."
          }
          text2={
            "If a website fails to set a positive impression of the business it's representing, it cannot be much of a brand asset. Since your company's got a story just like others in Singapore, you want / need to share it with the audience through website. Our creative designers and developers in Singapore adopt an interactive and immersive form of storytelling and implement it in your website efficiently. In cooperation with our thoughtful designers, they transform the old-school art of web interactivity into a captivating experience for each of your customers. In doing so, we follow the latest trends and standards as much as we deem necessary for your brand and agency."
          }
        />
        <AnimImage image={"./web_design-min.jpg"} />
        <StartAProjectSec2
          head={
            "Are you looking for website design agency in Singapore? We design outstanding website that your business needs."
          }
          text1={
            "We believe every agency or company in Singapore is unique in their way of interacting with their customers. This belief leads us to focus on the web visuals that consist of colours, typography, illustrations, and animations. Each of these elements needs to work as a whole or combination that improves the mood of the audience and leaves a long-lasting impression on their minds, no matter how long they stay on the website. "
          }
          text2={
            "Besides making a website as creative as you want, we ensure that it is usable and accessible with utmost ease. Visitors won't like to learn how to use your website. The majority of them will move to another website if they find yours having overly complex or poor navigation. So, we design and develop the navigation of your website with the purpose of giving the visitors the reason to keep using your site. Instead of only showing the format of the content, we try to categorize your content meaningfully."
          }
          text3={
            "An important part of our web design and development process is to decide how to use a call to action (CTA) that works as a signpost for website visitors, telling them where to go next. Not many website design agencies in Singapore can use this powerful tool to its full potential. Only good design doesn't make CTAs good enough to draw visitors' attention. Their visibility needs to be prominent in the website. Our developers and designers can design and place CTAs in place to create a sense of urgency in users' minds, which may result in positive actions"
          }
        />
        <StartAProjectAnim />
        <Footer />
      </div>
    </>
  );
};

export default page;
