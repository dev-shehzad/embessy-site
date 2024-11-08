import React from "react";
import Layout from "@/app/Components/Documentions/Layout/Layout";
import Link from "next/link";
// SEO metadata
export const metadata = {
  title:
    "Fabric/Power BI Embedded/Power BI Premium Capacity - Embedsy Documentation",
  description:
    "Discover how Embedsy Portal works with Microsoft Fabric and Power BI Embedded capacities, including pricing, monitoring, and key features.",
  keywords: [
    "Power BI",
    "Fabric",
    "Power BI Embedded",
    "Premium Capacity",
    "Embedsy Portal",
    "Capacity Pricing",
    "Capacity Monitoring",
    "Microsoft Fabric",
  ],
};
export default function page() {
  return (
    <Layout>
      <section className="w-full">
        <div className="documentation_info">
          <article className="pt-12 pb-12 px-[15px]" id="getting">
            <h4
              className="text-[30px] text-[#1d2746] leading-[36px] font-medium Roboto mb-3 relative"
              id="fabric-power-bi-embedded-power-bi-premium-capacity"
            >
              Fabric/Power BI Embedded/Power BI Premium Capacity
              <Link
                className="text-[#10b3d6] text-xl ml-1 opacity-0 hover:opacity-100 transition-opacity"
                aria-label="Anchor"
                data-anchorjs-icon=""
                href="#fabric-power-bi-embedded-power-bi-premium-capacity"
                style={{
                  font: "1em / 1 anchorjs-icons",
                  paddingLeft: "0.375em",
                }}
              ></Link>
            </h4>
            <p className="text-[#6b707f] text-[16px] font-normal Poppins leading-[26px]  mb-4">
              The Embedsy Portal works with any capacity. In most cases, we
              recommend using Microsoft Fabric Capacities due to the additional
              features but there might be cases where a Power BI Embedded
              Capacity makes more sense.
            </p>
            <h2
              className="text-[30px] text-[#1d2746] leading-[36px] font-medium Roboto mb-3 relative"
              id="pricing"
              href="#"
            >
              Pricing
              <Link
                className="text-[#10b3d6] text-xl ml-1 opacity-0 hover:opacity-100 transition-opacity"
                aria-label="Anchor"
                data-anchorjs-icon=""
                href="#pricing"
                style={{
                  font: "1em / 1 anchorjs-icons",
                  paddingLeft: "0.375em",
                }}
              ></Link>
            </h2>
            <p className="text-[#6b707f] text-[16px] font-normal Poppins leading-[26px]  mb-4">
              This is a big topic, which is why we have written a{" "}
              <Link
                href="/blogs/pricing-microsoft-fabric-power-bi-embedded"
                className="text-[#10b3d6]"
              >
                blog post about Capacity pricing
              </Link>
              . it&apos;s important to know that the Embedsy portal can
              automatically start a Capacity when somebody enters the portal and
              pause it when nobody is using it. This way, costs can be reduced
              drastically.
            </p>
            <h4 className="text-[30px] text-[#1d2746] leading-[36px] font-medium Roboto mb-3">
              Monitoring
            </h4>
            <p className="text-[#6b707f] text-[16px] font-normal Poppins leading-[26px] ">
              Whatever Capacity you have, it&apos;s important to monitor it to
              make sure it fits your needs. If you already have Power BI/Fabric
              Center of Excellence or something similar, the people in this team
              will most likely take care of this. If this is not the case and
              you would like to learn more, reach out to us and we can get you
              in touch with one of our partner companies that can help you with
              this. Learn more about{" "}
              <Link
                href="/documentation/fabric-embedded-capacity/power-bi-capacity-monitoring"
                className="text-[#10b3d6]"
              >
                Power BI & Fabric Capacity Monitoring
              </Link>{" "}
              here.
            </p>
          </article>
        </div>
      </section>
    </Layout>
  );
}
