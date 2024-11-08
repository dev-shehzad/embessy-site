"use client";
import React, { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

const faqs = [
  {
    question: "How does pricing work?",
    answer:
      "We have different predefined plans published to pick from. For larger implementations and organisations where our excisting plans don&apos;t work, simply reach out to us to discuss if a custom plan can be created.",
  },
  {
    question:
      "Does your pricing include Azure Resources such as the Microsoft Fabric Capacity?",
      answer:
      `No. The costs for all required Azure Resources are paid separately. We recommend setting up a <a href="/documentation/installation/auzure_budget" class="text-blue-500">Budget in Azure</a> to keep track of costs.`,
  },
  {
    question:
      "Do I have to pay up-front or after the subscription period",
      answer:
      `It depends on the plan and if you select the monthly or annual option. Since the Starter plan has a fixed price per month/year, you are charged up-front for it. For the Standard plan, it works differently. The Standard plan is based on the number of users and we don&apos;t know the exact price up-front. If you chose the monthly option, you are charged at the end of each month for the number of users for that specific month. This is the preferred solution. If you decide to use the annual option, you will have to tell us the minimum number of users for the year and we will charge for that amount up-front. If the number of actual users is significantly different from the expected, we might request another up-front payment. At the end of the subscription period, we will charge for the actual number of users for the year.`,
  },
  {
    question: "How much do the required Azure Resources cost?",
    answer:
      "We can&apos;t give a precise number because, it depends. What we can say is that we want to <br/> keep your costs to a minimum and therefore only deploy the smallest/cheapest options for <br/> the required resources. Which Fabric, Power BI Embedded or Power BI Premium Capacity you <br/> select, is up to you. What the Embedsy Portal offers is a functionality to pause the Capacity when nobody is using it and to automatically start it when a user logs in to the portal. This can reduce the costs drastically.",
  },
  {
    question: "Is there a Free Trial?",
    answer:
      "Yes! You can use Embedsy for free for 30 days. There&apos;s no need to enter a credit card when <br/> signing up for a free trial.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "You can pay with credit card or bank transfer.",
  },
  {
    question: "Can I pay in my local currency?",
    answer:
      "We accept payments in Swiss Francs (CHF), Euros (EUR) and US Dollars (USD). If those are not <br/> an option, please reach out to us and we&apos;ll see what we can do.",
  },
];

const Pricing = () => {
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

export default Pricing;