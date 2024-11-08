import React from "react";
import Layout from "@/app/Components/Documentions/Layout/Layout";
import Link from "next/link";
import Image from "next/image"; // Import next/image for optimization
// SEO metadata
export const metadata = {
  title:
    "What is a Service Principal and Why Do We Need One? - Embedsy Documentation",
  description:
    "Understand the concept of Service Principals, their role in accessing Power BI reports, and detailed steps to create one in Microsoft Entra. This guide helps ensure secure access to the Embedsy Portal.",
  keywords: [
    "Service Principal",
    "Power BI Reports",
    "Microsoft Entra",
    "Application Registration",
    "Client Secret",
    "Power BI integration",
    "Embedsy Portal",
    "Azure AD",
    "Create Service Principal",
    "Secure API Access",
    "Authentication",
    "Service Principal Permissions",
  ],
};
export default function page() {
  return (
    <Layout>
      <section className="w-full">
        <div className="pt-12 pb-14 px-[15px]">
          <article className="pt-12 pb-12" id="getting">
            <h4 className="text-[30px] text-[#1d2746] font-medium mb-3 py-[10px] relative Roboto leading-[26px]">
              What is a Service Principal and why do we need one?
              <Link
                className="absolute top-0 right-0 text-[#10b3d6] text-xl pl-1 opacity-0 hover:opacity-100 transition-opacity"
                aria-label="Anchor"
                data-anchorjs-icon=""
                href="#what-is-a-service-principal-and-why-do-we-need-one"
                style={{ font: "1em / 1 anchorjs-icons" }}
              />
            </h4>
            <p className="text-[18px] text-[#6b707f] Poppins ">
              The Service Principal is the technical user that will be used to
              access the Power BI Reports. It is the user that has access to the
              Power BI Workspaces that will be shown in the Embedsy Portal.
            </p>
            {/* Refactored Link to avoid nesting */}
            <div className="relative">
              <Link href="#">
                <h2 className="text-[20px] text-[#1d2746] font-medium mb-3 Roboto leading-[26px] py-[20px]">
                  How to create a Service Principal
                </h2>
              </Link>
              <Link
                className="absolute top-0 right-0 text-[#10b3d6] text-xl pl-1 opacity-0 hover:opacity-100 transition-opacity"
                aria-label="Anchor"
                data-anchorjs-icon=""
                href="#how-to-create-a-service-principal"
                style={{ font: "1em / 1 anchorjs-icons" }}
              />
            </div>
            <ol className="list-decimal ml-6 text-[18px] text-[#6b707f] Poppins">
              <li className="mt-2">
                Log in to{" "}
                <Link
                  href="https://entra.microsoft.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#10b3d6]"
                >
                  Microsoft Entra
                </Link>{" "}
                and register a new application
                <div>
                  <Image
                    src="/sp1.png"
                    alt="App registration in Microsoft Entra"
                    width={1300}
                    height={500}
                  />
                </div>
              </li>
              <li className="mt-5">
                Make the selections as shown on the screenshot below. Note that
                you can pick the name you like for the Service principal.
                <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 p-4 mt-2 mb-4 rounded">
                  <i className="icon_error-circle_alt"></i>
                  <div>
                    <h5 className="font-semibold">Redirect URI</h5>
                    <p>
                      The URI to be used was sent to you via email. Please make
                      sure to use the exact URI from our email to make the
                      Embedsy Portal work. Later on in the process, you can also{" "}
                      <Link
                        href="/documentation/installation/custom_domain"
                        className="text-[#10b3d6]"
                      >
                        connect the Embedsy Portal to a custom domain.
                      </Link>
                    </p>
                  </div>
                </div>
                <div>
                  <Image
                    src="/sp2.png"
                    alt="App registration in Microsoft Entra"
                    width={1300}
                    height={500}
                  />
                </div>
              </li>
              <li className="mt-5">
                Copy the Application (client) ID and save it somewhere, you will
                need it later in the installation process.
                <div>
                  <Image
                    src="/sp3.png"
                    alt="Copy Application ID of Service Principal"
                    width={1300}
                    height={500}
                  />
                </div>
              </li>
              <li className="mt-5">
                Navigate to &quot;Certificates &amp; secret&quot; and create a
                new client secret.
                <div>
                  <Image
                    src="/sp4.png"
                    alt="Create Client Secret for Service Principal"
                    width={1300}
                    height={500}
                  />
                </div>
              </li>
              <li className="mt-5">
                Add a description for the client secret. You can use the one
                from the screenshot or input your own description. Decide when
                the client secret should expire.
                <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 p-4 mt-2 mb-4 rounded">
                  <i className="icon_error-circle_alt"></i>
                  <div>
                    <h5 className="font-semibold">Expiry of Client Secret</h5>
                    <p>
                      When there is no valid client secret assigned to the
                      Service Principal, users will not be able to see any
                      reports in the Embedsy Portal. Therefore, it can be a good
                      idea to set the expiry date at the maximum. We also have
                      an article that shows{" "}
                      <Link
                        href="/documentation/installation/update_client_secret"
                        className="text-[#10b3d6]"
                      >
                        how to create a new client secret
                      </Link>{" "}
                      and add it to the Embedsy Portal.
                    </p>
                  </div>
                </div>
                <div>
                  <Image
                    src="/sp5.png"
                    alt="App registration in Microsoft Entra"
                    width={1300}
                    height={500}
                  />
                </div>
              </li>
              <li className="mt-5">
                Copy the Secret Value. You will have to{" "}
                <a
                  href="/documentation/installation/update_client_secret"
                  className="text-[#10b3d6]"
                >
                  add it to the Embedsy Portal
                </a>
                <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 p-4 mt-2 mb-4 rounded">
                  <i className="icon_error-circle_alt"></i>
                  <div>
                    <h5 className="font-semibold">Security</h5>
                    <p>
                      The Secret Value is only shown when a new Client Secret is
                      generated. You will not be able to show it again after
                      that. In case you were a bit too quick and don&apos;t see
                      the Client Secret, simply create a new one according to
                      the steps above.
                    </p>
                  </div>
                </div>
                <div>
                  <Image
                    src="/sp6.png"
                    alt="Client Secret of App registration in Microsoft Entra"
                    width={1300}
                    height={500}
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
