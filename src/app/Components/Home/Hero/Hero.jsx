"use client";
import React, { useEffect, useState } from "react";
const PageBanner = ({ name, blogPost }) => {
  const [scrollY, setScrollY] = useState(0);
  const { text = "", date = "", profileName = "", by = "" } = blogPost || {}; // Destructure properties from blogPost

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); // Update scroll position
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Subtle movement effect: Move the circle slightly based on scroll position
  const svgTransform = {
    transform: `translate(${scrollY * 0.05}px, ${scrollY * 0.05}px)`, // Slight movement
  };

  return (
    <section className="bg-[#f7ecd7] -mt-[80px] text-center h-[200px] sm:h-[200px] md:h-[250px] lg:h-[300px] flex items-center relative overflow-hidden">
      <div className="mx-auto relative z-[100]">
        <div className="page-title-wrapper">
          <h1 className="text-[20px] sm:text-[35px] md:text-[40px] block font-extrabold text-[#2b2350] Poppins z-[1000] relative">
            {name}
          </h1>
        </div>

        {/* Add the new blogPost content here */}
        <div className="page-title-wrapper">
          <h1 className="text-[#797687] Poppins font-[400] text-[14px] md:text-[16px]">
            {date}
          </h1>
          <p className="text-[28px] md:text-[32px] lg:text-[40px] font-[600] text-[#2b2350] Poppins z-[1000] px-[16px]">
            {text}
          </p>
          <h1 className="text-[#797687] Poppins font-[400] text-[14px] md:text-[16px]">
            <span className="pr-2">{by}</span>
            {profileName}
          </h1>
        </div>
      </div>

      {/* SVG Circle with subtle movement */}
      <svg
        className="circle absolute -top-[51%] -left-[15%] z-10"
        style={svgTransform} // Apply the subtle movement style
        xmlns="http://www.w3.org/2000/svg"
        width="950px"
        height="950px"
      >
        <path
          fillRule="evenodd"
          stroke="rgb(250, 112, 112)"
          strokeWidth="100px"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          opacity="0.051"
          fill="none"
          d="M450.000,50.000 C670.914,50.000 850.000,229.086 850.000,450.000 C850.000,670.914 670.914,850.000 450.000,850.000 C229.086,850.000 50.000,670.914 50.000,450.000 C50.000,229.086 229.086,50.000 450.000,50.000 Z"
        ></path>
      </svg>

      {/* Animated Balls - z-index adjusted to be behind the title */}
      <ul className="absolute h-full w-full max-md:opacity-[0.6] m-0 p-0 list-none top-0 left-0 text-center animate-ball z-[1]">
        <li className="ball"></li>
        <li className="ball"></li>
        <li className="ball"></li>
        <li className="ball"></li>
        <li className="ball"></li>
      </ul>
    </section>
  );
};

export default PageBanner;
