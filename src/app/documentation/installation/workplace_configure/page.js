import React from "react";
import Layout from "@/app/Components/Documentions/Layout/Layout";
import Image from "next/image"; // Import the Image component
export const metadata = {
  title: "Configuring Power BI/Fabric Workspaces - Embedsy Documentation",
  description:
    "Learn how to configure Power BI and Fabric workspaces by adding Service Principals and Entra Security Groups to ensure access via the Embedsy Portal.",
  keywords: [
    "Power BI",
    "Fabric Workspaces",
    "Service Principal",
    "Entra Security Group",
    "Embedsy Portal",
    "Workspace Access",
    "Configuration",
    "Microsoft Power BI",
    "Embedding Reports",
  ],
};

export default function page() {
  return (
    <Layout>
      <article className="pt-16 px-[16px]" id="documentation">
        <div className="mb-10">
          <h1 className=" text-[30px] text-[#1d2746] leading-[36px] font-medium Roboto ">
            Configuring Power BI/Fabric Workspaces
          </h1>
          <p className="text-[#6b707f] text-[16px] font-normal Poppins leading-[26px]">
            The previously created Service Principal or Entra Security Group
            needs to be added to the Power BI/Fabric Workspaces that should be
            accessible by the Embedsy Portal. To do this, simply navigate to the
            relevant workspace and add the Service Principal or Entra Group as a
            Member.
          </p>
          <div>
            <Image
              src="/workspace_access.png"
              alt="Entra Security Group"
              width={1300}
              height={800}
            />
          </div>
        </div>
      </article>
    </Layout>
  );
}
