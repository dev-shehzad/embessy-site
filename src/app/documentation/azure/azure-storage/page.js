import React from "react";
import Layout from "@/app/Components/Documentions/Layout/Layout";
import Link from "next/link";
// SEO metadata
export const metadata = {
  title: "Azure Storage Account Overview",
  description:
    "Learn about the Azure Storage Account created during the Embedsy Portal installation, including usage, pricing, and cost management.",
  keywords: [
    "Azure Storage Account",
    "Embedsy Portal",
    "Data Storage",
    "Azure Pricing",
    "Azure Cost Management",
  ],
};
export default function page() {
  return (
    <Layout>
      <section className="w-full">
        <div className="pt-12 pb-12 px-[15px]">
          <article className="pt-12 pb-12" id="getting">
            <h4 className="text-[30px] text-[#1d2746] leading-[36px] font-medium Roboto mb-3 relative">
              Azure Storage Account
              <Link
                className="text-blue-500 text-xl ml-1 opacity-0 hover:opacity-100 transition-opacity"
                aria-label="Anchor"
                data-anchorjs-icon=""
                href="#azure-storage-account"
                style={{
                  font: "1em / 1 anchorjs-icons",
                  paddingLeft: "0.375em",
                }}
              ></Link>
            </h4>
            <p className="text-[#6b707f] text-[16px] font-normal Poppins leading-[26px] mb-4">
              During the installation of the Embedsy Portal, we have created an
              Azure Storage Account in your Azure environment. We use this to
              store files such as logos, icons, JSON Theme files etc. that are
              used in the Embedsy Portal.
            </p>
            <Link
              className="text-2xl font-medium mb-3 relative"
              id="pricing"
              href="#"
            >
              Pricing
            </Link>
            <p className="text-[#6b707f] text-[16px] font-normal Poppins leading-[26px] mb-4">
              Azure Storage is generally a cost effective option for data
              storage, making it a popular choice for businesses of all sizes.
              Pricing is based on factors like the type of storage (e.g., Blob,
              File, Table, Queue), redundancy options (e.g., LRS, GRS), and
              access tiers (Hot, Cool, Archive). Its important to know that you
              only pay for what you use.
            </p>
            <p className="text-[#6b707f] text-[16px] font-normal Poppins leading-[26px] mb-4">
              We recommend that you monitor your Azure costs by setting up a{" "}
              <Link
                href="azure-budget.html"
                className="text-[#10B3D6] font-[500]"
              >
                Budget in Azure
              </Link>
              .
            </p>
            <p className="text-[#6b707f] text-[16px] font-normal Poppins leading-[26px] mb-4">
              For detailed pricing information, visit:{" "}
              <Link
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#10B3D6] "
              >
                Azure Storage Pricing.
              </Link>
            </p>
          </article>
        </div>
      </section>
    </Layout>
  );
}
