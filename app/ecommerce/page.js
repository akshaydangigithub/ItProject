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
        image={"./psg_ecommerce.jpg"}
        head1={"PSG grant"}
        head2={"for Ecommerce site."}
        text1={
          "An ecommerce company can only achieve its goal after its customers achieve theirs. A website"
        }
        text2={
          "offering visitors a nice and easy 'cart to checkout' experience does half the job, and the PSG (70%"
        }
        text3={
          "grant) is there to support your business in Singapore. For the rest, you want to have an ecommerce"
        }
        text4={
          "web design company that knows the art of crafting a customer-centric user interface."
        }
      />
      <ScrollAnim
        bgcolor={"transparent"}
        text1={"Don't miss the opportunity, grab 70% PSG grant"}
        text6={"And start your online ecommerce website today"}
        srcLinkimage={
          "https://www.aidentity.sg/images/pages/psg_ecommerce_singapore.jpg"
        }
      />
      <StartAProjectSec1
        head={
          "Since 2018, the Singapore Government has been offering support to local small and medium enterprises through Productivity Solutions Grant (PSG) that is meant to help them improve operations and productivity with the utilisation of IT equipment and services. Did you just qualify for PSG (70% grant) and cannot wait further to start your ecommerce website? Aidentity is ready to help you with everything from development to maintenance for PSG."
        }
        text1={
          "Throughout all the years we've been working in Singapore, we've identified six most important aspects of ecommerce businesses which include solutions for customer management, financial transactions, inventory tracking, data analytics, maintenance tweaks, and security implementations. Our expertise in designing and developing ecommerce solutions spans across all areas of ecommerce businesses to bring your customers, regardless of their location in Singapore, a seamless buying experience."
        }
        text2={
          "An ecommerce website that cannot draw your customers back to the store is not a good site at all. Being the owner of a business in Singapore, you'll surely try to make the most of your PSG (70% grant). But you still need a web design agency in Singapore that can take all the hassles, from designing your website, handling required integrations, setting up the store and payment methods, developing solutions (if required), launching the site, and fulfilling the maintenance requirements on an ongoing basis. If that sounds like you, you are exactly where you should be to get your PSG project handled by people with the right set of skills."
        }
      />
      <AnimImage image={"./psg_ecommerce_website_singapore.jpg"} />
      <StartAProjectSec2
        head={
          "Are you looking for Ecommerce web development agency that offers up to 70% PSG? Aidentity will be the best choice for you."
        }
        text1={
          "A sure thing about our agency in Singapore is that we don't just design an ecommerce website and ask you to pay. We don't talk our ecommerce clients in Singapore into choosing a predesigned template that may lack the originality and exclusivity your business model comprises. Our web design and development professionals follow the harder yet more appropriate way. Not only can our designers help you get a freshly designed ecommerce website, our developers in Singapore can boost its usability by integrating sector-specific tools and functions to make the PSG project a success."
        }
        text2={
          "Maintenance is the key to keeping an ecommerce website in service to customers, which is an obvious goal of any company in Singapore. With this constant demand in mind, our web designers and developers in Singapore have a well-thought work process to serve PSG clients as long as they need even after launching their ecommerce websites. Once you have an agency design your website; it's only the beginning of a bigger journey where responsibilities are many, and our agency is always ready to cooperate with you."
        }
        text3={
          "Besides PSG website maintenance, updates to the entire system (ecommerce module) are important. Our decade-long experience in the business sector of Singapore has brought us the confidence and strength to design and develop any custom ecommerce module that passes even the most stringent penetration and security assessment. You may include any custom module as part of the PSG project or a maintenance deal. Professional designers and developers at our agency in Singapore are able to deliver excellence either way."
        }
      />
      <StartAProjectAnim />
      <Footer />
    </div>
  );
};

export default page;
