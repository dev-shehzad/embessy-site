import React from "react";
import Layout from "@/app/Components/Documentions/Layout/Layout";
import Link from "next/link";
export const metadata = {
  title: "Azure App Service Plan & App Service Overview",
  description:
    "Learn about Azure App Service Plans and App Services used in the Embedsy Portal installation, including performance tips and useful resources.",
  keywords: [
    "Azure",
    "App Service",
    "App Service Plan",
    "Embedsy Portal",
    "Azure Resources",
  ],
};
export default function page() {
  return (
    <Layout>
      <div className="w-full">
        <div className="pt-12 pb-12 px-[15px]">
          <p id="getting"></p>
          <h4 className="text-[30px] text-[#1d2746] leading-[36px] font-medium Roboto mb-3 relative">
            Azure App Service plan & App Service
            <Link
              className=" text-[#10b3d6] text-[16px] font-normal Poppins leading-[26px]  ml-1 opacity-0 hover:opacity-100 transition-opacity"
              aria-label="Anchor"
              data-anchorjs-icon=""
              href="#azure-app-service-plan-app-service"
              style={{ font: "1em / 1 anchorjs-icons", paddingLeft: "0.375em" }}
            ></Link>
          </h4>
          <p className="text-[#6b707f] text-[16px] font-normal Poppins leading-[26px] ">
            During the installation of the Embedsy Portal, we created an App
            Service plan and an App Service in your Azure environment. There is
            nothing you need to do with these resources. If, for whatever
            reason, your Embedsy Portal becomes slow, upgrading the App Service
            Plan to the next tier might be an option. Please{" "}
            <Link
              href="/contact"
              className="text-[#10b3d6]  text-[16px] font-normal Poppins leading-[26px]"
            >
              contact us
            </Link>{" "}
            before taking any actions.
          </p>
          <p className="text-[#6b707f] text-[16px] font-normal Poppins leading-[26px] ">
            <b>Azure App Service</b> is a fully managed platform provided by
            Microsoft Azure for building, deploying, and scaling web
            applications. It includes built-in DevOps support for continuous
            deployment and integration.
          </p>
          <p className="text-[#6b707f] text-[16px] font-normal Poppins leading-[26px] ">
            <b>An App Service Plan</b> defines the compute resources your app
            uses, such as CPU, memory, and storage. The plan determines the
            cost, scaling options, and region where your app is hosted. You can
            host multiple apps within the same plan, which share these
            resources, making it a cost-effective solution.
          </p>
          <p className="text-[#6b707f] text-[16px] font-normal Poppins leading-[26px] d">
            <b>To learn more:</b>
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li className="mb-2">
              <Link
                href="https://learn.microsoft.com/en-us/azure/app-service/overview"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#10b3d6]  text-[16px] font-normal Poppins leading-[26px]"
              >
                Azure App Service Overview
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="https://learn.microsoft.com/en-us/azure/app-service/overview-hosting-plans"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#10b3d6]  text-[16px] font-normal Poppins leading-[26px]"
              >
                App Service Plans
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
