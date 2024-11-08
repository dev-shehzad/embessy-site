"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import Button from "../../Common/Button/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // If the current scroll position is greater than 50px, set the navbar to be non-transparent
      if (currentScrollPos > 50) {
        setIsScrolled(true);
      } else {
        // If the scroll position is 50px or less, make it transparent
        setIsScrolled(false);
      }
    };

    // Run the handleScroll function once on initial load to check the current scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`py-5 mx-auto w-full sticky top-0 z-[2000] transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex justify-between items-center max-w-[1200px] px-4 lg:px-0">
        {/* Menu Icon */}
        <div
          className="lg:hidden flex flex-col justify-between cursor-pointer"
          onClick={toggleMenu}
        >
          <HiOutlineBars3CenterLeft size={30} />
        </div>

        {/* Logo */}
        <div className="lg:block flex-grow lg:flex-grow-0 text-center lg:text-left">
          <Link href="/">
            <Image
              src="/main-logo.png"
              alt="site logo"
              className="max-w-[150px] mx-auto lg:mx-0"
              width={150}
              height={50}
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav
          className={`fixed top-0 left-0 w-full h-full bg-white lg:bg-transparent lg:static lg:w-auto lg:h-auto lg:flex items-center justify-center gap-[30px] z-50 transition-transform duration-300 ease-in-out transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } lg:transform-none`}
        >
          {/* Close Icon for Mobile Menu */}
          {isOpen && (
            <div
              className="absolute max-md:text-[#888888] top-4 right-4 text-3xl cursor-pointer lg:hidden"
              onClick={closeMenu}
            >
              &times;
            </div>
          )}

          <ul className="flex flex-col lg:flex-row items-start lg:items-center lg:justify-center gap-[10px] pt-20 w-full max-md:pt-[50px] lg:pt-0">
            <li className="w-full lg:w-auto px-[0px]">
              <Link
                href="/"
                className="block max-md:text-[#888888] px-[25px] font-medium text-[16px] hover:text-[#E83E79] transition-all ease-in-out duration-[0.6s] underline-offset-4 border-b-[1px] border-gray-300 border-opacity-[0.5] lg:border-0 py-1 lg:py-0"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li className="w-full lg:w-auto px-[0px]">
              <Link
                href="/about"
                className="block max-md:text-[#888888] px-[25px] font-medium text-[16px] hover:text-[#E83E79] transition-all ease-in-out duration-[0.6s] underline-offset-4 border-b-[1px] border-gray-300 border-opacity-[0.5] lg:border-0 py-1 lg:py-0"
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li className="w-full lg:w-auto px-[0px]">
              <Link
                href="/blogs"
                className="block max-md:text-[#888888] px-[25px] font-medium text-[16px] hover:text-[#E83E79] transition-all ease-in-out duration-[0.6s] underline-offset-4 border-b-[1px] border-gray-300 border-opacity-[0.5] lg:border-0 py-1 lg:py-0"
                onClick={closeMenu}
              >
                Blog
              </Link>
            </li>
            <li className="w-full lg:w-auto px-[0px]">
              <Link
                href="/faq"
                className="block max-md:text-[#888888] px-[25px] font-medium text-[16px] hover:text-[#E83E79] transition-all ease-in-out duration-[0.6s] underline-offset-4 border-b-[1px] border-gray-300 border-opacity-[0.5] lg:border-0 py-1 lg:py-0"
                onClick={closeMenu}
              >
                FAQ
              </Link>
            </li>
            <li className="w-full lg:w-auto px-[0px]">
              <Link
                href="/contact"
                className="block max-md:text-[#888888] px-[25px] font-medium text-[16px] hover:text-[#E83E79] transition-all ease-in-out duration-[0.6s] underline-offset-4 border-b-[1px] border-gray-300 border-opacity-[0.5] lg:border-0 py-1 lg:py-0"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
            <li className="w-full lg:w-auto px-[0px]">
              <Link
                href="/document_home"
                className="block max-md:text-[#888888] px-[25px] font-medium text-[16px] hover:text-[#E83E79] transition-all ease-in-out duration-[0.6s] underline-offset-4 border-b-[1px] border-gray-300 border-opacity-[0.5] lg:border-0 py-1 lg:py-0"
                onClick={closeMenu}
              >
                Documentation
              </Link>
            </li>
          </ul>

          {/* Sign Up Button */}
          <Button
          extraParent="max-md:mt-6 max-md:mx-4 mt-0 mx-0"
            href="/guided_installation"
            text="Free Sign Up"
            variant="secondary" // This is the main button style
          />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
