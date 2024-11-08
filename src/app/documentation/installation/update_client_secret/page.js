import React from "react";
import Layout from "@/app/Components/Documentions/Layout/Layout";
import Link from "next/link";
import Image from "next/image"; // Import the Image component
// SEO metadata
export const metadata = {
  title:
    "Updating the Client Secret in the Embedsy Portal - Embedsy Documentation",
  description:
    "Learn how to update the Client Secret for your Service Principal in the Embedsy Portal. Follow detailed steps to ensure secure access and functionality.",
  keywords: [
    "Client Secret",
    "Embedsy Portal",
    "Service Principal",
    "Microsoft Authentication",
    "Power BI",
    "Update Client Secret",
    "Portal Settings",
    "Super Admin",
    "Service Principal Client ID",
    "Azure AD",
    "Security",
  ],
};
export default function page() {
  return (
    <Layout>
      <section className="w-full">
        <div className="documentation_info">
          <article className="pt-12 px-[15px] pb-12" id="getting">
            <h4 className="text-[30px] text-[#1d2746] leading-[36px] font-medium Roboto mb-3 relative">
              Updating the Client Secret in the Embedsy Portal
              <Link
                className="text-[#10b3d6]  text-[16px] font-normal Poppins leading-[26px]  ml-1 opacity-0 hover:opacity-100 transition-opacity"
                aria-label="Anchor"
                data-anchorjs-icon=""
                href="#update_client_secret"
                style={{
                  font: "1em / 1 anchorjs-icons",
                  paddingLeft: "0.375em",
                }}
              ></Link>
            </h4>
            <p className="text-[#6b707f] text-[16px] font-normal Poppins leading-[26px] mb-4">
              You have previously created a{" "}
              <Link
                href="/documentation/installation/server_principle"
                className="text-[#10b3d6]"
              >
                Service Principal.
              </Link>{" "}
              You now have to add the details of this user to the Embedsy Portal
              to make it work.
            </p>
            <p className="text-[#6b707f] text-[16px] font-normal Poppins leading-[26px] mb-4">
              Log in to the Embedsy Portal with a Super-Admin account and
              navigate to the Portal Settings
            </p>
            <div>
              <Image
                src="/portal_config.png"
                alt="Entra Security Group"
                width={500}
                height={800}
              />
            </div>
            <br></br>
            <p className="text-[#6b707f] text-[16px] font-normal Poppins leading-[26px] mb-4">
              Get Client ID of the Service Principal and enter it into Service
              Principal Client ID and Microsoft Authentication Service Principal
              Client ID
              <br></br>Get Secret ID of the Service Principal and enter it into
              Service Principal Client ID Secret
              <br></br>Get the Secret expiry date and enter it into Service
              Principal Expiry Date
              <br></br>Save Changes
            </p>
            <div>
              <Image
                src="/portal_config_secret.png"
                alt="Entra Security Group"
                width={1300}
                height={800}
              />
            </div>
          </article>
        </div>
      </section>
    </Layout>
  );
}
