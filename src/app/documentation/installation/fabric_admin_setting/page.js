import React from "react";
import Layout from "@/app/Components/Documentions/Layout/Layout";
import Link from "next/link";
import Image from "next/image"; // Import Image from next/image
// SEO metadata
export const metadata = {
  title:
    "Make Changes to Fabric / Power BI Admin Settings - Embedsy Documentation",
  description:
    "Learn how to configure Fabric / Power BI Admin settings to enable access for the Embedsy Portal. This guide provides detailed steps for setting up permissions and enabling features necessary for embedding Power BI reports.",
  keywords: [
    "Fabric Admin Portal",
    "Power BI Admin settings",
    "Embedsy Portal",
    "Service Principal",
    "Enable embed content",
    "Power BI security groups",
    "Developer settings Power BI",
    "Azure Power BI integration",
    "Manage Power BI permissions",
    "Power BI settings configuration",
    "Embedding Power BI reports",
    "Cloud reporting tools",
  ],
};

export default function Page() {
  return (
    <Layout>
      <section className="w-full">
        <div className="documentation_info">
          <article className="pt-12 pb-12 px-[15px]" id="getting">
            <h4
              className="text-[30px] text-[#1d2746] leading-[36px] font-medium Roboto mb-3"
              id="make-changes-to-the-fabric-power-bi-admin-settings"
            >
              Make changes to the Fabric / Power BI Admin Settings
              <Link
                className="text-[#10b3d6] text-xl ml-1 opacity-0 hover:opacity-100 transition-opacity"
                aria-label="Anchor"
                data-anchorjs-icon=""
                href="#make-changes-to-the-fabric-power-bi-admin-settings"
                style={{ font: "1em / 1 anchorjs-icons" }}
              ></Link>
            </h4>
            <p className="text-[#6b707f] text-[16px] font-normal Poppins leading-[26px]">
              To make sure the Embedsy Portal can access your Power BI Reports,
              some changes need to be made in the Fabric / Power BI Admin
              Portal.
            </p>
            <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 my-4 rounded">
              <div className="flex items-start">
                <i className="icon_error-circle_alt text-2xl"></i>
                <div className="ml-4">
                  <h5 className="text-[30px] text-[#1d2746] leading-[36px] font-medium Roboto">
                    Hint
                  </h5>
                  <p className="text-[#6b707f] text-[16px] font-normal Poppins leading-[26px]">
                    You can either enable the settings for the entire
                    organization or only for specific Security Groups. We
                    recommend that you only enable them for specific Security
                    Groups. To do this, simply select the respective option and
                    add the Entra Security Group that contains the Service
                    Principal that is used in the Embedsy Portal, to the list of
                    groups. It is the Security Group that you have created{" "}
                    <Link
                      href="/documentation/installation/entra_security"
                      className="text-blue-500"
                    >
                      in this step during the installation
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
            <ol className="list-decimal pl-6 space-y-4">
              <li className="text-[#6b707f] text-[16px] font-normal Poppins leading-[26px]">
                Log in to the{" "}
                <Link
                  href="https://app.powerbi.com/admin-portal/tenantSettings"
                  target="_blank"
                  className="text-blue-500"
                >
                  Fabric Admin Portal
                </Link>
                . In case you don&apos;t have access, please contact your
                Fabric, Power BI, or Global Admin.
                <div className="mt-2">
                  <Image
                    src="/fa1.png"
                    alt="Adding Custom Domain to Azure Web App"
                    width={1300} // Provide width
                    height={800} // Provide height
                  />
                </div>
              </li>
              <li className="text-[#6b707f] text-[16px] font-normal Poppins leading-[26px]">
                Find the <b>Embed content in apps</b> inside the{" "}
                <b>Developer settings</b>. This setting needs to be enabled.
                <div className="mt-2">
                  <Image
                    src="/fa2.png"
                    alt="DNS for Custom Domain"
                    width={1300} // Provide width
                    height={800} // Provide height
                  />
                </div>
              </li>
              <li className="text-[#6b707f] text-[16px] font-normal Poppins leading-[26px]">
                Find <b>Service principals can use Fabric APIs</b> inside the{" "}
                <b>Developer settings</b>. This setting needs to be enabled.
                <div className="mt-2">
                  <Image
                    src="/fa3.png"
                    alt="DNS for Custom Domain"
                    width={1300} // Provide width
                    height={800} // Provide height
                  />
                </div>
              </li>
            </ol>
          </article>
          <div className="border-t border-gray-200 my-6"></div>
        </div>
      </section>
    </Layout>
  );
}
