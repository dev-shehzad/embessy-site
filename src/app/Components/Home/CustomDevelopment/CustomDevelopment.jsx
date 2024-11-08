"use client";
import React from "react";
import { useState } from "react";


const faqs = [
  {
    question: " A Portal without the login page",
    answer:
      "Recently, one of our clients requested a version of the Embedsy Portal that allows users to bypass the login page, granting direct access using SSO. Removing the login process simplifies the user experience, reduces friction, and encourages greater engagement. Additionally, it helps reduce the support burden by eliminating login-related issues.",
  },
  {
    question: "Write-back functionality",
    answer: "We implemented a solution where certain users can create SQL tables from inside the Embedsy Portal and then allow users to write-back data to these tables. In this specific case, the customer is using this feature to allow users to write comments which are then again loaded into Power BI Reports.",
  },
];

const secondFaqs = [
  {
    question3: "Chat bot",
    answer3:
      "Recently, a client requested the addition of a chatbot, and we are currently clarifying their requirements. We have several AI features in the backlog, and we are exploring how to incorporate a chatbot that could become part of the main Embedsy Portal, making it available for everyone to use.",
  },
  {
    question3: "File sharing",
    answer3: "We are currently working on a POC to add file sharing capabilities to the Embedsy Portal. If you are interested in this, let us know and become one of the testers. The more testers we have, the quicker this feature can go-live.",
  },
];

const CustomDevelopment = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [openIndex2, setOpenIndex2] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleFAQ2 = (index) => {
    setOpenIndex2(openIndex2 === index ? null : index);
  };



  return (
    <div>
      <div className="wrapper max-w-[1200px] mx-auto px-[15px] py-[50px] ">
        <div className="upperText pb-[40px] pt-[10px]">
          <h3 className="text-[16px] font-Poppins text-[#7052ED] pb-[30px] pixFadeUp uppercase font-medium tracking-tight-[5px] text-center">
            Custom Development - Tailored Solutions for Your Business
          </h3>
          <h2 className="text-[36px] font-Poppins pixFadeUp font-semibold text-[#2b2350] text-center">
            Have a unique idea? we&apos;re here to bring your vision to life!
          </h2>
        </div>

        <div className="bottomsection">
          <h3 className="Pfont-oppins text-[28px] text-center py-[20px] font-semibold text-[#2b234d] ">
            Recently Implemented Custom Features
          </h3>
          {/* Faqs */}
          {/* Fist FAQ */}
          <div className=" mx-auto p-4">
            {/*
            <h2 className="text-2xl font-semibold text-center mb-6">
              Frequently Asked Questions
            </h2>
            */}
            <p className="text-[16px] font-Poppins text-[#797687] font-normal">
              Does any of the following features sound interesting to you? Reach out to us so we can show it to you and see how we can add it to your Embedsy Portal.
            </p>
            <br></br>
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4 border-b border-gray-200">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex px-[10px] gap-x-[10px] gap-y-[40px] outline-none items-center text-[20px] transition-all text-[#2b2350] font-semibold cursor-pointer hover:bg-[#FBCA15]  shadow-[0 0 0 .2rem rgba(0,123,255,.25)]  w-full bg-[#f8f9fa] rounded-[5px]"
                >
                  <span className="text-[#f8f9fa]  bg-[#2b2350] rounded-full w-[20px] h-[20px] p-2 flex justify-center items-center">
                    {openIndex === index ? "-" : "+"}
                  </span>
                  {faq.question}
                </button>
                {openIndex === index && (
                  <div className="text-[16px] Poppins text-[#797687] bg-[#fff] py-[30px]">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Last Faq */}

          <div className="py-[30px]">
            <h3 className="text-[#2B234D] font-Poppins font-semibold text-center pt-[40px] pb-[15px] text-[28px] ">
              Requested Features Under Investigation
            </h3>
            <p className="text-[16px] font-Poppins text-[#797687] font-normal">
              When new features are requested, we carefully evaluate and
              prioritize them. The more requests we receive for a feature, the
              higher it climbs in our backlog. This ensures that we&apos;re focusing
              on the updates that matter most to our users. While we always aim
              to accommodate custom feature requests, we must align these
              requests with the overall vision of the Embedsy Portal. If you 
              have a feature in mind, let us know!
            </p>
            {/* Faq */}
            <div className=" mx-auto p-4">
              {secondFaqs.map((myFaq, index) => (
                <div
                  key={index}
                  className="mb-4 border-b border-gray-200 "
                >
                  <button
                    onClick={() => toggleFAQ2(index)}
                    className="flex px-[10px] gap-x-[10px] gap-y-[40px] outline-none items-center text-[20px] transition-all text-[#2b2350] font-semibold cursor-pointer hover:bg-[#FBCA15]  shadow-[0 0 0 .2rem rgba(0,123,255,.25)]  w-full bg-[#f8f9fa] rounded-[5px]"
                  >
                    <span className="text-[#f8f9fa] font-Poppins bg-[#2b2350] rounded-full w-[20px] h-[20px] p-2 flex justify-center items-center">
                      {openIndex2 === index ? "-" : "+"}
                    </span>
                    {myFaq.question3}
                  </button>
                  {openIndex2 === index && (
                    <div className="text-[16px] font-Poppins text-[#797687] bg-[#fff] py-[30px]">
                      {myFaq.answer3}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomDevelopment;
