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
    <div className="smooth-scroll-gsap" style={{ backgroundColor: "#191a1c" }}>
      <Mouse />
      <Noise />
      <Navbar />
      <HeroCommon
        image={"./website_maintenance .jpg"}
        head1={"Website"}
        head2={"Maintenance."}
        text1={
          "Every second counts as the user lands on your website. You need to keep detecting issues that might"
        }
        text2={
          "be preventing users from enjoying their stay on your website. Thus, website maintenance is"
        }
        text3={
          "essential, and the web design agency in Singapore doing the job for your company can play a crucial"
        }
        text4={"role."}
      />
    <ScrollAnim
        bgcolor={"transparent"}
        text1={"Keep your website secured and updated"}
        text6={"With maintenance service we provide"}
        srcLinkimage={
            "https://www.aidentity.sg/images/pages/website_maintenance_service.jpg"
        }
    />
    <StartAProjectSec1
        head={
            "Every business in Singapore or anywhere else wants to grow and thrive, regardless of the size of their customer base. More than half of the companies in Singapore suffer from poor user experience resulting from a website that doesn't load as fast as expected or offer great usability. Knowingly or unknowingly, you may just be one of those entrepreneurs eager enough to address the issue but don't know which agency in Singapore to contact."
        }
        text1={
            "A website serves several purposes, from presenting your company before the crowd that would have no way to know about your business otherwise, to helping you benefit from an increasing interest in users relying on the internet for their day-to-day needs. But that website cannot really help much if it fails to perform what it's designed to. Website maintenance service is one of the key initiatives to ensure that your company website is up and running to satisfy the demands of your audience in Singapore."
        }
        text2={
            "If you already have a website or are planning on having one for your business in Singapore, there are good reasons for it. It may have great aesthetics or a robust information architecture, but it cannot serve reliably over the years without getting the maintenance and performance tweaks it needs. A full-service web design agency like Aidentity has the skilled designers and developers along with the required stack of technologies to help you with website maintenance. How frequently you need it depends on many things like evolving competition, changes in how users want to perform their actions, concerns for security and speed, and a few other factors."
        }
    />
      <AnimImage image={"./website_maintenance_service_singapore.jpg"} />
      <StartAProjectSec2
        head={
          "Are you looking for website maintenance service in Singapore? We offer website maintenance service at low cost."
        }
        text1={
            "Our website maintenance service in Singapore includes quite a number of activities with the most important ones being taking backups on a scheduled basis, checking and improving the site speed, detecting and fixing broken links and other URL issues, checking and ensuring browser compatibility, adding/ improving the visuals, and everything that is related with the site's security. Based on the needs of your company and the frequency of maintenance, we can offer attractive deals so that you can have the peace of mind knowing you're getting the best value for your money and your website is doing what it's built for."
        }
        text2={
          "Aidentity aims for each client in Singapore to enjoy the best value for their money. About 90% of all our clients in Singapore have entrusted us with the maintenance of their website after we've designed at least one website for them. Many of them even have counted the maintenance service with us since the first year of our journey. This incredible rate of retention didn't come magically or overnight. Our web designers and developers in Singapore are always eager to utilise their skills for the improvement of the client's website as well as the brand."
        }
        text3={
          "Just about any web design and development agency in Singapore can claim to have the ability to provide these services, but you know tasks like site speed, overall improvement of UX, and optimisation of the design based on micro interactions take professionals years to master. Fortunately, the designers and developers in the team at our agency in Singapore has gathered the knowledge and skills to apply the maintenance tweaks to your website following the industry standards."
        }
      />
      <StartAProjectAnim />
      <Footer />
    </div>
  );
};

export default page;
