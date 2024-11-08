import FAQForm from "@/app/Components/Faqs/FaqForm/FAQForm";
import UseTabs from "@/app/Components/Faqs/Tabs/UseTabs";
import PageBanner from "@/app/Components/Home/Hero/Hero";
import React from "react";
export async function generateMetadata() {
  return {
    title:
      "Embedsy FAQ - Installation, Pricing, and Microsoft Fabric Integration",
    description:
      "Find answers to common questions about Embedsy, including installation steps, pricing plans, Azure resources, and Microsoft Fabric integration. Explore our detailed FAQs to learn more.",
    keywords: [
      "Embedsy FAQ",
      "Embedsy installation guide",
      "Microsoft tenant",
      "Azure resources",
      "Power BI Embedded",
      "Microsoft Fabric",
      "Azure budget tracking",
      "Embedsy pricing plans",
      "Embedsy free trial",
    ],
    openGraph: {
      title: "Embedsy FAQ - Common Questions Answered",
      description:
        "Get answers to all your questions about Embedsy, including installation steps, pricing options, Azure integration, and more.",
    },
  };
}
const page = () => {
  return (
    <div className="pb-[80px]">
      <PageBanner name={"FAQ"} />
      <UseTabs />
      <FAQForm />
    </div>
  );
};

export default page;
