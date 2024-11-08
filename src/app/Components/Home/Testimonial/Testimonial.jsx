"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image"; // Assuming you're using Next.js
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { LuMoveLeft } from "react-icons/lu";
import { LuMoveRight } from "react-icons/lu";

const slider = [
  {
    profile_img: "/bisimuri.png",
    profile_name: "BI Samurai",
    profile_job: "Pascal Kiefer (CEO)",
    profile_company: "BI Samurai",
    profile_text: `Embedsy's online portal is used by many of our clients and they, as well as us, love it.`,
    stars: 5,
  },
  {
    profile_img: "/aviair.png",
    profile_name: "Avi Air",
    profile_job: "Web Designer",
    profile_company: ".",
    profile_text:
      "Tosser nancy boy super tickety-boo lemon squeezy easy peasy quaint, hunky-dory baking cakes pear shaped butty do one, it's all gone to pot chinwag!",
    stars: 5,
  },
  {
    profile_img: "/veridion.png",
    profile_name: "Veridion",
    profile_job: "Web Designer",
    profile_company: "avi air.",
    profile_text:
      "Tosser nancy boy super tickety-boo lemon squeezy easy peasy quaint, hunky-dory baking cakes pear shaped butty do one, it's all gone to pot chinwag!",
    stars: 5,
  },
];

const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-[50%] max-md:hidden right-[-25px] transform -translate-y-[50%] cursor-pointer z-10"
      onClick={onClick}
    >
      <LuMoveRight className="text-black text-[30px]" />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-[50%]  max-md:hidden left-[-25px] transform -translate-y-[50%] cursor-pointer z-10"
      onClick={onClick}
    >
      <LuMoveLeft className="text-black text-[30px]" />
    </div>
  );
};

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    autoplay: true, // This enables automatic sliding
    autoplaySpeed: 3000, // Adjust this value to set the slide interval
    slidesToScroll: 1,
    nextArrow: <NextArrow />, // Custom right arrow
    prevArrow: <PrevArrow />, // Custom left arrow
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="w-full py-[120px] bg-[#f8f7fc] !overflow-auto">
      <div className="wrapper max-w-[1200px] mx-auto px-[15px]">
        <h3 className="text-[16px] Poppins pixFadeUp uppercase text-[#7052fb] font-medium tracking-[3px] text-center">
          Testimonial
        </h3>
        <h2 className="Poppins text-[#2b2350] pixFadeUp text-center text-[36px] font-semibold mt-2">
          What our clients say about us
        </h2>

        {/* Slider */}
        <Slider {...settings}>
          {slider.map((sliderItem, index) => (
            <div
              key={index}
              className="relative mb-[100px] z-10 mx-[10px] mt-[50px] max-md:mx-0 overflow-visible cursor-pointer"
            >
              <Image
                src="/svgslider.png"
                width={50}
                height={50}
                className="absolute bottom-0 right-7"
              />
              {/* Main Content Container */}
              <div className="bg-[#fff] rounded-[10px] py-[40px] px-[50px] font-normal shadow-custom-2">
                {/* Profile Image and Name */}
                <div className="flex items-center mb-[20px]">
                  <Image
                    src={sliderItem.profile_img}
                    alt={sliderItem.profile_name}
                    width={70}
                    height={70}
                    className="rounded-full mr-[20px]"
                  />
                  <div>
                    <div className="text-[#2b2350] text-[20px] font-semibold Poppins">
                      {sliderItem.profile_name}
                    </div>
                    <div className="text-[#797687] text-[16px] Poppins">
                      {sliderItem.profile_job}
                    </div>
                  </div>
                </div>
                {/* Text */}
                <p className="text-[18px] Poppins text-[#797687] mb-[15px]">
                  {sliderItem.profile_text}
                </p>
                {/* Review Stars */}
                <div className="flex">
                  {Array.from({ length: sliderItem.stars }, (_, i) => (
                    <svg
                      key={i}
                      className="w-[20px]  h-[20px] text-[#ffcc00]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.434 4.408h4.646c.969 0 1.371 1.24.588 1.81l-3.758 2.73 1.434 4.409c.3.921-.755 1.688-1.541 1.112L10 14.187l-3.754 2.709c-.786.576-1.841-.191-1.541-1.112l1.434-4.409-3.758-2.73c-.783-.57-.381-1.81.588-1.81h4.646l1.434-4.408z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Background Container */}
              <div
                key={index}
                className="bg-[#fff] opacity-[0.3] max-md:hidden absolute w-[80%] left-[8%] top-[15px] max-md:top-[0px]  z-[-1] rounded-[10px] py-[40px] px-[50px] font-normal shadow-custom-2 mx-[10px] max-h-[110%] overflow-visible"
              >
                {/* Profile Image and Name */}
                <div className="flex items-center mb-[20px]">
                  <Image
                    src={sliderItem.profile_img}
                    alt={sliderItem.profile_name}
                    width={70}
                    height={70}
                    className="rounded-full mr-[20px]"
                  />
                  <div>
                    <div className="text-[#2b2350] text-[20px] font-semibold Poppins">
                      {sliderItem.profile_name}
                    </div>
                    <div className="text-[#797687] text-[16px] Poppins">
                      {sliderItem.profile_job}, {sliderItem.profile_company}
                    </div>
                  </div>
                </div>
                {/* Text */}
                <p className="text-[18px] opacity-0 Poppins text-[#797687] mb-[15px]">
                  {sliderItem.profile_text}
                </p>
                {/* Review Stars */}
                <div className="flex opacity-0  max-md:hidden">
                  {Array.from({ length: sliderItem.stars }, (_, i) => (
                    <svg
                      key={i}
                      className="w-[20px] h-[20px] text-[#ffcc00]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.434 4.408h4.646c.969 0 1.371 1.24.588 1.81l-3.758 2.73 1.434 4.409c.3.921-.755 1.688-1.541 1.112L10 14.187l-3.754 2.709c-.786.576-1.841-.191-1.541-1.112l1.434-4.409-3.758-2.73c-.783-.57-.381-1.81.588-1.81h4.646l1.434-4.408z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
