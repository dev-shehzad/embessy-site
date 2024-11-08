"use client";
import React, { useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import PageBanner from "../Components/Home/Hero/Hero";
import Link from "next/link";

const page = () => {
  return (
    <div className=" overflow-x-hidden max-w-screen">
      <PageBanner name="Working at embedsy" />
      <section className="">
        <div className="max-w-[1200px] w-full mx-auto">
          <div className=" flex flex-wrap lg:flex-nowrap py-[100px] px-[16px]">
            <div className="w-full lg:w-[50%]">
              <div className=" flex flex-col gap-8 font-Poppins font-[400] text-[18px] text-[#797687] leading-[30px]">
                <p className="font-font-Poppins text-[18px]">
                  Welcome to Embedsy&apos;s open Jobs page! We are a remote-first
                  company with a strong commitment to flexibility and
                  collaboration. While our team primarily works remotely, we
                  also prioritize regular in-person meetings to maintain a
                  strong team dynamic.
                </p>
                <p className="font-font-Poppins">
                  Embedsy is registered in Switzerland, so please ensure you are
                  legally permitted to work with a Swiss-registered company.
                  Additionally, we work with international clients, so fluency
                  in English is a must.
                </p>
                <p className="font-font-Poppins">
                  If you are interested in joining us, please ensure that your
                  application includes a complete CV. We carefully review all
                  applications but will only consider those that provide a full
                  CV, allowing us to understand your experience and fit for our
                  team. We look forward to receiving your application and
                  potentially welcoming you to Embedsy!
                </p>
              </div>
            </div>
            <div className="w-full lg:w-[50%] flex justify-center items-center py-[16px]">
              <div className=" w-[60%] rounded-full ">
                <Image
                  src="/remote_word.png"
                  alt="about"
                  layout="responsive"
                  width={200}
                  height={200}
                  className=" rounded-full "
                />
              </div>
            </div>
          </div>

          <div className="w-full flex items-stretch flex-wrap lg:flex-nowrap justify-center  gap-5 py-[100px] px-[16px]">
            <div
              className="px-7 pt-8 pb-14 w-full lg:w-[30%] bg-transparent rounded-md"
              style={{ boxShadow: "0px 6px 14px 0px rgba(43, 35, 79, 0.1)" }}
            >
              <Link href="mailto:info@embedsy.io"   className="pb-4 font-Poppins hover:text-[#fa7070] transition-all ease-linear duration-300 text-[20px] leading-[30px] font-[600] text-black">
                Full-Stack Developer <br /> (Next.js)
              </Link>
              <div className="mt-7">
                <p className=" text-[#797687] font-[700] text-[16px] leading-7 font-Poppins">
                  Location:{" "}
                  <span className="text-[#797687] font-[400] text-[16px] leading-7 font-Poppins">
                    Remote
                  </span>
                </p>
                <p className=" text-[#797687] font-[700] text-[16px] leading-7 font-Poppins">
                  Workload:
                  <span className="text-[#797687] font-[400] text-[16px] leading-7 font-Poppins">
                    60% - 100%
                  </span>
                </p>
                <p className=" text-[#797687] font-[700] text-[16px] leading-7 font-Poppins">
                  Contract Type:
                  <span className="text-[#797687] font-[400] text-[16px] leading-7 font-Poppins">
                    Permanent
                  </span>
                </p>
              </div>
            </div>

            <div
              className="px-7 pt-8 pb-14 w-full lg:w-[30%] bg-transparent rounded-md"
              style={{ boxShadow: "0px 6px 14px 0px rgba(43, 35, 79, 0.1)" }}
            >
             <Link href="mailto:info@embedsy.io"   className="pb-4 font-Poppins hover:text-[#fa7070] transition-all ease-linear duration-300 text-[20px] leading-[30px] font-[600] text-black">
             UI/UX Designer
              </Link>
              <div className="mt-7">
                <p className=" text-[#797687] font-[700] text-[16px] leading-7 font-Poppins">
                  Location:{" "}
                  <span className="text-[#797687] font-[400] text-[16px] leading-7 font-Poppins">
                    Remote
                  </span>
                </p>
                <p className=" text-[#797687] font-[700] text-[16px] leading-7 font-Poppins">
                  Workload:
                  <span className="text-[#797687] font-[400] text-[16px] leading-7 font-Poppins">
                    40% - 60%
                  </span>
                </p>
                <p className=" text-[#797687] font-[700] text-[16px] leading-7 font-Poppins">
                  Contract Type:
                  <span className="text-[#797687] font-[400] text-[16px] leading-7 font-Poppins">
                    Contract
                  </span>
                </p>
              </div>
            </div>

            <div
              className="px-7 pt-8 pb-14 w-full lg:w-[30%] bg-transparent rounded-md"
              style={{ boxShadow: "0px 6px 14px 0px rgba(43, 35, 79, 0.1)" }}
            >
              <Link href="mailto:info@embedsy.io"   className="pb-4 font-Poppins hover:text-[#fa7070] transition-all ease-linear duration-300 text-[20px] leading-[30px] font-[600] text-black">
           Sales Manager
              </Link>
              <div className="mt-7">
                <p className=" text-[#797687] font-[700] text-[16px] leading-7 font-Poppins">
                  Location:{" "}
                  <span className="text-[#797687] font-[400] text-[16px] leading-7 font-Poppins">
                    Remote
                  </span>
                </p>
                <p className=" text-[#797687] font-[700] text-[16px] leading-7 font-Poppins">
                  Workload:
                  <span className="text-[#797687] font-[400] text-[16px] leading-7 font-Poppins">
                    40% - 60%
                  </span>
                </p>
                <p className=" text-[#797687] font-[700] text-[16px] leading-7 font-Poppins">
                  Contract Type:
                  <span className="text-[#797687] font-[400] text-[16px] leading-7 font-Poppins">
                    Contract
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
