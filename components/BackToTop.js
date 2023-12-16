import React, { useEffect } from "react";
import "../css/backToTop.css";

const BackToTop = () => {
  useEffect(() => {
    var progressPath = document.querySelector(".progress-wrap path");
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "stroke-dashoffset 10ms linear";

    var updateProgress = function () {
      var scroll = window.scrollY || window.pageYOffset;
      var height = document.body.scrollHeight - window.innerHeight;
      var progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress;
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress);

    var offset = 50;

    window.addEventListener("scroll", function () {
      var progressWrap = document.querySelector(".progress-wrap");
      if (window.scrollY > offset) {
        progressWrap.classList.add("active-progress");
      } else {
        progressWrap.classList.remove("active-progress");
      }
    });

    document
      .querySelector(".progress-wrap")
      .addEventListener("click", function (event) {
        event.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("scroll", function () {
        var progressWrap = document.querySelector(".progress-wrap");
        if (window.scrollY > offset) {
          progressWrap.classList.add("active-progress");
        } else {
          progressWrap.classList.remove("active-progress");
        }
      });
      document
        .querySelector(".progress-wrap")
        .removeEventListener("click", function (event) {
          event.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        });
    };
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  return (
    <>
      <div className="paginacontainer">
        <div className="progress-wrap">
          <svg
            className="progress-circle svg-content"
            width="100%"
            height="100%"
            viewBox="-1 -1 102 102"
          >
            <path
              d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
              fill="#1fb141"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default BackToTop;
