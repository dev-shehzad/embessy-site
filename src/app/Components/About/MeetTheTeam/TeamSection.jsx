"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect } from "react";
import "./style.css"; // Ensure this file path is correct
import { FaLinkedinIn } from "react-icons/fa";

const TeamSection = () => {
  //  Handle scrolling to the section based on the URL hash
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []); // This effect runs once on page load

  return (
    <section id="team" className="teams py-28 relative">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="section-title text-center mb-20">
          <h3
            id="team"
            className="sub-title text-lg pixFadeUp font-medium text-red-400 uppercase tracking-wider"
          >
            Meet The Team
          </h3>
          <h2 className="title text-4xl pixFadeUp font-semibold text-gray-900 mt-4">
            Awesome Embedsy Team
          </h2>
        </div>

        <div className="flex flex-wrap -mx-4">
          {/* Team Member 1 */}
          <div className="w-full cursor-pointer group lg:w-1/3 md:w-1/2 px-4 mb-16">
            <div className="team-member mx-auto max-w-xs relative">
              <div className="member-avatar relative overflow-hidden rounded-lg">
                <Image
                  src="/pascal.png"
                  alt="Pascal Kiefer"
                  width={370}
                  height={450}
                  className="w-full h-auto"
                />
                {/* Social Icon */}
                <ul className="member-social absolute bottom-11 z-[100] right-[45%] opacity-0 group-hover:opacity-100 transition-opacity ease-in-out">
                  <li>
                    <Link
                      href="https://www.linkedin.com/in/pascalkiefer/"
                      target="_blank"
                      className="hover:bg-white text-white hover:text-red-400 transition-all ease-linear duration-[0.3s] group"
                      rel="noopener noreferrer"
                      style={{
                        border: "1px solid white",
                        borderRadius: "50%",
                        width: "50px",
                        height: "50px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <FaLinkedinIn size={30} />
                    </Link>
                  </li>
                </ul>
                {/* SVG elements */}
                <svg
                  className="layer-one absolute inset-x-0 bottom-[-50%] opacity-60 transition-transform duration-500 ease-in-out group-hover:translate-y-[-60%] group-hover:opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  width="370px"
                  height="250px"
                >
                  <path
                    fillRule="evenodd"
                    className="layer-one-path"
                    fill="rgb(250, 112, 112)"
                    d="M-0.000,79.999 C-0.000,79.999 85.262,-11.383 187.324,50.502 C297.703,117.429 370.000,-0.001 370.000,-0.001 L370.000,203.999 C370.000,207.313 367.314,209.999 364.000,209.999 L6.000,209.999 C2.686,209.999 -0.000,207.313 -0.000,203.999 L-0.000,79.999 Z"
                  ></path>
                </svg>
                <svg
                  className="layer-two absolute inset-x-0 bottom-[-50%] opacity-0 transition-transform duration-500 ease-in-out group-hover:translate-y-[-40%] group-hover:opacity-100 delay-300"
                  xmlns="http://www.w3.org/2000/svg"
                  width="370px"
                  height="250px"
                >
                  <path
                    fillRule="evenodd"
                    className="layer-two-path"
                    fill="rgb(250, 112, 112)"
                    d="M-0.000,27.999 C-0.000,27.999 95.694,-46.224 188.615,48.781 C278.036,140.208 370.000,57.999 370.000,57.999 L370.000,211.999 C370.000,215.313 367.314,217.999 364.000,217.999 L6.000,217.999 C2.686,217.999 -0.000,215.313 -0.000,211.999 L-0.000,27.999 Z"
                  ></path>
                </svg>
              </div>
              <div className="team-info text-center pt-6">
                <h3 className="name text-xl font-semibold text-gray-900">
                  Pascal Kiefer
                </h3>
                <h4 className="job text-base text-gray-500 font-normal">
                  Co-Founder
                </h4>
              </div>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="w-full cursor-pointer group lg:w-1/3 md:w-1/2 px-4 mb-16">
            <div className="team-member mx-auto max-w-xs relative">
              <div className="member-avatar relative overflow-hidden rounded-lg">
                <Image
                  src="/vlad.png"
                  alt="Vlad Mihanta"
                  width={370}
                  height={450}
                  className="w-full h-auto"
                />
                {/* Social Icon */}
                <ul className="member-social absolute bottom-11 z-[100] right-[45%] opacity-0 group-hover:opacity-100 transition-opacity ease-in-out">
                  <li>
                    <Link
                      href="https://www.linkedin.com/in/vlad-mihanta/"
                      target="_blank"
                      className="hover:bg-white text-white hover:text-red-400 transition-all ease-linear duration-[0.3s] group"
                      rel="noopener noreferrer"
                      style={{
                        border: "1px solid white",
                        borderRadius: "50%",
                        width: "50px",
                        height: "50px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <FaLinkedinIn size={30} />
                    </Link>
                  </li>
                </ul>
                {/* SVG elements */}
                <svg
                  className="layer-one absolute inset-x-0 bottom-[-50%] opacity-60 transition-transform duration-500 ease-in-out group-hover:translate-y-[-60%] group-hover:opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  width="370px"
                  height="250px"
                >
                  <path
                    fillRule="evenodd"
                    className="layer-one-path"
                    fill="rgb(250, 112, 112)"
                    d="M-0.000,79.999 C-0.000,79.999 85.262,-11.383 187.324,50.502 C297.703,117.429 370.000,-0.001 370.000,-0.001 L370.000,203.999 C370.000,207.313 367.314,209.999 364.000,209.999 L6.000,209.999 C2.686,209.999 -0.000,207.313 -0.000,203.999 L-0.000,79.999 Z"
                  ></path>
                </svg>
                <svg
                  className="layer-two absolute inset-x-0 bottom-[-50%] opacity-0 transition-transform duration-500 ease-in-out group-hover:translate-y-[-40%] group-hover:opacity-100 delay-300"
                  xmlns="http://www.w3.org/2000/svg"
                  width="370px"
                  height="250px"
                >
                  <path
                    fillRule="evenodd"
                    className="layer-two-path"
                    fill="rgb(250, 112, 112)"
                    d="M-0.000,27.999 C-0.000,27.999 95.694,-46.224 188.615,48.781 C278.036,140.208 370.000,57.999 370.000,57.999 L370.000,211.999 C370.000,215.313 367.314,217.999 364.000,217.999 L6.000,217.999 C2.686,217.999 -0.000,215.313 -0.000,211.999 L-0.000,27.999 Z"
                  ></path>
                </svg>
              </div>
              <div className="team-info text-center pt-6">
                <h3 className="name text-xl font-semibold text-gray-900">
                  Vlad Mihanta
                </h3>
                <h4 className="job text-base text-gray-500 font-normal">
                  Co-Founder
                </h4>
              </div>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="w-full cursor-pointer group lg:w-1/3 md:w-1/2 px-4 mb-16">
            <div className="team-member mx-auto max-w-xs relative">
              <div className="member-avatar relative overflow-hidden rounded-lg">
                <Image
                  src="/Emanuel.png"
                  alt="Emanuel Stan"
                  width={370}
                  height={450}
                  className="w-full h-auto"
                />
                {/* Social Icon */}
                <ul className="member-social absolute bottom-11 z-[100] right-[45%] opacity-0 group-hover:opacity-100 transition-opacity ease-in-out">
                  <li>
                    <Link
                      href="https://www.linkedin.com/in/emanuel-sergiu-stan-04764b263/"
                      target="_blank"
                      className="hover:bg-white  text-white hover:text-red-400 transition-all ease-linear duration-[0.3s] group"
                      rel="noopener noreferrer"
                      style={{
                        border: "1px solid white",
                        borderRadius: "50%",
                        width: "50px",
                        height: "50px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <FaLinkedinIn size={30} />
                    </Link>
                  </li>
                </ul>
                {/* SVG elements */}
                <svg
                  className="layer-one absolute inset-x-0 bottom-[-50%] opacity-60 transition-transform duration-500 ease-in-out group-hover:translate-y-[-60%] group-hover:opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  width="370px"
                  height="250px"
                >
                  <path
                    fillRule="evenodd"
                    className="layer-one-path"
                    fill="rgb(250, 112, 112)"
                    d="M-0.000,79.999 C-0.000,79.999 85.262,-11.383 187.324,50.502 C297.703,117.429 370.000,-0.001 370.000,-0.001 L370.000,203.999 C370.000,207.313 367.314,209.999 364.000,209.999 L6.000,209.999 C2.686,209.999 -0.000,207.313 -0.000,203.999 L-0.000,79.999 Z"
                  ></path>
                </svg>
                <svg
                  className="layer-two absolute inset-x-0 bottom-[-50%] opacity-0 transition-transform duration-500 ease-in-out group-hover:translate-y-[-40%] group-hover:opacity-100 delay-300"
                  xmlns="http://www.w3.org/2000/svg"
                  width="370px"
                  height="250px"
                >
                  <path
                    fillRule="evenodd"
                    className="layer-two-path"
                    fill="rgb(250, 112, 112)"
                    d="M-0.000,27.999 C-0.000,27.999 95.694,-46.224 188.615,48.781 C278.036,140.208 370.000,57.999 370.000,57.999 L370.000,211.999 C370.000,215.313 367.314,217.999 364.000,217.999 L6.000,217.999 C2.686,217.999 -0.000,215.313 -0.000,211.999 L-0.000,27.999 Z"
                  ></path>
                </svg>
              </div>
              <div className="team-info text-center pt-6">
                <h3 className="name text-xl font-semibold text-gray-900">
                  Emanuel Stan
                </h3>
                <h4 className="job text-base text-gray-500 font-normal">
                  Lead Developer
                </h4>
              </div>
            </div>
          </div>

          {/* Team Member 4 */}
          <div className="w-full cursor-pointer group lg:w-1/3 md:w-1/2 px-4 mb-16">
            <div className="team-member mx-auto max-w-xs relative">
              <div className="member-avatar relative overflow-hidden rounded-lg">
                <Image
                  src="/this_could_be_you.png"
                  alt="This could be you"
                  width={370}
                  height={450}
                  className="w-full h-auto"
                />
                {/* Social Icon */}
                <ul className="member-social absolute bottom-11 z-[100] right-[45%] opacity-0 group-hover:opacity-100 transition-opacity ease-in-out">
                  <li>
                    <Link
                      href="https://www.linkedin.com/company/embedsy"
                      target="_blank"
                      className="hover:bg-white  text-white hover:text-red-400 transition-all ease-linear duration-[0.3s] group"
                      rel="noopener noreferrer"
                      style={{
                        border: "1px solid white",
                        borderRadius: "50%",
                        width: "50px",
                        height: "50px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <FaLinkedinIn size={30} />
                    </Link>
                  </li>
                </ul>
                {/* SVG elements */}
                <svg
                  className="layer-one absolute inset-x-0 bottom-[-50%] opacity-60 transition-transform duration-500 ease-in-out group-hover:translate-y-[-60%] group-hover:opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  width="370px"
                  height="250px"
                >
                  <path
                    fillRule="evenodd"
                    className="layer-one-path"
                    fill="rgb(250, 112, 112)"
                    d="M-0.000,79.999 C-0.000,79.999 85.262,-11.383 187.324,50.502 C297.703,117.429 370.000,-0.001 370.000,-0.001 L370.000,203.999 C370.000,207.313 367.314,209.999 364.000,209.999 L6.000,209.999 C2.686,209.999 -0.000,207.313 -0.000,203.999 L-0.000,79.999 Z"
                  ></path>
                </svg>
                <svg
                  className="layer-two absolute inset-x-0 bottom-[-50%] opacity-0 transition-transform duration-500 ease-in-out group-hover:translate-y-[-40%] group-hover:opacity-100 delay-300"
                  xmlns="http://www.w3.org/2000/svg"
                  width="370px"
                  height="250px"
                >
                  <path
                    fillRule="evenodd"
                    className="layer-two-path"
                    fill="rgb(250, 112, 112)"
                    d="M-0.000,27.999 C-0.000,27.999 95.694,-46.224 188.615,48.781 C278.036,140.208 370.000,57.999 370.000,57.999 L370.000,211.999 C370.000,215.313 367.314,217.999 364.000,217.999 L6.000,217.999 C2.686,217.999 -0.000,215.313 -0.000,211.999 L-0.000,27.999 Z"
                  ></path>
                </svg>
              </div>
              <div className="team-info text-center pt-6">
                <h3 className="name text-xl font-semibold text-gray-900">
                  This Could Be You
                </h3>
                <h4 className="job text-base text-gray-500 font-normal">
                  Future Teammate
                </h4>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    
    
    
  );
};

export default TeamSection;
