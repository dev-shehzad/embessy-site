"use client";
import React from "react";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";

const faqs = [
  {
    question: " How Can I Install Embedsy?",
    answer: `At the moment, we only offer guided installation because we have a brand new installation wizard and need to make sure it works correctly in every case. Please visit <a href="/guided_installation" class="text-blue-500">the guided installation page</a> to learn more`,
  },
  {
    question: "I don't have a Microsoft tenant, can I still use Embedsy?",
    answer:
      "In order to install and use the Embedsy Portal, a Microsoft tenant is needed. You can get a trial Tenant from Microsoft.",
  },
  {
    question:
      "Are there any prerequisites to be able to install the Embedsy Portal?",
    answer:
      "Yes, there are a few things that you need to have to be able to install the Embedsy Portal. Our installation wizard will ask you all the relevant questions to make sure you meet all the prerequisites.",
  },
];

const Installation = () => {
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

export default Installation;
