"use client";
import React from "react";
import AnimImage from "@/components/AnimImage";
import HeroCommon from "@/components/HeroCommon";
import ScrollAnim from "@/components/Homepage/ScrollAnim";
import Navbar from "@/components/Navbar";
import StartAProjectSec1 from "@/components/StartAProjectSec1";
import StartAProjectAnim from "@/components/StartAProjectAnim";
import StartAProjectSec2 from "@/components/StartAProjectSec2";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <>
      <div style={{ backgroundColor: "#191a1c" }}>
        <Navbar />
        <HeroCommon />
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
        <StartAProjectSec1 />
        <AnimImage image={"./inner.jpg"} />
        <StartAProjectSec2 />
        <StartAProjectAnim />
        <Footer />
      </div>
    </>
  );
};

export default page;
