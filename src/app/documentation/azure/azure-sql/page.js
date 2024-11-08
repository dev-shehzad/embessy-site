import React from "react";
import Layout from "@/app/Components/Documentions/Layout/Layout";
import Link from "next/link";
// SEO metadata
export const metadata = {
  title: "Azure SQL Server and Database Overview",
  description:
    "Learn about the Azure SQL Server and Database used in the Embedsy Portal, including pricing, backup options, and management best practices.",
  keywords: [
    "Azure SQL Server",
    "Azure SQL Database",
    "Embedsy Portal",
    "Database Backup",
    "Azure Cost Management",
  ],
};

export default function Page() {
  return (
    <Layout>
      <section className="w-full">
        <div className="pt-12 pb-12 px-[15px]">
          <article className="pt-12 pb-12" id="getting">
            <h4 className="text-[30px] text-[#1d2746] leading-[36px] font-medium Robotomb-3 relative">
              Azure SQL Server and Database
              <Link
                className="text-[#10b3d6] text-xl ml-1 opacity-0 hover:opacity-100 transition-opacity"
                aria-label="Anchor"
                data-anchorjs-icon=""
                href="#azure-sql-server-and-database"
                style={{
                  font: "1em / 1 anchorjs-icons",
                  paddingLeft: "0.375em",
                }}
              ></Link>
            </h4>
            <p className="text-[#6b707f] text-[16px] font-normal Poppins leading-[26px]  mb-4">
              During the installation of the Embedsy Portal, we have created an
              Azure SQL Server and an SQL Database. This Database contains
              technical data used in the Embedsy Portal.
            </p>
            <Link
              className="text-2xl font-medium mb-3 relative"
              id="pricing"
              href="#"
            >
              Pricing
            </Link>
            <p className="text-[#6b707f] text-[16px] font-normal Poppins leading-[26px]  mb-4">
              During deployment, we have selected the smallest/cheapest option.
              In most cases, this is enough and won&#39;t generate a lot of
              costs. Still, we recommend managing your Azure costs in any case.
              Please refer to the article about{" "}
              <Link
                href="/documentation/installation/auzure_budget"
                className="text-[#10b3d6]"
              >
                Azure Budget &amp; Cost Control
              </Link>{" "}
              to learn how this can be done.
            </p>
            <Link
              className="text-2xl font-medium mb-3 relative"
              id="backup"
              href="#"
            >
              Backup
            </Link>
            <p className="text-[#6b707f] text-[16px] font-normal Poppins leading-[26px]  mb-4">
              Azure SQL Databases provide different backup options to ensure
              data protection. These backups allow for point-in-time restore
              within the retention period, which varies depending on your
              settings. During the installation of the Embedsy portal, a backup
              policy has been defined. You can manage and configure your backup
              settings in the Azure portal, including setting long-term
              retention policies, restoring databases from backups, and
              adjusting the backup frequency for specific needs.
            </p>
            <p className="text-[#6b707f] text-[16px] font-normal Poppins leading-[26px]  mb-4">
              For more detailed information and how-to guides, visit:{" "}
              <Link
                href="https://learn.microsoft.com/en-us/azure/azure-sql/database/automated-backups-overview"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#10b3d6]"
              >
                Azure SQL Database Backup Overview
              </Link>
            </p>
            <div className="bg-yellow-100 border border-yellow-300 p-4 mb-6 flex items-start">
              <div className="flex-shrink-0">
                <svg
                  className="h-6 w-6 text-yellow-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h1v4zm0-6h-1V7h1v3zm0 0H6.5A1.5 1.5 0 015 8.5v-3A1.5 1.5 0 016.5 4h6A1.5 1.5 0 0114 5.5v3A1.5 1.5 0 0112.5 10zM21 14h-2a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1zM19 15h-2v4h2v-4zM15 16h-1v-4h1v4z"
                  ></path>
                </svg>
              </div>
              <div className="ml-4">
                <h5 className="font-medium text-yellow-800">Important</h5>
                <p className="text-yellow-700">
                  Do not make any changes to the data in the DB. This could
                  break the Embedsy Portal.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </Layout>
  );
}
