import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative h-[100px] bg-gradient-to-r from-[#10b3d6] to-[#1d2746]">
      <Image
        className="absolute left-[5%] bottom-0 w-[100px] h-auto lg:w-[150px] lg:h-[115px]"
        src="/v.svg"
        alt="v"
        width={100}
        height={115} // You can adjust the width and height as needed
      />
      <Image
        className="absolute right-[5%] bottom-0 w-[100px] h-auto lg:w-[120px]"
        src="/b_leaf.svg"
        alt="b_leaf"
        width={100}
        height={120}
      />
      <Image
        className="absolute top-0 left-0 right-0 w-full h-auto z-0"
        src="/banner_bg.png"
        alt="banner_bg"
        width={1200} // Adjust width as per your container
        height={400}
      />


    </section>
  );
};

export default HeroSection;
