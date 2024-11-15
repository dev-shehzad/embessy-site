"use client";
import React, { useState } from "react";
import Link from "next/link";
import Button from "../../Common/Button/Button";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = [
    {
      name: "Free Trial",
      monthlyPrice: "",
      annualPrice: "",
      users: "20 users",
      validity: "Valid for 14 days",
      pros: ["Unlimited Reports", "Row-level Security (RLS)", "Custom Design"],
      cons: ["Custom Domain", "Live Installation Support", "Support"],
      actionText: "Get started",
    },
    {
      name: "Starter",
      monthlyPrice: "€ 50 per month",
      annualPrice: "€ 500 per year",
      users: "20 users",
      setupFee: "+ € 3000 set up one-time fee",
      pros: [
        "Unlimited Reports",
        "Row-level Security (RLS)",
        "Custom Design",
        "Custom Domain",
        "Live Installation Support",
        "Basic Support (1h per month)",
      ],
      additionalFeatures: [
        { text: "Managed Service (on demand)", type: "question" },
      ],
      paragraph:
        billingCycle === "monthly" ? "Invoiced up-front" : "Invoiced up-front",
      actionText: "Get started",
    },
    {
      name: "Standard",
      monthlyPrice: "€ 3 per user/month",
      annualPrice: "€ 30 per user/year",
      users: "21 - 250 users",
      setupFee: "+ € 3000 set up one-time fee",
      pros: [
        "Unlimited Reports",
        "Row-level Security (RLS)",
        "Custom Design",
        "Custom Domain",
        "Live Installation Support",
        "Basic Support (2h per month)",
        "Usage Analytics",
      ],
      additionalFeatures: [
        { text: "Managed Service (on demand)", type: "question" },
      ],
      paragraph:
        billingCycle === "monthly"
          ? "Invoiced end of month"
          : "Invoiced up-front",
      actionText: "Get started",
    },
    {
      name: "Enterprise",
      monthlyPrice: "",
      annualPrice: "",
      users: "",
      pros: [
        "Unlimited Reports",
        "Row-level Security (RLS)",
        "Custom Design",
        "Custom Domain",
        "Live Installation Support",
        "Usage Analytics",
      ],
      additionalFeatures: [
        { text: "Custom Support Packages available", type: "question" },
        { text: "Managed Service (on demand)", type: "question" },
      ],
      paragraph:
        "For larger implementations, talk to our sales team about exclusive features for your organisation.",
      actionText: "Contact Sales",
    },
  ];

  return (
    <div className="text-center py-16 bg-white">
      <div className="wrapper max-w-[1600px] mx-auto px-[15px]">
        <h2 className="text-[16px] uppercase text-[#7052fb] font-medium tracking-tighter-[3px]">
          PRICING PLAN
        </h2>
        <h3 className="text-[36px] font-semibold text-[#2b2350] text-center w-full mx-auto sm:w-[80%] md:w-[50%]">
          Pick the plan that&apos;s right for you or reach out to our sales team
          for a custom plan.
        </h3>
        <div className="mt-6 flex justify-center items-center gap-x-[20px]">
          <span
            className={`cursor-pointer text-[16px] Poppins font-normal ${
              billingCycle === "monthly" ? "text-[#7052fb]" : "text-[#797697]"
            }`}
          >
            Monthly
          </span>

          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={billingCycle === "annual"}
              onChange={() =>
                setBillingCycle(
                  billingCycle === "monthly" ? "annual" : "monthly"
                )
              }
            />
            <div className="relative w-[88px] h-[40px] bg-white border-[1px] border-gray-300 rounded-full peer-checked:after:translate-x-[48px] peer-checked:after:border-white after:content-[''] after:absolute after:top-1/2 after:left-[3px] after:-translate-y-1/2 after:bg-[#7052fb] after:rounded-full after:h-[32px] after:w-[32px] after:shadow-[0px_8px_30px_#7052fb] after:transition-all peer-checked:bg-white"></div>
          </label>

          <span
            className={`cursor-pointer text-[16px] Poppins font-normal ${
              billingCycle === "annual" ? "text-[#7052fb]" : "text-[#797697]"
            }`}
          >
            Annual
          </span>
        </div>

        <div className="mt-12  grid gap-6 grid-cols-1 lg:grid-cols-4">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-[#f8f7fc]  flex flex-col justify-between  hover:bg-white hover:shadow-lg w-full sm:w-[70%] mx-auto lg:w-full transition-all px-[30px] pt-[30px] pb-[40px]"
            >
               <div className=" ">
              <h4 className="text-[40px] text-left font-semibold text-[#2b2350] Poppins">
                {plan.name}
              </h4>
              {plan.validity && (
                <p className="text-[16px] text-left text-[#797687] mt-2">
                  {plan.validity}
                </p>
              )}
              <div className="text-[30px] text-left font-Poppins mt-[5px]">
                <span
                  className={`${
                    plan.name === "Starter"
                      ? "text-[#fa7070]"
                      : "text-[#8070fa]"
                  } text-[30px] text-left font-[700] font-Poppins mb-[25px]`}
                >
                  {billingCycle === "monthly"
                    ? plan.monthlyPrice
                    : plan.annualPrice}
                </span>

                <div>
                  <p className="text-[16px] font-Poppins text-[#797687] font-normal w-[100%] text-left mt-[30px] mx-auto">
                    {plan.paragraph}
                  </p>
                  {plan.setupFee && (
                    <>
                      <p
                        className={`text-[16px] font-Poppins font-normal w-[100%] text-left mt-2 ${
                          plan.name === "Standard"
                            ? "text-blue-500"
                            : "text-[#fa7070]"
                        }`}
                      >
                        {plan.setupFee}
                      </p>
                      <p className="text-[16px] text-left text-blue-500">
                        <Link href="faq" className="text-black">
                          See <span className="text-blue-500"> FAQ </span>for
                          details
                        </Link>
                      </p>
                    </>
                  )}
                </div>
              </div>
              {plan.users && (
                <p className="font-semibold text-left text-[#2b2350] font-Poppins text-[28px] mb-[10px] pt-[20px]">
                  {plan.users}
                </p>
              )}
             </div>
              <div className=" mt-auto  min-h-[370px] !justify-self-end  ">
              <div className="my-[60px] border-t-[2px] border-[##b4b2bf] border-dashed"></div>

              <ul className="mt-4 space-y-2 font-Poppins">
                {plan.pros.map((pro, i) => (
                  <li
                    key={i}
                    className="text-[#797687] text-[16px] font-Poppins flex items-center"
                  >
                    <svg
                      className="h-5 w-5 text-green-500 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {pro}
                  </li>
                ))}
              </ul>

              {plan.cons && (
                <ul className="mt-2 space-y-2">
                  {plan.cons.map((con, i) => (
                    <li
                      key={i}
                      className="text-[#797687]  text-[16px] font-Poppins flex items-center"
                    >
                      <svg
                        className="h-5 w-5 text-red-500 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      {con}
                    </li>
                  ))}
                </ul>
              )}

              {plan.additionalFeatures && (
                <ul className="mt-2 space-y-2 text-left">
                  {plan.additionalFeatures.map((feature, i) => (
                    <li
                      key={i}
                      className="text-[#797687] text-[16px] font-Poppins flex items-center"
                    >
                      <span className="flex items-center justify-center h-5 w-5 text-[20px] rounded-full text-[#f5c516] mr-2">
                        ?
                      </span>
                      {feature.text}
                    </li>
                  ))}
                </ul>
              )}
              </div>

              <div className="mt-11 justify-self-end  flex items-end justify-center">
                {plan.actionText === "Get started" ? (
                  <Button
                    text={plan.actionText}
                    variant="secondary"
                    href="/guided_installation"
                  />
                ) : (
                  <Button
                    href="/contact"
                    text={plan.actionText}
                    variant="secondary"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
