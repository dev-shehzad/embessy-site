"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaMicrosoft } from "react-icons/fa";
import Image from "next/image";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; // Import eye icons from react-icons
import Button from "../../Common/Button/Button";

const Samurai = () => {
  const PasswordInput = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
      setShowPassword(!showPassword);
    };

    return (
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          className="w-full px-3 py-2 border rounded focus:outline-orange-500"
          placeholder="*****"
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 flex items-center pr-3"
          onClick={handleTogglePassword}
        >
          {showPassword ? (
            <AiOutlineEyeInvisible className="w-5 h-5 text-gray-500" />
          ) : (
            <AiOutlineEye className="w-5 h-5 text-gray-500" />
          )}
        </button>
      </div>
    );
  };

  return (
    <section className="my-[60px]">
      <div className="max-w-[1200px] w-full mx-auto px-[20px] md:flex gap-[20px] items-center justify-center">
        {/* 
        box container
        <div className="bg-white rounded-lg border-r border-r-[#dddddd] flex gap-x-[40px] overflow-hidden border-t border-l pb-[16px] border-[2px] border-left border-b border-b-[#dddddd] border-[#dddddd] md:overflow-y-scroll min-h-[50vh]">
          <div className="w-full mt-[16px] ml-[16px] hidden md:flex">
            <Image
              src="/login-image.jpg"
              alt="Samurai"
              width={500} 
              height={300} 
              className="object-cover w-full h-full rounded-[20px]"
            />
          </div>

          <div className="w-full md:w-[70%] text-[rgba(47, 43, 61, 0.78)] p-4">
            <div className="flex items-center flex-col">
              <Image
                src="/main_logo.png"
                alt="Logo"
                width={300} 
                height={130} 
                className="w-[300px] h-[130px] mb-4"
              />

              <h2 className="text-[26px] font-medium text-[rgba(47, 43, 61, 0.78)] Poppins">
                BI Samurai Portal
              </h2>
              <p className="text-[18px] font-normal text-[rgba(47, 43, 61, 0.68)] Poppins">
                Welcome to the BI Samurai Portal
              </p>

              <button className="flex items-center gap-x-[10px] text-[18px] font-normal text-[rgba(47, 43, 61, 0.68)] Poppins px-4 py-2 rounded w-full justify-center mb-4">
                <FaMicrosoft />
                Log in with Microsoft
              </button>

              <form className="w-full">
                <div className="mb-4">
                  <label className="text-[16px] font-normal leading-[24px] text-[#374151]">Email</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border rounded focus:outline-orange-500"
                    placeholder="admin@vuexy.com"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Password</label>
                  <PasswordInput />
                  <p className="text-red-500 text-sm mt-2">
                    Password must be at least 5 characters
                  </p>
                </div>

                <div className="flex justify-between items-center mb-6">
                  <a href="#" className="text-orange-400 text-[15px] font-medium">
                    Forgot Password?
                  </a>
                </div>

                <button className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 transition-colors">
                  Login
                </button>
              </form>

              <p className="text-[16px] font-normal mt-[14px]">
                New on our platform?{" "}
                <a href="#" className="text-orange-400 hover:underline">
                  Create an account
                </a>
              </p>
            </div>
          </div>
        </div> */}
      </div>
      <div>
        {/* section 2 */}
        <section className="pt-[100px] bg-white">
          <div className="max-w-[1200px] px-[20px] mx-auto">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-1/2">
                <h3 className="text-[28px] font-semibold leading-[34px] text-[#2b2350] mb-[30px]">
                  <span className="mb-[10px]">
                    Not sure if the Embedsy Portal is for you?
                  </span>
                  <br />
                  <b className="mt-[20px]">
                    Book a free demo and let us answer all your questions
                  </b>
                </h3>
              </div>

              <Button
                href="https://outlook.office365.com/book/embedsy_bookings@kteam.ch/s/NBfNDY-ZaUabgAK-SyPGqg2"
                target="_blank"
                extraParent="w-full lg:w-1/2 text-center"
                text="Book a Free Demos"
                variant="secondary" // This is the secondary button style
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Samurai;
