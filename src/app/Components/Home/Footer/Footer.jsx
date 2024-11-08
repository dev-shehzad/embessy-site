import React from "react";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#f8f7fc] py-10">
      <div className="cont max-w-[1200px] mx-auto px-[20px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex-col ">
          {/* Company Section */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-[rgb(43, 35, 80);] text-[20px] mb-[20px] font-medium">Company</h3>
            <ul className="mt-2 space-y-2 text-[#6c6684]">
              <li>
                <a href="/about" className="text-[16px] text-[rgb(121, 118, 135)] font-normal">
                  About
                </a>
              </li>
              <li>
                <a href="/about#team" className="text-[16px] text-[rgb(121, 118, 135)] font-normal">
                  Team
                </a>
              </li>
              <li>
                <a href="/workingatembedsy" className="text-[16px] text-[rgb(121, 118, 135)] font-normal">
                  Working at Embedsy
                </a>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-[rgb(43, 35, 80);] text-[20px] mb-[20px] font-medium">Support</h3>
            <ul className="mt-2 space-y-2 text-[#6c6684]">
              <li>
                <a href="/document_home" className="text-[16px] text-[rgb(121, 118, 135)] font-normal">
                  Documentation
                </a>
              </li>
              <li>
                <a href="/documentation/changelog" className="text-[16px] text-[rgb(121, 118, 135)] font-normal">
                  Change Log
                </a>
              </li>
            </ul>
          </div>

          {/* Connect with Us Section */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-[rgb(43, 35, 80);] text-[20px] mb-[20px] font-medium">
              Connect with us
            </h3>
            <div className="mt-2">
              <a href="https://www.linkedin.com/company/embedsy" className="text-[#2b2350] hover:text-[#7052fb] ">
                <div className="border border-[rgb(218, 216, 227)]] text-[rgb(150, 148, 161)] hover:bg-[#7052fb] hover:text-white transition-all ease-linear duration-[0.3s] hover:shadow-md w-10 h-10 rounded-full flex justify-center items-center">
                  <FaLinkedinIn size={20} />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row justify-between text-[16px] Poppins text-[] border-t border-[#e1e1e9] pt-5">
          <p className="text-[#6c6684] text-[16px]">
            &copy; 2024 All Rights Reserved by Embedsy
          </p>
          <p className="text-[#6c6684] text-sm mt-1">
            <a href="/privacy" className="text-[16px] text-[rgb(121, 118, 135)] font-normal">
              Privacy & Policy
            </a>{" "}
            |{" "}
            <a href="/terms" className="text-[16px] text-[rgb(121, 118, 135)] font-normal">
              Terms
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
