"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../../Common/Button/Button";

const GeneraInformesSection = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollCircle = document.querySelector(".scroll-circle img");

      if (scrollCircle) {
        const scrollPosition = window.scrollY;
        scrollCircle.style.transform = `translateY(${scrollPosition * 0.2}px)`; // Reduced the multiplier to 0.2 for a smoother effect
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="genera-informes-two home-section-1 relative mt-[-400px] pt-[105px]">
      <div className=" mx-auto px-4 max-w-[1200px]">
        <div className="row flex flex-wrap justify-between items-center mb-12">
          <div className="col-lg-6 w-full lg:w-1/2">
            <div className="genera-informes-content relative z-10">
              <div className="section-title style-two mt-0 mb-9">
                <p className="text-[18px] leading-[30px] pixFadeUp delay-[0.3s] mt-[28px] text-[#797687] ">
                  With the Embedsy Portal you have your own analytics platform
                  that you can use to provide reports to your customers,
                  employees and business partners in a cost-effective and secure
                  way. This is a complete white-labeled solution that can be
                  fully customized in terms of look and feel which will make you
                  stand out from the crowd.
                  <br />
                  <br />
                  The Embedsy Portal runs on Microsoft Fabric or Power BI
                  Embedded capacities and allows you to give access to unlimited
                  users without the need for Power BI PRO licenses.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 w-full lg:w-1/2 text-center pixFade">
            <Image
              src="/main-logo.png"
              alt="informes"
              className="max-w-[350px] mx-auto"
              width={350}
              height={200} // Specify a height value
            />
          </div>
        </div>

        <div className="row flex flex-wrap justify-between items-center mb-12">
          <div className="col-lg-6 w-full lg:w-1/2 pr-[20px] pixFade">
            <Image
              src="/img1.jpeg"
              alt="informes"
              width={500}
              height={300} // Specify a height value
            />
          </div>
          <div className="col-lg-6 w-full lg:w-1/2 px-[30px]">
            <div className="genera-informes-content relative z-10">
              <div className="section-title style-two mt-0 mb-9">
                <p className="text-[18px] leading-[30px] mt-[28px] text-[#797687] pixFadeUp delay-[0.3s] visible">
                  What previously called for a lot of resources and hefty
                  budgets, is now available to everyone with just a few clicks.
                  If you&apos;re providing data-related services or simply want
                  to show Power BI reports to users, you now can scale up your
                  business by allowing users to consume data in a fully
                  customizable, easy-to-maintain, and secure Power BI Embedded
                  platform.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row flex flex-wrap justify-between items-center">
          <div className="col-lg-6 w-full lg:w-1/2">
            <div className="genera-informes-content relative z-10">
              <div className="section-title style-two mt-0 mb-9">
                <h2 className="font-medium text-[36px] Poppins pixFadeUp delay-[0.3s] text-[#2b2350]">
                  Want to see what Embedsy looks like in action?
                </h2>
                <p className="text-[18px] leading-[30px] mt-[28px] text-[#797687] pixFadeUp delay-[0.3s]">
                  Experience our demo platform today! Simply use the provided
                  credentials and see what our platform looks like from an
                  end-user perspective. Of course, as an administrator of the
                  platform, you get many more functions and options. If you
                  would like to see those in action as well, sign up for a free
                  trial or{" "}
                  <a
                    href="https://outlook.office365.com/book/embedsy_bookings@kteam.ch/s/NBfNDY-ZaUabgAK-SyPGqg2"
                    target="_blank"
                    className="text-[#007bff]"
                  >
                    book a demo
                  </a>{" "}
                  with us.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 w-full lg:w-1/2">
            <Button
              href="https://portal.embedsy.io/login?user=demo@embedsy.io&pass=TestingTheEmbedsyPortal!"
              text="Access the demo portal for free"
              target="_blank"
              variant="secondary"
              extraParent="text-center"
            />

            {/*
            <div className="p-4 font-extrabold text-[#797687] text-[16px] leading-[30px] Poppins rounded">
           
              <b>Demo Log-In Credentials:</b>
              <br />
              <br />
              <b>User:</b>
              <span className="text-[16px] font-normal text-[#797687] ">
                {" "}
                portal-tester@bisamurai.com
              </span>
              <br />
              <br />
              <b>Password:</b>
              <span className="text-[16px] font-normal text-[#797687] ">
                {" "}
                Thanks_For_Testing!
              </span>
            </div>
            */}
          </div>
        </div>
      </div>

      <div
        className="scroll-circle absolute bottom-[20%] z-0 pointer-events-none pixFadeRight"
        style={{ visibility: "visible", animationName: "pixFadeRight" }}
      >
        <img
          src="/circle2.png"
          alt="circle"
          className="transform translate-y-[180px]"
          style={{
            transform:
              "translate3d(0px, 119.297px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)",
            WebkitTransform:
              "translate3d(0px, 119.297px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)",
          }}
        />
      </div>
    </section>
  );
};

export default GeneraInformesSection;
