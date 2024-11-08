import React from "react";
import Layout from "@/app/Components/Documentions/Layout/Layout";
import Link from "next/link";
// SEO metadata
export const metadata = {
  title: "Cost Control in Azure - Embedsy Documentation",
  description:
    "Learn how to effectively manage your costs in Azure. Discover essential practices such as creating budgets and utilizing Azure's cost management tools to avoid unexpected charges and maintain control over your cloud spending.",
  keywords:
    "Azure cost control, cloud spending management, Azure budgets, Azure documentation, cost management tools",
};
function page() {
  return (
    <Layout>
      <section className="w-full">
        <div className="documentation_info">
          <article className="pt-12 px-[15px] pb-12" id="getting">
            <h4 className="text-[30px] text-[#1d2746] leading-[36px] font-medium Roboto mb-3 relative">
              Cost Control in Azure
              <Link
                className="text-[#10b3d6]  text-[16px] font-normal Poppins leading-[26px]  ml-1 opacity-0 hover:opacity-100 transition-opacity"
                aria-label="Anchor"
                data-anchorjs-icon=""
                href="#cost-control-in-azure"
                style={{
                  font: "1em / 1 anchorjs-icons",
                  paddingLeft: "0.375em",
                }}
              ></Link>
            </h4>
            <p className="text-[#6b707f] text-[16px] font-normal Poppins leading-[26px] mb-4">
              Effectively managing your costs in Azure is crucial to ensure that
              your cloud spending aligns with your budget and business goals.
              Azure provides powerful tools to help you monitor and control your
              costs. One of the most essential practices is to create a budget
              in Azure, which allows you to set spending limits and receive
              timely notifications via email when certain thresholds are met.
            </p>
            <p className="text-[#6b707f] text-[16px] font-normal Poppins leading-[26px] mb-4">
              This proactive approach to cost management is highly recommended
              for everything created in Azure! By setting up budgets, you can
              avoid unexpected charges and maintain better control over your
              cloud investments. It’s an important step to ensure that your
              resources are used efficiently and your spending stays on track.
            </p>
            <p className="text-[#6b707f] text-[16px] font-normal Poppins leading-[26px] ">
              To get started, the{" "}
              <Link
                href="https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/tutorial-acm-create-budgets?tabs=psbudget#create-a-budget-in-the-azure-portal"
                target="_blank"
                className="text-[#10b3d6]"
              >
                Microsoft Documentation
              </Link>
              provides detailed guidance on how to create a budget in Azure.
              Make cost control a priority and take advantage of these tools to
              safeguard your cloud spending.
            </p>
          </article>
        </div>
      </section>
    </Layout>
  );
}

export default page;
