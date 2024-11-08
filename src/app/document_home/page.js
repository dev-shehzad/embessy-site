import React from "react";
import Layout from "@/app/Components/Documentions/Layout/Layout";
export const metadata = {
  title: "Documentation - Embedsy | Comprehensive Guide to Our Portal",
  description:
    "Explore the comprehensive documentation for Embedsy Portal. Browse through topics to find essential information and guides. If you have questions, feel free to contact us.",
  keywords:
    "Embedsy documentation, Embedsy Portal guide, user manual, help center, FAQs, product documentation",
};
export default function page() {
  return (
    <Layout>
      <article className="pt-16 px-[15px]" id="documentation">
        <div className="mb-10">
          <h1 className=" mb-3 text-[30px] text-[#1d2746] leading-[36px] font-medium Roboto ">
            Documentation
          </h1>
          <p className="text-[#6b707f] text-[16px] font-normal Poppins leading-[26px]">
            Our documentation contains everything there is to know about the
            Embedsy Portal. Please browse the topics from the left hand menu. If
            you do not find what you are looking for, simply contact us.
          </p>
        </div>
      </article>
    </Layout>
  );
}
