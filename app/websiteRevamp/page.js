"use client";
import AnimImage from "@/components/AnimImage";
import BackToTop from "@/components/BackToTop";
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
      <BackToTop />
      <Navbar />
      <HeroCommon
        image={"./website_revamp_singapore.jpg"}
        head1={"Website revamp"}
        head2={"agency in Singapore ."}
        text1={
          "As you start thinking about website revamp, there are a lot of things that you may want a web design"
        }
        text2={
          "and development agency in Singapore to handle, from conceptualising new visuals and graphic"
        }
        text3={
          "standards to the realisation of functional aspects and overall user experience."
        }
      />
      <ScrollAnim
        bgcolor={"transparent"}
        text1={`An outdated UI results in a poor UX and conversion`}
        text6={`Our agency can help you to revamp your website `}
        srcLinkimage={
          "https://www.aidentity.sg/images/pages/website_revamp.png"
        }
      />
      <StartAProjectSec1
        head={
          "Whether you call it website revamp or redesign, it is more a strategic approach than a part of your annual/ biannual website maintenance plan. Most of our clients in Singapore who are running businesses in Singapore have looked up to us for one of these reasons - declining sales/ decreasing conversion rate, repeated requests from customers complaining about their experience with the websites, and the existing design being not on par with the expectations of the audience."
        }
        text1={
          "Singapore's business landscape keeps changing and evolving like any other around the world where customers are willing to pay top dollars for the products/ services that exactly meet their needs. Unfortunately, one third of all websites in Singapore don't do what the companies that built them expect. If yours is one of them, you may want to consider hiring a web design and development agency specializing in website revamp services. Sometimes, the need for a fresh look to improve the branding of your company may also call for website revamp. Either way, a refreshed look of the business website brings positive results in terms of conversion. Our Singapore-based agency has helped hundreds of businesses gain an edge by only revamping their websites."
        }
        text2={
          "We start by analysing your existing website to learn what is good and functional about it and what is not. Then, we get a good grasp of your priorities and identify the ones that you want the new design to achieve. These two steps are integral to our website revamp process because our web designers and developers in Singapore set the goals of website revamp based on them. Not just any website design and development agency in Singapore pays attention to these steps. Only the ones that are experienced and willing to take the challenges do."
        }
      />
      <AnimImage image={"./corporate_web_development_company.jpg"} />
      <StartAProjectSec2
        head={
          "Are you looking for website revamp service in Singapore? We revamp your website for your business needs."
        }
        text1={
          "Have you ever wondered why a company in Singapore would ever want to get its website revamped only after two years of its launching? There may be dozens of reasons, but all of them come down to one crucial aspect of the business - the demands of the target audience. Many professional web designers and developers don't put due diligence into this factor, but as a reputable agency the customers' experience as well as demands are always in our mind whether we design or develop a website or web application."
        }
        text2={
          "With all the findings and clients' inputs in hand, our designers and developers in Singapore prepare a comprehensive list of design changes and functional modifications which actually define our actions to revamp a website. As we start revamping your company website, we remain available to take new recommendations and act on them. In the end, we strive for excellence in every website revamp website project that we take on. All of our web design and development clients in Singapore have amazing experience working with us. Eager to take a test of our commitment? You are welcome!"
        }
      />
      <StartAProjectAnim />
      <Footer />
    </div>
  );
};

export default page;
