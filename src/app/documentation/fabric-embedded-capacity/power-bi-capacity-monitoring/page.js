import React from "react";
import Layout from "@/app/Components/Documentions/Layout/Layout";
import Link from "next/link";
export const metadata = {
  title:
    "Monitoring Fabric/Power BI Embedded/Power BI Premium Capacity - Embedsy Documentation",
  description:
    "Learn how to effectively monitor Microsoft Fabric capacities and optimize performance in the Embedsy Portal. Discover tools, strategies, and how we can assist you.",
  keywords: [
    "Fabric Monitoring",
    "Power BI Monitoring",
    "Power BI Embedded",
    "Premium Capacity",
    "Microsoft Fabric",
    "Capacity Optimization",
    "Throttling",
    "Embedsy Portal",
  ],
};
function page() {
  return (
    <Layout>
      <div className="w-full">
        <div className="pt-12 pb-12 px-[15px]">
          <article id="getting">
            <h4
              className="text-[30px] text-[#1d2746] leading-[36px] font-medium Roboto mb-3 relative"
              id="fabric-power-bi-embedded-power-bi-premium-capacity-monitoring"
            >
              Fabric/Power BI Embedded/Power BI Premium Capacity Monitoring
              <Link
                className="text-[#10b3d6] text-xl ml-1 opacity-0 hover:opacity-100 transition-opacity"
                aria-label="Anchor"
                data-anchorjs-icon=""
                href="#fabric-power-bi-embedded-power-bi-premium-capacity-monitoring"
                style={{
                  font: "1em / 1 anchorjs-icons",
                  paddingLeft: "0.375em",
                }}
              ></Link>
            </h4>
            <p className="text-[#6b707f] text-[16px] font-normal Poppins leading-[26px] mb-4">
              Regardless if somebody is using the Embedsy Portal, monitoring
              Microsoft Fabric Capacities is a very important task.
            </p>
            <p className="text-[#6b707f] text-[16px] font-normal Poppins leading-[26px] mb-4">
              There are a lot of good resources about this topic. Some of them
              are listed below.
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li className="mb-2">
                <b>
                  <Link
                    href="https://learn.microsoft.com/en-us/fabric/enterprise/metrics-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#10b3d6]"
                  >
                    Microsoft Fabric Capacity Metrics App:
                  </Link>
                </b>{" "}
                This app is designed to help administrators monitor compute and
                storage usage on Fabric and Power BI capacities. It provides
                detailed insights into utilization, processing time, and
                resource consumption, helping identify peak demand times and
                potential overloads.
              </li>
              <li className="mb-2">
                <b>
                  <Link
                    href="https://blog.fabric.microsoft.com/en-us/blog/fabric-capacities-everything-you-need-to-know-about-whats-new-and-whats-coming"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#10b3d6]"
                  >
                    Capacity Optimization Strategies:
                  </Link>
                </b>{" "}
                Microsoft Fabric and Power BI offer various strategies for
                optimizing capacity usage, such as distributing workloads across
                multiple capacities, using capacity units (CUs) for better
                granularity, and employing efficient query designs and data
                models to minimize compute resource consumption.
              </li>
              <li className="mb-2">
                <b>
                  <Link
                    href="https://blog.fabric.microsoft.com/en-us/blog/fabric-capacities-everything-you-need-to-know-about-whats-new-and-whats-coming"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#10b3d6]"
                  >
                    Throttling and Overload Protection:
                  </Link>
                </b>{" "}
                Microsoft has updated its policies to better manage throttling
                when capacities are overused. These policies allow for proactive
                monitoring and management to avoid excessive load, especially in
                high-usage periods.
              </li>
            </ul>
            <h4 className="text-[30px] text-[#1d2746] leading-[36px] font-medium Roboto mb-3">
              How can we help?
            </h4>
            <p className="text-[#6b707f] text-[16px] font-normal Poppins leading-[26px]">
              Embedsy itself doesn&apos;t offer this service, but our partner
              companies (The companies of Embedsy&apos;s founders) are
              specialized in this and are ready to help you out. Simply{" "}
              <Link href="/contact" className="text-[#10b3d6]">
                contact us
              </Link>{" "}
              and we&apos;ll put you in touch with the right people.
            </p>
          </article>
        </div>
      </div>
    </Layout>
  );
}

export default page;
