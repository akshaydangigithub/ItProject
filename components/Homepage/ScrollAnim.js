"use client";
import React, { useEffect } from "react";
import "@/css/scrollAnim.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ScrollAnim = ({
  bgcolor,
  srcLink,
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
  text8,
  text9,
  text10,
  srcLinkimage,
}) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      var section3 = document.querySelector(".section3");

      function ScrollAnim() {
        var tl = gsap.timeline();

        // Create a ScrollTrigger for the first animation
        ScrollTrigger.create({
          trigger: section3,
          start: "top 100%",
          end: "bottom top",
          scrub: 1,
          // markers: true,
          animation: tl,
        });

        tl.from(".anim_line1 h1", {
          transform: "translateX(100%)",
          stagger: 0.1,
          duration: 2,
          ease: "Expo.ease",
          // markers: true,
        });

        tl.from(".anim_line2 h1", {
          transform: "translateX(-100%)",
          stagger: 0.1,
          duration: 2,
          delay: -1.5,
          ease: "Expo.ease",
          // markers: true,
        });
      }
      ScrollAnim();
    }
  }, []);
  return (
    <>
      <div
        style={{ background: bgcolor }}
        className="section3 position-relative d-flex align-items-center justify-content-center "
      >
        {srcLink && (
          <div className="video">
            <video src={srcLink} autoPlay loop muted></video>
          </div>
        )}

        {srcLinkimage && (
          <div className="video">
            <img
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
              src={srcLinkimage}
              alt=""
            />
          </div>
        )}

        <div className="section3_content">
          <div className="anim_line1">
            <h1>
              {text1 && <span className="me-5">{text1}</span>}
              {text2 && <span className="me-5">{text2}</span>}
              {text3 && <span className="me-5">{text3}</span>}
              {text4 && <span className="me-5">{text4}</span>}
              {text5 && <span className="me-5">{text5}</span>}
            </h1>
          </div>
          <div className="anim_line2">
            <h1>
              {text6 && <span className="me-5">{text6}</span>}
              {text7 && <span className="me-5">{text7}</span>}
              {text8 && <span className="me-5">{text8}</span>}
              {text9 && <span className="me-5">{text9}</span>}
              {text10 && <span className="me-5">{text10}</span>}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrollAnim;
