import React from "react";
import Layout from "@/app/Components/Documentions/Layout/Layout";

export const metadata = {
  title: "Embedsy Change Log - Upcoming Features and Updates",
  description:
    "Stay tuned for the upcoming change log detailing the latest features and updates for the Embedsy Portal.",
  keywords: ["Embedsy", "Change Log", "Updates", "Features", "Embedsy Portal"],
};

export default function page() {
  return (
    <Layout>
      <section className="lg:w-7/12 md:w-8/12 px-[15px] ">
        <div id="post" className="shortcode_info rvfs-4" data-rvfs="4">
          <div className="shortcode_title mb-10 pt-[50px]">
            <h1 className="text-[30px] text-[#1d2746] leading-[36px] font-medium Roboto mb-3">
              Change Log coming soon...
            </h1>
          </div>
        </div>
      </section>
    </Layout>
  );
}
