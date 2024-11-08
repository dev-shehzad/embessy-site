import React from "react";
import Layout from "@/app/Components/Documentions/Layout/Layout";
import Link from "next/link";
import Image from "next/image";
// SEO metadata
export const metadata = {
  title:
    "Connecting the Embedsy Portal to a Custom Domain - Embedsy Documentation",
  description:
    "Learn how to connect the Embedsy Portal to a custom domain using the Azure Portal. This guide covers DNS record setup, SSL certificates, and troubleshooting tips.",
  keywords:
    "Embedsy Portal, custom domain, Azure Portal, DNS records, SSL certificate, Azure documentation",
};
export default function page() {
  return (
    <>
      <Layout>
        <section className="w-full">
          <div className="documentation_info">
            <article className="pt-12 pb-12 px-[15px] " id="getting">
              <h4
                className="text-[30px] text-[#1d2746] leading-[36px]  Roboto font-medium mb-3"
                id=""
              >
                Connecting the Embedsy Portal to a Custom Domain
                <Link
                  className="text-blue-500 text-xl ml-1 opacity-0 hover:opacity-100 transition-opacity"
                  aria-label="Anchor"
                  data-anchorjs-icon=""
                  href="#"
                  style={{ font: "1em / 1 anchorjs-icons" }}
                ></Link>
              </h4>
              <p className="text-[#6b707f] text-[16px] font-normal Poppins leading-[26px] ">
                When you first install the Embedsy Portal, a domain like
                https://yourname.azurewebsite.net is automatically assigned.
                it&apos;s very likely, that you prefer to use a Custom Domain
                such as https://portal.yourname.com or similar. To do this, you
                can configure a Custom Domain in the Azure Portal and add some
                DNS records to your website hosting provider. To enhance
                security, it&apos;s recommended to also set up an SSL
                certificate, which will enable HTTPS for your site instead of
                HTTP.
              </p>
              <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 my-4 rounded">
                <div className="flex items-start">
                  <i className="icon_error-circle_alt text-2xl"></i>
                  <div className="ml-4">
                    <h5 className="font-semibold">Important to know</h5>
                    <p className="text-[#6b707f] text-[16px] font-normal Poppins leading-[26px] ">
                      To use a Custom Domain/url for the Embedsy Portal, some
                      DNS records need to be configured. Usually, this is done
                      by a website/server admin. The process is different,
                      depending on where your website is hosted. You can find
                      more information in the{" "}
                      <Link
                        href="https://learn.microsoft.com/en-gb/azure/app-service/app-service-web-tutorial-custom-domain?tabs=subdomain%2Cazurecli#2-create-the-dns-records"
                        target="_blank"
                        className="text-blue-500"
                      >
                        Microsoft documentation
                      </Link>
                      . Your website admin should know how to do this.
                    </p>
                  </div>
                </div>
              </div>
              <Link href="#">
                <h4
                  className="text-2xl font-medium mb-3"
                  id="how-to-configure-a-custom-domain"
                >
                  How to configure a Custom Domain
                  <Link
                    className="text-blue-500 text-xl ml-1 opacity-0 hover:opacity-100 transition-opacity"
                    aria-label="Anchor"
                    data-anchorjs-icon=""
                    href="#how-to-configure-a-custom-domain"
                    style={{ font: "1em / 1 anchorjs-icons" }}
                  ></Link>
                </h4>
              </Link>
              <ol className="list-decimal pl-6 space-y-4">
                <li>
                  Log in to the{" "}
                  <Link
                    href="https://portal.azure.com/"
                    target="_blank"
                    className="text-blue-500"
                  >
                    Azure Portal
                  </Link>{" "}
                  and find the Web App that is used for the Embedsy Portal. You
                  have selected this name during installation. It can be found
                  in the Resource Group that was created when you first
                  installed the Embedsy Portal.
                  <div className="mt-2">
                    <Image
                      src="/cd1.png"
                      alt="Adding Custom Domain to Azure Web App"
                      width={1300}
                      height={800}
                    />
                  </div>
                </li>
                <li className="text-[#6b707f] text-[16px] font-normal Poppins leading-[26px] ">
                  The next steps depend on your setup. Your website admin should
                  be able to help you with this. Please refer to the{" "}
                  <Link
                    href="https://learn.microsoft.com/en-gb/azure/app-service/app-service-web-tutorial-custom-domain?tabs=subdomain%2Cazurecli#2-create-the-dns-records"
                    target="_blank"
                    className="text-blue-500"
                  >
                    Microsoft documentation
                  </Link>{" "}
                  for details.
                  <div className="mt-2">
                    <Image
                      src="/cd2.png"
                      alt="DNS for Custom Domain"
                      width={1300}
                      height={800}
                    />
                  </div>
                </li>
                <li className="text-[#6b707f] text-[16px] font-normal Poppins leading-[26px] ">
                  The Custom Domain defined in the step before must now be added
                  to the Redirect URI of the Service Principal. Log in to{" "}
                  <Link
                    href="https://entra.microsoft.com/"
                    target="_blank"
                    className="text-blue-500"
                  >
                    Microsoft Entra
                  </Link>{" "}
                  and find the Service Principal that is used for the Embedy
                  Portal in App Registrations. Navigate to the Authentication
                  menu and paste the url, including https:// and followed by
                  /login/auth-callback into the Single-page application Redirect
                  URI field and save your changes.
                  <div className="mt-2">
                    <Image
                      src="/cd3.png"
                      alt="DNS for Custom Domain"
                      width={1300}
                      height={800}
                    />
                  </div>
                </li>
                <li className="text-[#6b707f] text-[16px] font-normal Poppins leading-[26px] ">
                  Open a new browser and navigate to the Custom Domain to test
                  if it works. Please note that this might take a few minutes...
                </li>
              </ol>
            </article>
            <div className="border-t border-gray-200 my-6"></div>
          </div>
        </section>
      </Layout>
    </>
  );
}
