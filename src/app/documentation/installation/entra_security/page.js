import React from "react";
import Layout from "@/app/Components/Documentions/Layout/Layout";
import Link from "next/link";
import Image from "next/image"; // Import the Image component
// SEO metadata
export const metadata = {
  title: "Entra Security Group - Embedsy Documentation",
  description:
    "Learn how to create an Entra Security Group and add a Service Principal to it. This guide covers the steps required to manage access effectively within the Embedsy Portal.",
  keywords: [
    "Entra Security Group",
    "Service Principal",
    "Azure documentation",
    "Microsoft Entra",
    "cloud security",
    "access management",
    "Azure groups",
    "add users to Entra group",
    "manage security groups",
    "Azure access control",
    "cloud identity management",
    "Embedsy Portal",
    "entry security group",
  ],
};
export default function page() {
  return (
    <Layout>
      <section className="w-full">
        <div className="pb-12">
          <article className="mt-12 pb-12 px-[15px]" id="getting">
            <h4
              className=" text-[30px] text-[#1d2746] leading-[36px] font-medium Roboto mb-3 relative"
              id="entra-security-group"
            >
              Entra Security Group
              <Link
                className="absolute top-0 right-0 text-[#10b3d6] text-xl pl-1 opacity-0 hover:opacity-100 transition-opacity"
                aria-label="Anchor"
                data-anchorjs-icon=""
                href="/documentation/installation/server_principle"
                style={{ font: "1em / 1 anchorjs-icons" }}
              />
            </h4>
            <p className="text-[#6b707f] text-[16px] font-normal Poppins leading-[26px] ">
              To be able to give access to the previously created{" "}
              <Link
                href="/documentation/installation/server_principle"
                className="text-[#10b3d6]"
              >
                Service Principal
              </Link>
              , it first has to be added to an Entry Security Group.
            </p>
            <Link href="#">
              <h4
                className=" text-[30px] text-[#1d2746] leading-[36px] font-medium Roboto mb-3 relative"
                id="how-to-create-an-entra-security-group-and-add-the-service-princi"
              >
                How to create an Entra Security Group and add the Service
                Principal to it
                <Link
                  className="absolute top-0 right-0 text-[#10b3d6] text-xl pl-1 opacity-0 hover:opacity-100 transition-opacity"
                  aria-label="Anchor"
                  data-anchorjs-icon=""
                  href="#how-to-create-an-entra-security-group-and-add-the-service-princi"
                  style={{ font: "1em / 1 anchorjs-icons" }}
                />
              </h4>
            </Link>
            <ol className="list-decimal ml-6 space-y-4 text-[#6b707f] text-[16px] font-normal Poppins leading-[26px] ">
              <li>
                Log in to{" "}
                <Link
                  href="https://entra.microsoft.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#10b3d6]"
                >
                  Microsoft Entra
                </Link>{" "}
                and create a new Group
                <div>
                  <Image
                    src="/sc1.png"
                    alt="Entra Security Group"
                    width={1300}
                    height={800}
                  />
                </div>
              </li>
              <li>
                Make the selections as shown on the screenshot below. Note that
                you can pick the name you like for the Security Group.
                <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 p-4 mt-2 mb-4 rounded">
                  <i className="icon_error-circle_alt"></i>
                  <div>
                    <h5 className="font-semibold">Name of user</h5>
                    <p>
                      Note that your Service Principal might have a different
                      name than the one you see in the screenshot. Search for
                      and add the Service Principal you created in{" "}
                      <Link
                        href="/documentation/installation/server_principle"
                        className="text-[#10b3d6]"
                      >
                        this step of the installation.
                      </Link>
                    </p>
                  </div>
                </div>
                <div>
                  <Image
                    src="/sc2.png"
                    alt="Adding Users to Microsoft Entra Group"
                    width={1300}
                    height={800}
                  />
                </div>
              </li>
              <li>
                Verify that the newly created Security Group shows 1 member.
                Then confirm and move on to the next step of the installation.
                <div>
                  <Image
                    src="/sc3.png"
                    alt="Confirm Creation of MS Entra Group"
                    width={1300}
                    height={800}
                  />
                </div>
              </li>
            </ol>
          </article>
        </div>
      </section>
    </Layout>
  );
}
