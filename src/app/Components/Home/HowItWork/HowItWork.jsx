"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image"; // Import the Image component
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../../Common/Button/Button";

const HowItWork = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <>
      <section className="bg-gradient-to-br from-[#FBCA15] to-[#c8a116] p-[111px_0_120px] overflow-hidden text-white relative m-0">
        <div className="max-w-[1200px] mx-auto px-[15px]">
          <div className="absolute inset-0">
            <Image
              src="/ellipse.png"
              alt="bg"
              className="w-full h-full object-cover"
              layout="fill" // This will cover the parent element
              objectFit="cover"
            />
          </div>
          <div className=" mx-auto relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 mb-20">
              <div className="w-full">
                <div className="px-[15px]">
                  <h2
                    className="font-medium text-[36px] Poppins pixFadeUp delay-[0.3s] text-[#2b2350]"
                    data-aos="fade-up"
                  >
                    What exactly is the Embedsy Portal?
                  </h2>
                  <p
                    className="text-[18px] mt-[28px] mb-[16px] Poppins text-white"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <b>
                      Embedsy was created by data professionals for data
                      professionals.
                    </b>{" "}
                    We understand how difficult it gets to retain clients in
                    this business or have Unique Selling Points to offer
                    &quot;something more&quot; than others.
                    <br />
                    <br />
                    We simply asked the data community how they&apos;d like to
                    deliver their reports to the end-user. Their answers is what
                    made Embedsy.
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] mb-20">
              <div className="w-full" data-aos="fade-up">
                <Image
                  src="/hiw.jpeg"
                  alt="informes"
                  className="max-w-full"
                  width={600} // Provide a specific width
                  height={400} // Provide a specific height
                />
              </div>
              <div
                className="w-full mt-[28px] bg-[url(/circle2.png)]"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="text-lg font-light leading-7">
                  <p className="text-[18px] Poppins text-white">
                    With our Power BI Embedded Analytics platform secured with
                    Microsoft Entra, you can distribute dozens, hundreds, or
                    even thousands of reports to an unlimited number of users at
                    a fraction of the regular costs because End-Users
                    aren&apos;t required to have Power BI licenses.
                    <br />
                    <br />
                    Together with our offering for custom development, you can
                    soon have your very own Analytics platform.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="w-full bg-[url(/circle2.png)]" data-aos="fade-up">
                <div className="text-lg font-light leading-7">
                  <p className="text-[18px] mt-[28px] mb-[16px] Poppins text-white">
                    Embedsy is a SaaS-like platform that you can customize to
                    fully reflect your brand, address challenges your clients
                    face, and allow instant access to their data on any device,
                    at any time.
                    <br />
                    <br />
                    {/*Write-back capabilities, notifications on custom data triggers, custom web app components or the ability to connect nearly all cloud and on-premises data sources is what makes Embedsy something more than just another tool to make your work a little bit easier. it&apos;s an accelerator to your company's growth.*/}
                  </p>
                </div>
              </div>
            </div>
            <div
              className="w-full  flex max-md:flex-col gap-[30px] justify-center  items-center  mt-[30px]"
              // data-aos="fade-up"
              // data-aos-delay="300"
            >
              {/* <Link
                href="https://outlook.office365.com/book/embedsy_bookings@kteam.ch/s/NBfNDY-ZaUabgAK-SyPGqg2"
                target="_blank"
                className="text-[15px] leading-[28px] text-nowrap whitespace-nowrap Poppins  hover:text-white hover:shadow-xl hover:bg-[#7052fb] border border-[#7052fb] text-[#7052fb] font-medium rounded-[30px] transition-all ease-linear duration-[0.3s] py-[8px] px-[30px]"
              >
                Book a Free Demo
              </Link> */}
              <Button
                href="https://outlook.office365.com/book/embedsy_bookings@kteam.ch/s/NBfNDY-ZaUabgAK-SyPGqg2"
                target="_blank"
                text="Book a Free Demo"
                variant="secondary"
              />
              {/* <Link
                href="/guided_installation"
                target="_blank"
                className="text-[15px] leading-[28px] Poppins whitespace-nowrap text-nowrap hover:text-white hover:bg-[#7052fb] border border-[#7052fb] text-[#7052fb] font-medium rounded-[30px] hover:shadow-xl transition-all ease-linear duration-[0.3s] py-[8px] px-[30px]"
              >
                Get the Embedsy Portal
              </Link> */}
              <Button
                href="/guided_installation"
                target="_blank"
                text="Get the Embedsy Portal"
                variant="secondary"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWork;
