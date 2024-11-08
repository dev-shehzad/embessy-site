"use client";
import Link from "next/link";
import { useState, useLayoutEffect, useRef, useEffect } from "react";
import {
  FaAngleDown,
  FaAngleLeft,
  FaAngleRight,
  FaAngleUp,
} from "react-icons/fa";
import HeroSection from "../HeroSection/HeroSection";
import Image from "next/image";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState(null); // No dropdown open by default
  const [activeLink, setActiveLink] = useState(null); // No link active by default
  const sidebarRef = useRef(null);

  const [isMounted, setIsMounted] = useState(false); // Ensure component is mounted before displaying sidebar

  useLayoutEffect(() => {
    // Set mounted to true to avoid sidebar flash
    setIsMounted(true);

    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsOpen(false); // Close sidebar by default on mobile
      } else {
        setIsOpen(true); // Open sidebar on larger screens
      }
    };

    // Run on initial load before the screen is painted
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const savedActiveLink = localStorage.getItem("activeLink");
    const savedActiveDropdown = localStorage.getItem("activeDropdown");

    if (savedActiveLink) setActiveLink(savedActiveLink);
    if (savedActiveDropdown) setActiveDropdown(savedActiveDropdown);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (section) => {
    setActiveDropdown((prev) => (prev === section ? null : section));
    localStorage.setItem(
      "activeDropdown",
      section === activeDropdown ? null : section
    );
  };

  const handleLinkClick = (link, section) => {
    setActiveLink(link);
    localStorage.setItem("activeLink", link);
    localStorage.setItem("activeDropdown", section); // Keep the dropdown open
    if (window.innerWidth <= 768) {
      setIsOpen(false);
    }
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  // don&apos;t show the sidebar until the component has mounted
  if (!isMounted) {
    return null;
  }

  return (
    <>
      <HeroSection />
      <div className="flex">
        <aside
          ref={sidebarRef}
          className={`relative bg-gray-100 z-[1000] pl-[30px] flex justify-end max-md:fixed max-md:left-0 max-md:top-[73px] max-md:pl-0 max-md:h-full min-h-[100vh] transition-all duration-500 ${
            isOpen ? "min-w-[30%] max-md:w-[60%]" : "w-[0px] max-md:w-[0px]"
          }`}
        >
          <div
            className={`w-10 h-10 hidden max-md:flex bg-blue-100 text-2xl text-center fixed left-0 top-1/2 transform -translate-y-1/2 rounded-r cursor-pointer z-50 items-center justify-center`}
            onClick={toggleSidebar}
          >
            {isOpen ? <FaAngleLeft /> : <FaAngleRight />}
          </div>

          <ul className="space-y-5 w-[60%] max-md:w-auto pt-12 px-3 pb-8 text-gray-800">
            <li
              className="relative cursor-pointer font-[600]"
              onClick={() => handleLinkClick("/document_home", null)}
            >
              <Link
                href="/document_home"
                className={`flex items-center space-x-4 text-[17px] font-[600] transition-colors duration-300 hover:text-[#11a6c9] ${
                  activeLink === "/document_home" ? "text-[#11a6c9]" : ""
                }`}
              >
                <Image src="/home.png" alt="Home" width={16} height={16} />
                {isOpen && <span className="font-[600]">Home</span>}
              </Link>
            </li>

            {/* Installation Dropdown */}
            <li className="relative cursor-pointer">
              <div
                className="flex items-center justify-between text-[17px] font-medium transition-all duration-500"
                onClick={() => toggleDropdown("installation")}
              >
                <div className="flex items-center space-x-4">
                  <Image
                    className="object-contain"
                    src="/briefcase.png"
                    alt="Installation"
                    width={16}
                    height={16}
                  />
                  {isOpen && <span className="font-[600]">Installation</span>}
                </div>
                {isOpen && (
                  <span className="text-xl">
                    {activeDropdown === "installation" ? (
                      <FaAngleUp />
                    ) : (
                      <FaAngleDown />
                    )}
                  </span>
                )}
              </div>

              <ul
                className={`ml-8 mt-2 space-y-2 text-[#6b707f] transition-all duration-500 overflow-hidden ${
                  activeDropdown === "installation" ? "max-h-96" : "max-h-0"
                }`}
              >
                <li
                  className="text-[17px] cursor-pointer"
                  onClick={() =>
                    handleLinkClick(
                      "/documentation/installation/server_principle",
                      "installation"
                    )
                  }
                >
                  <Link
                    href="/documentation/installation/server_principle"
                    className={`transition-colors duration-300 hover:text-[#11a6c9] ${
                      activeLink ===
                      "/documentation/installation/server_principle"
                        ? "text-[#11a6c9]"
                        : ""
                    }`}
                  >
                    Service Principal
                  </Link>
                </li>
                <li
                  className="text-[17px] cursor-pointer"
                  onClick={() =>
                    handleLinkClick(
                      "/documentation/installation/entra_security",
                      "installation"
                    )
                  }
                >
                  <Link
                    href="/documentation/installation/entra_security"
                    className={`transition-colors duration-300 hover:text-[#11a6c9] ${
                      activeLink ===
                      "/documentation/installation/entra_security"
                        ? "text-[#11a6c9]"
                        : ""
                    }`}
                  >
                    Entra Security Group
                  </Link>
                </li>
                <li
                  className="text-[17px] cursor-pointer"
                  onClick={() =>
                    handleLinkClick(
                      "/documentation/installation/custom_domain",
                      "installation"
                    )
                  }
                >
                  <Link
                    href="/documentation/installation/custom_domain"
                    className={`transition-colors duration-300 hover:text-[#11a6c9] ${
                      activeLink === "/documentation/installation/custom_domain"
                        ? "text-[#11a6c9]"
                        : ""
                    }`}
                  >
                    Use Custom Domain
                  </Link>
                </li>
                <li
                  className="text-[17px] cursor-pointer"
                  onClick={() =>
                    handleLinkClick(
                      "/documentation/installation/fabric_admin_setting",
                      "installation"
                    )
                  }
                >
                  <Link
                    href="/documentation/installation/fabric_admin_setting"
                    className={`transition-colors duration-300 hover:text-[#11a6c9] ${
                      activeLink ===
                      "/documentation/installation/fabric_admin_setting"
                        ? "text-[#11a6c9]"
                        : ""
                    }`}
                  >
                    Fabric Admin Settings
                  </Link>
                </li>
                <li
                  className="text-[17px] cursor-pointer"
                  onClick={() =>
                    handleLinkClick(
                      "/documentation/installation/workplace_configure",
                      "installation"
                    )
                  }
                >
                  <Link
                    href="/documentation/installation/workplace_configure"
                    className={`transition-colors duration-300 hover:text-[#11a6c9] ${
                      activeLink ===
                      "/documentation/installation/workplace_configure"
                        ? "text-[#11a6c9]"
                        : ""
                    }`}
                  >
                    Workspace Configuration
                  </Link>
                </li>
                <li
                  className="text-[17px] cursor-pointer"
                  onClick={() =>
                    handleLinkClick(
                      "/documentation/installation/auzure_budget",
                      "installation"
                    )
                  }
                >
                  <Link
                    href="/documentation/installation/auzure_budget"
                    className={`transition-colors duration-300 hover:text-[#11a6c9] ${
                      activeLink === "/documentation/installation/auzure_budget"
                        ? "text-[#11a6c9]"
                        : ""
                    }`}
                  >
                    Azure Budget &amp; Cost Control
                  </Link>
                </li>
                <li
                  className="text-[17px] cursor-pointer"
                  onClick={() =>
                    handleLinkClick(
                      "/documentation/installation/update_client_secret",
                      "installation"
                    )
                  }
                >
                  <Link
                    href="/documentation/installation/update_client_secret"
                    className={`transition-colors duration-300 hover:text-[#11a6c9] ${
                      activeLink ===
                      "/documentation/installation/update_client_secret"
                        ? "text-[#11a6c9]"
                        : ""
                    }`}
                  >
                    Update Client Secret
                  </Link>
                </li>
              </ul>
            </li>

            {/* Fabric Dropdown */}
            <li className="relative cursor-pointer">
              <div
                className="flex items-center justify-between text-[17px] font-medium transition-all duration-500"
                onClick={() => toggleDropdown("febric")}
              >
                <div className="flex items-center space-x-4">
                  <Image
                    src="/fabric.png"
                    alt="Fabric"
                    width={16}
                    height={16}
                  />
                  {isOpen && (
                    <span className="font-[600]">
                      Fabric / Embedded Capacity
                    </span>
                  )}
                </div>
                {isOpen && (
                  <span className="text-xl">
                    {activeDropdown === "febric" ? (
                      <FaAngleUp />
                    ) : (
                      <FaAngleDown />
                    )}
                  </span>
                )}
              </div>

              <ul
                className={`ml-8 mt-2 space-y-2 text-[#6b707f] transition-all duration-500 overflow-hidden ${
                  activeDropdown === "febric" ? "max-h-96" : "max-h-0"
                }`}
              >
                <li
                  className="text-[17px] cursor-pointer"
                  onClick={() =>
                    handleLinkClick(
                      "/documentation/fabric-embedded-capacity/febric-power-bi-capacity",
                      "febric"
                    )
                  }
                >
                  <Link
                    href="/documentation/fabric-embedded-capacity/febric-power-bi-capacity"
                    className={`transition-colors duration-300 hover:text-[#11a6c9] ${
                      activeLink ===
                      "/documentation/fabric-embedded-capacity/febric-power-bi-capacity"
                        ? "text-[#11a6c9]"
                        : ""
                    }`}
                  >
                    Power BI Capacity
                  </Link>
                </li>
                <li
                  className="text-[17px] cursor-pointer"
                  onClick={() =>
                    handleLinkClick(
                      "/documentation/fabric-embedded-capacity/power-bi-capacity-monitoring",
                      "febric"
                    )
                  }
                >
                  <Link
                    href="/documentation/fabric-embedded-capacity/power-bi-capacity-monitoring"
                    className={`transition-colors duration-300 hover:text-[#11a6c9] ${
                      activeLink ===
                      "/documentation/fabric-embedded-capacity/power-bi-capacity-monitoring"
                        ? "text-[#11a6c9]"
                        : ""
                    }`}
                  >
                    Power BI Capacity Monitoring
                  </Link>
                </li>
              </ul>
            </li>

            {/* Azure Dropdown */}
            <li className="relative cursor-pointer">
              <div
                className="flex items-center justify-between text-[17px] font-medium transition-all duration-500"
                onClick={() => toggleDropdown("azure")}
              >
                <div className="flex items-center space-x-4">
                  <Image src="/azure.png" alt="Azure" width={16} height={16} />
                  {isOpen && (
                    <span className="font-[600]">Azure Resources</span>
                  )}
                </div>
                {isOpen && (
                  <span className="text-xl">
                    {activeDropdown === "azure" ? (
                      <FaAngleUp />
                    ) : (
                      <FaAngleDown />
                    )}
                  </span>
                )}
              </div>

              <ul
                className={`ml-8 mt-2 space-y-2 text-[#6b707f] transition-all duration-500 overflow-hidden ${
                  activeDropdown === "azure" ? "max-h-96" : "max-h-0"
                }`}
              >
                <li
                  className="text-[17px] cursor-pointer"
                  onClick={() =>
                    handleLinkClick(
                      "/documentation/azure/azure-app-service",
                      "azure"
                    )
                  }
                >
                  <Link
                    href="/documentation/azure/azure-app-service"
                    className={`transition-colors duration-300 hover:text-[#11a6c9] ${
                      activeLink === "/documentation/azure/azure-app-service"
                        ? "text-[#11a6c9]"
                        : ""
                    }`}
                  >
                    App Service
                  </Link>
                </li>

                <li
                  className="text-[17px] cursor-pointer"
                  onClick={() =>
                    handleLinkClick("/documentation/azure/azure-sql", "azure")
                  }
                >
                  <Link
                    href="/documentation/azure/azure-sql"
                    className={`transition-colors duration-300 hover:text-[#11a6c9] ${
                      activeLink === "/documentation/azure/azure-sql"
                        ? "text-[#11a6c9]"
                        : ""
                    }`}
                  >
                    SQL Server & DB
                  </Link>
                </li>

                <li
                  className="text-[17px] cursor-pointer"
                  onClick={() =>
                    handleLinkClick(
                      "/documentation/azure/azure-storage",
                      "azure"
                    )
                  }
                >
                  <Link
                    href="/documentation/azure/azure-storage"
                    className={`transition-colors duration-300 hover:text-[#11a6c9] ${
                      activeLink === "/documentation/azure/azure-storage"
                        ? "text-[#11a6c9]"
                        : ""
                    }`}
                  >
                    Storage account
                  </Link>
                </li>
                {/* Add more links for Azure here */}
              </ul>
            </li>

            {/* Content Dropdown */}
            <li className="relative cursor-pointer">
              <div
                className="flex items-center justify-between text-sm font-medium transition-all duration-500"
                onClick={() => toggleDropdown("content")}
              >
                <div className="flex items-center text-[17px] space-x-4">
                  <Image src="/fav.png" alt="Content" width={16} height={16} />
                  {isOpen && <span className="font-[600]">Embedsy Portal</span>}
                </div>
                {isOpen && (
                  <span className="text-xl">
                    {activeDropdown === "content" ? (
                      <FaAngleUp />
                    ) : (
                      <FaAngleDown />
                    )}
                  </span>
                )}
              </div>

              <ul
                className={`ml-8 mt-2 space-y-2 text-[#6b707f] transition-all duration-500 overflow-hidden ${
                  activeDropdown === "content" ? "max-h-96" : "max-h-0"
                }`}
              >
                <li className="text-[17px] cursor-pointer">
                  <Link
                    href="/document_home"
                    className={`transition-colors duration-300 hover:text-[#11a6c9] ${
                      activeLink === "/documentation/content/placeholder"
                        ? "text-[#11a6c9]"
                        : ""
                    }`}
                  >
                    Articles coming soon...
                  </Link>
                </li>
                {/* Add more links for Content here */}
              </ul>
            </li>

            <li
              className="relative cursor-pointer  font-[600]"
              onClick={() => handleLinkClick("/documentation/changelog")}
            >
              <Link
                href="/documentation/changelog"
                className={`flex items-center space-x-4 text-[17px] font-[600] transition-colors duration-300 hover:text-[#11a6c9] ${
                  activeLink === "/documentation/changelog"
                    ? "text-[#11a6c9]"
                    : ""
                }`}
              >
                <Image
                  src="/change.png"
                  alt="Change Log"
                  width={16}
                  height={16}
                />
                {isOpen && <span className="font-[600]">Change Log</span>}
              </Link>
            </li>
          </ul>
        </aside>

        <main className="flex-grow p-6">{children}</main>
      </div>
    </>
  );
};

export default Layout;
