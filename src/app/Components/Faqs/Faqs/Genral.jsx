"use client";
import React from "react";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";


const faqs = [
  {
    question: " How to Contact Support?",
    answer:
     `Before contacting support, please visit our <a href="/document_home" class="text-blue-500">documentation page.</a> It&apos;s very likely that you will find an answer to your question there. If this is not the case, reach out to us via our <a href="/contact" class="text-blue-500">contact form.</a>`,
  },
  {
    question: "Where is My Data Located ? ",
    answer: "All data used by the Embedsy Portal is stored inside your Microsoft Azure enviroment. Where this is located geographically can be decided during the installation process.",
  },
  {
    question: "Do You Offer Custom Developement",
    answer: "YES! We understand that every company is different. You might have very specific requirements for the portal. We have added custom functionality to many of the Embedsy Portals and are happy to do so. Please reach out to discuss your specific case.",
  },
  {
    question: "Can you demo the Embedsy Portal to me?",
    answer: `YES! We're more than happy to show you the Embedsy Portal in action, simply use this link to <a href="https://outlook.office365.com/book/embedsy_bookings@kteam.ch/s/NBfNDY-ZaUabgAK-SyPGqg2" target=_bank class="text-blue-500">schedule a demo.</a>`,
  },
  
];

const Genral = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
    <div className="w-full max-w-[900px] mx-auto p-4">
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4 border border-gray-200">
          <button
            onClick={() => toggleFAQ(index)}
            className="flex px-[40px] py-[18px] gap-x-[10px] font-Poppins gap-y-[40px] outline-none justify-between text-left items-center text-[20px] transition-all text-[#2b2350] font-semibold cursor-pointer shadow-[0 0 0 .2rem rgba(0,123,255,.25)] w-full rounded-[5px]"
          >
            {faq.question}
            <span className="text-2xl transition-all p-2">
              {openIndex === index ? (
                <RiArrowDropUpLine />
              ) : (
                <RiArrowDropDownLine />
              )}
            </span>
          </button>
          <div
            className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
              openIndex === index ? "max-h-[500px]" : "max-h-0"
            }`}
          >
            <div
              className="text-[17px] font-[400] font-Poppins text-[#797687] leading-7 bg-[#fff] pb-[40px] px-[40px]"
              dangerouslySetInnerHTML={{ __html: faq.answer }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Genral;
