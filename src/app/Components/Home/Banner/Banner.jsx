import React from "react";
import Image from "next/image";
import Button from "../../Common/Button/Button";

const Banner = () => {
  return (
    <>
      <section className="banner relative overflow-hidden h-[1028px]   -mt-[100px] ">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/topshape.png"
            alt="circle"
            className="w-full h-full bg-transparent  "
            loading="lazy"
            width={1200} // Adjust as needed
            height={1028} // Adjust as needed
          />
        </div>
        <div className=" mx-auto px-4 max-w-[1200px]">
          <div className="relative transform translate-y-[50%] flex items-center">
            <div className="w-full lg:w-1/2 order-last lg:order-first px-4">
              <div className="">
                <h1 className="pixFadeUp leading-[65px] max-md:leading-[40px] text-[35px] delay-150 md:text-left sm:text-[40px] md:text-[45px] lg:text-[60px] text-center  text-[#2b2350] mb-5">
                  <span className="font-[900]">
                    Embedded
                    <br /> Analytics
                  </span>{" "}
                  for everyone
                </h1>
                <p className="text-[14px] pixFadeUp delay-150 text-center sm:text-[16px] md:text-[18px] md:text-start font-normal text-[#2b2350] mb-[47px]">
                  Unlock the power of Power BI Embedded
                  <br />
                  with a customisable online portal
                </p>
                <Button
                  extraParent="max-md:text-center"
                  href="https://portal.embedsy.io/login?user=demo@embedsy.io&pass=TestingTheEmbedsyPortal!"
                  text=" Access the demo portal for free"
                  target="_blank"
                  variant="secondary"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
